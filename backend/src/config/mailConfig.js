import nodemailer from "nodemailer";
import { ENV } from "./envConfig.js";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: ENV.SMTP_USER,
    pass: ENV.SMTP_PASS,
  },
});

// Optional: verify connection on startup
transporter.verify((error, success) => {
  if (error) {
    console.error("❌ SMTP Connection Failed:", error);
  } else {
    console.log("✅ SMTP Server Ready to Send Emails");
  }
});
