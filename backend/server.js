import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:3000",
      process.env.FRONTEND_URL,
    ].filter(Boolean),
    credentials: true,
  }),
);
app.use(express.json());

// Configure Nodemailer with Gmail
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASSWORD,
  },
});

// Email validation
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Contact Form Endpoint
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ error: "Invalid email address" });
    }

    // Email content
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: `Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
      replyTo: email,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({
      success: true,
      message: "Email sent successfully!",
    });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({
      error: "Failed to send email",
      details: error.message,
    });
  }
});

// Let's Talk (Project Inquiry) Endpoint
app.post("/api/lets-talk", async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    // Validation
    if (!name || !email || !subject || !message) {
      return res
        .status(400)
        .json({ error: "Name, email, subject, and message are required" });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ error: "Invalid email address" });
    }

    // Email content
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: `Project Inquiry: ${subject}`,
      html: `
        <h2>New Project Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
      replyTo: email,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({
      success: true,
      message: "Project inquiry sent successfully!",
    });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({
      error: "Failed to send email",
      details: error.message,
    });
  }
});

// Email Me Endpoint
app.post("/api/email-me", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ error: "Invalid email address" });
    }

    // Email content
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: `Email Me: ${subject}`,
      html: `
        <h2>Quick Email Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
      replyTo: email,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({
      success: true,
      message: "Email sent successfully!",
    });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({
      error: "Failed to send email",
      details: error.message,
    });
  }
});

// Health check
app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "Backend server is running" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
