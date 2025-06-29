import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, phone, message } = await req.json();

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.SMTP_USER,
      subject: `New Enquiry from ${name}`,
      text: `
  Name: ${name}
  Email: ${email}
  Phone: ${phone}
  Message: ${message || "No message provided"}
      `,
    });

    console.log("✅ Email sent successfully");
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("❌ Email sending error:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
