import axios from "axios";
import { ENV } from "./envConfig.js";

export const SHEETY_BASE_URL = ENV.SHEETY_BASE_URL;
export const SHEETY_TOKEN = ENV.SHEETY_TOKEN;

if (!SHEETY_BASE_URL || !SHEETY_TOKEN) {
  console.error("❌ Missing Sheety configuration. Check .env file.");
  process.exit(1);
}

export const sheetyClient = axios.create({
  baseURL: SHEETY_BASE_URL,
  headers: {
    Authorization: SHEETY_TOKEN,
    "Content-Type": "application/json",
  },
});


