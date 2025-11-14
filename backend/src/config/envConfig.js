// src/config/env.js
import dotenv from "dotenv";
dotenv.config();

export const ENV = {
  PORT: process.env.PORT || 5000,
  NODE_ENV: process.env.NODE_ENV || "development",

  // Admin dashboard credentials
  ADMIN_EMAIL: process.env.ADMIN_EMAIL,
  ADMIN_PASSWORD: process.env.ADMIN_PASSWORD,

  // Sheety API
  SHEETY_API_URL: process.env.SHEETY_API_URL,
  SHEETY_TOKEN: process.env.SHEETY_TOKEN,

  // Email SMTP
  GMAIL_USER: process.env.GMAIL_USER,
  GMAIL_PASS: process.env.GMAIL_PASS,
  CLIENT_EMAIL: process.env.CLIENT_EMAIL,
};
