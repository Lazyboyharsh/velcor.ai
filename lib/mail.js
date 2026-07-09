import nodemailer from "nodemailer";

function required(name) {
  if (!process.env[name]) throw new Error(`Missing environment variable: ${name}`);
  return process.env[name];
}

export async function sendContactEmail(payload) {
  const ownerEmail = process.env.BOOKING_NOTIFICATION_EMAIL || process.env.EMAIL_USER;
  const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE || "gmail",
    auth: { user: required("EMAIL_USER"), pass: required("EMAIL_PASS") },
  });
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: ownerEmail,
    replyTo: payload.email,
    subject: payload.subject || "New Velcor.ai website enquiry",
    text: Object.entries(payload).map(([key, value]) => `${key}: ${value}`).join("\n"),
  });
}
