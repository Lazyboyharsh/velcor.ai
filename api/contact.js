import { sendContactEmail } from "../lib/mail.js";
export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ success: false, message: "Method not allowed" });
  try { if (!req.body?.email) return res.status(400).json({ success: false, message: "Email required" }); await sendContactEmail(req.body); return res.status(200).json({ success: true }); }
  catch (error) { console.error(error); return res.status(500).json({ success: false, message: "Unable to send enquiry" }); }
}
