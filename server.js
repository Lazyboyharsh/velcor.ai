import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// ========================================
// EMAIL TRANSPORTER
// ========================================
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// ========================================
// BOOKING API
// ========================================
app.post("/send-booking", async (req, res) => {
  try {
    const {
      name,
      email,
      mobile,
      company,
      selectedDate,
      selectedTime,
    } = req.body;

    // ========================================
    // EMAIL CONTENT
    // ========================================
    const mailOptions = {
      from: process.env.EMAIL_USER,

      to: "velcor.ai.team@gmail.com",

      subject: "🚀 New Strategy Call Booking - Velcor.ai",

      html: `
        <div style="font-family: Arial; padding: 20px;">
          
          <h2>New Strategy Session Booking</h2>

          <p><strong>Name:</strong> ${name}</p>

          <p><strong>Email:</strong> ${email}</p>

          <p><strong>Mobile:</strong> ${mobile}</p>

          <p><strong>Company:</strong> ${company}</p>

          <hr />

          <p><strong>Selected Date:</strong> ${selectedDate}</p>

          <p><strong>Selected Time:</strong> ${selectedTime}</p>

        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Email failed",
    });
  }
});

// ========================================
// SERVER
// ========================================
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});