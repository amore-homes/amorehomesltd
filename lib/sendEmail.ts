// SendGrid email utility
import sgMail from "@sendgrid/mail"

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string)

interface EmailParams {
  to: string
  subject: string
  text: string
  html?: string
}

export default async function sendEmail({
  to,
  subject,
  text,
  html,
}: EmailParams) {
  const msg = {
    to,
    from: process.env.MY_EMAIL, // Use a verified sender from your SendGrid account
    subject,
    text,
    html,
  }

  try {
    await sgMail.send(msg as any)
    console.log(`Email sent to ${to}`)
  } catch (error: any) {
    console.error(`SendGrid error for ${to}:`, error)
    if (error.response) {
      console.error(error.response.body)
    }
    throw error
  }
}
