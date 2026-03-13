import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const body = await request.json()

  try {
    const data = await resend.emails.send({
      from: "unmail@mail.com", //TODO: mail
      to: body.to,
      subject: body.subject,
      html: `<p>${body.message}</p>`,
    })

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error })
  }
}
