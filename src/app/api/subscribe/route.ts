// API route for subscribing
import { NextResponse } from "next/server"
import axios from "axios"
import dbConnect from "../../../../lib/dbConnect"
import Subscriber, { ISubscriber } from "../../../../models/Subscriber"

interface RecaptchaResponse {
  success: boolean
  score: number
  action: string
  "error-codes"?: string[]
}

export async function POST(request: Request) {
  const { email, recaptchaToken } = await request.json()

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!email || !emailRegex.test(email)) {
    return NextResponse.json(
      { message: "Invalid email address" },
      { status: 400 }
    )
  }

  if (!recaptchaToken) {
    return NextResponse.json(
      { message: "reCAPTCHA token is missing" },
      { status: 400 }
    )
  }

  try {
    // Verify reCAPTCHA token
    const recaptchaSecretKey = process.env.RECAPTCHA_SECRET_KEY!
    const recaptchaResponse = await axios.post<RecaptchaResponse>(
      `https://www.google.com/recaptcha/api/siteverify`,
      null,
      {
        params: {
          secret: recaptchaSecretKey,
          response: recaptchaToken,
        },
      }
    )

    const {
      success,
      score,
      action,
      "error-codes": errorCodes,
    } = recaptchaResponse.data

    if (!success) {
      console.error("reCAPTCHA verification failed:", errorCodes)
      return NextResponse.json(
        { message: "reCAPTCHA verification failed" },
        { status: 400 }
      )
    }

    if (action !== "subscribe" || score < 0.5) {
      return NextResponse.json(
        { message: "Suspicious activity detected" },
        { status: 400 }
      )
    }

    // Connect to the database
    await dbConnect()

    // Check if email is already subscribed
    const existingSubscriber: ISubscriber | null = await Subscriber.findOne({
      email,
    })
    if (existingSubscriber) {
      return NextResponse.json(
        { message: "Email already subscribed" },
        { status: 409 }
      )
    }

    // Add new subscriber
    const newSubscriber = new Subscriber({ email })
    await newSubscriber.save()

    return NextResponse.json(
      { message: "Subscription successful" },
      { status: 200 }
    )
  } catch (error: any) {
    console.error("Subscription error:", error)
    return NextResponse.json({ message: "Server error" }, { status: 500 })
  }
}
