// API route for unsubscribing
import { NextResponse } from "next/server"
import dbConnect from "../../../../lib/dbConnect"
import Subscriber from "../../../../models/Subscriber"

export async function POST(request: Request) {
  const { email } = await request.json()

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { message: "Invalid email address" },
      { status: 400 }
    )
  }

  try {
    await dbConnect()

    const result = await Subscriber.deleteOne({ email })
    if (result.deletedCount === 0) {
      return NextResponse.json({ message: "Email not found" }, { status: 404 })
    }

    return NextResponse.json({ message: "You have been unsubscribed" })
  } catch (error) {
    return NextResponse.json({ message: "Server error" }, { status: 500 })
  }
}
