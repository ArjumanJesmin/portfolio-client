// pages/api/mail/send.ts
import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const sendEmail = async (req: NextApiRequest, res: NextApiResponse) => {
  const { to, subject, message } = req.body;

  if (!to || !subject || !message) {
    return res
      .status(400)
      .json({ success: false, message: "Missing required fields" });
  }

  try {
    const response = await axios.post(
      "https://portfolio-server-inky-six.vercel.app/api/v1/send",
      {
        to,
        subject,
        message,
      }
    );

    return res.status(201).json(response.data);
  } catch (error) {
    console.error("Error sending email:", error);
    return res
      .status(500)
      .json({ success: false, message: "Failed to send email" });
  }
};

export default sendEmail;
