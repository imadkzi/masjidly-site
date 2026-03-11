import nodemailer from 'nodemailer'

export const handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    }
  }

  try {
    const { name, masjidName, role, email } = JSON.parse(event.body || '{}')

    if (!name || !masjidName || !email || !/^[^@]+@[^@]+\.[^@]+$/.test(email)) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Name, masjid name, and a valid email are required' }),
      }
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT || 465),
      secure: process.env.SMTP_PORT !== '587', // true for 465, false for 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const html = `
      <div style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background:#f5f0e8; padding:24px;">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e2d6c0;">
          <tr>
            <td style="background:#112b32;color:#f5f0e8;padding:18px 24px;font-size:16px;font-weight:700;">
              Masjidly – New onboarding enquiry
            </td>
          </tr>
          <tr>
            <td style="padding:20px 24px;color:#112b32;font-size:14px;line-height:1.6;">
              <p style="margin:0 0 12px 0;">A masjid has requested to start onboarding with Masjidly.</p>

              <p style="margin:0 0 4px 0;font-weight:600;">Contact</p>
              <p style="margin:0 0 10px 0;font-size:15px;">
                ${name}<br />
                <a href="mailto:${email}" style="color:#2a6e7f;text-decoration:none;">${email}</a>
              </p>

              <p style="margin:0 0 4px 0;font-weight:600;">Masjid</p>
              <p style="margin:0 0 10px 0;font-size:15px;">${masjidName}</p>

              ${
                role
                  ? `<p style="margin:0 0 4px 0;font-weight:600;">Role</p><p style="margin:0 0 10px 0;font-size:14px;">${role}</p>`
                  : ''
              }

              <p style="margin:8px 0 4px 0;font-size:12px;color:#6b7280;">Source: masjidly-site CTA section</p>
            </td>
          </tr>
        </table>
        <p style="margin:16px auto 0 auto;max-width:560px;font-size:11px;color:#6b7280;text-align:center;">
          You’re receiving this because this address is configured as the onboarding contact in the Masjidly SPA.
        </p>
      </div>
    `

    await transporter.sendMail({
      from: 'Masjidly Onboarding <onboarding@masjidly.co.uk>',
      to: 'salaam@masjidly.co.uk',
      subject: 'New Masjidly onboarding enquiry',
      text: `A new onboarding enquiry was submitted.

Name: ${name}
Masjid: ${masjidName}
Role: ${role || '-'}
Email: ${email}

Source: masjidly site`,
      html,
    })

    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true }),
    }
  } catch (err) {
    console.error('Contact function error', err)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send email' }),
    }
  }
}


