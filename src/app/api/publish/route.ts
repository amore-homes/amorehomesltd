// API route for publishing notifications
import { NextResponse } from "next/server"
import dbConnect from "../../../../lib/dbConnect"
import BlogPost from "../../../../models/BlogPost"
import Subscriber from "../../../../models/Subscriber"
import sendEmail from "../../../../lib/sendEmail"

export async function POST(request: Request) {
  const { title, content } = await request.json()

  if (!title || !content) {
    return NextResponse.json(
      { message: "Title and content are required" },
      { status: 400 }
    )
  }

  try {
    await dbConnect()

    const newPost = new BlogPost({ title, content })
    await newPost.save()

    const subscribers = await Subscriber.find({})
    const emailPromises = subscribers.map((subscriber) =>
      sendEmail({
        to: subscriber.email,
        subject: `New Blog Post: ${title}`,
        text: `Check out our new post titled "${title}":\n\n${content}\n\nTo unsubscribe, click here: ${
          process.env.NEXT_PUBLIC_APP_URL
        }/unsubscribe?email=${encodeURIComponent(subscriber.email)}`,
      })
    )

    await Promise.all(emailPromises)

    return NextResponse.json({
      message: "Blog post published and notifications sent",
    })
  } catch (error) {
    return NextResponse.json({ message: "Server error" }, { status: 500 })
  }
}
