import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
    const body = await request.json()

    try {
        const data = await resend.emails.send({
            from: "business@protolylat.com", //TODO: mail
            to: body.to,
            subject: body.subject,
            html: `
      <div style="background-color:#0a0a0a; color:white; font-family:'JetBrains Mono', monospace; padding:20px;">
      <h1 style="color:#39ff14;">${body.subject}</h1>
      <p style="color:#a855f7;">${body.message}</p>
      <footer style="margin-top:20px; font-size:12px; color:#888;">
        by Protolylat
      </footer>
    </div>
    `,
        })

        return NextResponse.json(data)
    } catch (error) {
        return NextResponse.json({ error })
    }
}
