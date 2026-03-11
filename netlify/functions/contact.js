import nodemailer from "nodemailer";

export const handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const { name, masjidName, role, email } = JSON.parse(event.body || "{}");

    if (!name || !masjidName || !email || !/^[^@]+@[^@]+\.[^@]+$/.test(email)) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: "Name, masjid name, and a valid email are required",
        }),
      };
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT || 465),
      secure: process.env.SMTP_PORT !== "587", // true for 465, false for 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const html = `
      <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#f5f0e8;padding:28px;">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:680px;margin:0 auto;border-radius:18px;overflow:hidden;background:#ffffff;border:1px solid rgba(17,43,50,0.06);box-shadow:0 18px 40px rgba(17,43,50,0.08);">
          <tr>
            <td style="background:#112b32;padding:16px 24px 14px 24px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding-bottom:8px;">
                    <img src="https://res.cloudinary.com/imadkazi/image/upload/v1773227542/logo-full_lfvg4p.png" alt="Masjidly" style="height:32px;display:block;border:none;" />
                  </td>
                </tr>
                <tr>
                  <td style="color:#f5f0e8;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;opacity:0.8;">
                    Masjidly Onboarding
                  </td>
                </tr>
                <tr>
                  <td style="padding-top:4px;color:#f5f0e8;font-size:20px;font-weight:800;letter-spacing:-0.03em;">
                    New enquiry received
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:22px 24px 8px 24px;color:#112b32;font-size:14px;line-height:1.7;">
              <p style="margin:0 0 16px 0;">
                A masjid has submitted their details from the Masjidly site to start onboarding.
              </p>
              <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin:4px 0 12px 0;font-size:13px;">
                <tr>
                  <td style="padding:8px 0 4px 0;font-weight:700;font-size:12px;letter-spacing:0.14em;text-transform:uppercase;color:#6b7280;">
                    Contact
                  </td>
                </tr>
                <tr>
                  <td style="padding:0 0 10px 0;">
                    <span style="font-weight:600;">${name}</span><br />
                    <a href="mailto:${email}" style="color:#2a6e7f;text-decoration:none;">${email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:8px 0 4px 0;font-weight:700;font-size:12px;letter-spacing:0.14em;text-transform:uppercase;color:#6b7280;">
                    Masjid
                  </td>
                </tr>
                <tr>
                  <td style="padding:0 0 10px 0;">
                    <span style="font-weight:600;">${masjidName}</span>
                  </td>
                </tr>
                ${
                  role
                    ? `
                <tr>
                  <td style="padding:8px 0 4px 0;font-weight:700;font-size:12px;letter-spacing:0.14em;text-transform:uppercase;color:#6b7280;">
                    Role
                  </td>
                </tr>
                <tr>
                  <td style="padding:0 0 10px 0;">${role}</td>
                </tr>`
                    : ""
                }
              </table>
            </td>
          </tr>
        </table>
        <p style="margin:18px auto 0 auto;max-width:680px;font-size:11px;color:#9ca3af;text-align:center;">
          You’re receiving this because this address is configured as the onboarding contact for Masjidly.
        </p>
      </div>
    `;

    await transporter.sendMail({
      from: "Masjidly Onboarding <onboarding@masjidly.co.uk>",
      to: "salaam@masjidly.co.uk",
      subject: "New Masjidly onboarding enquiry",
      text: `A new onboarding enquiry was submitted.

Name: ${name}
Masjid: ${masjidName}
Role: ${role || "-"}
Email: ${email}

Source: masjidly site`,
      html,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true }),
    };
  } catch (err) {
    console.error("Contact function error", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to send email" }),
    };
  }
};
