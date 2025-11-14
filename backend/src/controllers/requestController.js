import { addSheetData } from "../utils/sheetyClient.js";
import { sendEmail } from "../utils/sendEmail.js";

export const handleServiceRequest = async (req, res, next) => {
  try {
    const { name, email, phone, serviceType, message } = req.body;

    if (!name || !email || !phone || !serviceType) {
      return res.status(400).json({ error: "Please fill all required fields." });
    }

    // 1️⃣ Save to Sheety
    await addSheetData("serviceRequests", {
      name,
      email,
      phone,
      serviceType,
      message,
      createdAt: new Date().toISOString(),
    });

    // 2️⃣ Send email to client
    await sendEmail(
      process.env.CLIENT_EMAIL,
      `New Service Request: ${serviceType}`,
      `
      <h3>New Service Request Received</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Service Type:</strong> ${serviceType}</p>
      <p><strong>Message:</strong> ${message}</p>
      `
    );

    // 3️⃣ Send confirmation email to user
    await sendEmail(
      email,
      "Your Service Request Has Been Received",
      `
      <p>Hi ${name},</p>
      <p>Thank you for reaching out! We’ve received your request for <strong>${serviceType}</strong>.</p>
      <p>Our team will contact you shortly.</p>
      <p>Warm regards,<br>Special Needs Services Team</p>
      `
    );

    // 4️⃣ Respond to frontend
    res.status(201).json({
      success: true,
      message: "Request submitted successfully. You will receive an email shortly.",
    });
  } catch (error) {
    next(error);
  }
};
