import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"
import Mail from "nodemailer/lib/mailer"

export async function POST(request: NextRequest) {
  const { email, name, phone, message } = await request.json()
  const transport = nodemailer.createTransport({
    service: "gmail",
    /* 
      setting service as 'gmail' is same as providing these setings:
      host: "smtp.gmail.com",
      port: 465,
      secure: true
      If you want to use a different email provider other than gmail, you need to provide these manually.
      Or you can go use these well known services and their settings at
      https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json
  */
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  })

  let from = `${name} <${email}>`
  const mailOptions: Mail.Options = {
    from: from,
    to: `Amore homes ltd. <${process.env.MY_EMAIL}>`,
    // cc: email, (uncomment this line if you want to send a copy to the sender)
    subject: `A message from ${name} (${email})`,
    html: `<h4>Dear support,</h4>
    <p>Please find below user information</p>
            <ul>
                <li>Name: ${name}</li>
                <li>Email: ${email}</li>
                <li>Phone: ${phone}</li> 
            </ul>
      <p>${message}</p>`,
  }
  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve("Message sent successful")
        } else {
          reject(err.message)
        }
      })
    })
  try {
    await sendMailPromise()
    return NextResponse.json({ message: "Message sent successfully" })
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 })
  }
}
