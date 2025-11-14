import { transporter } from "../config/mailConfig.js";

export const sendEmail = async (to, subject, html) => {
  await transporter.sendMail({
    from: `"Special Needs Services" <${process.env.SMTP_USER}>`,
    to,
    subject,
    html,
  });
};
