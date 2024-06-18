import { NextApiRequest, NextApiResponse } from "next";
import sendgrid from "@sendgrid/mail";
import { Status } from "../../types/enum";

const sendgridAPIKey = String(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);
sendgrid.setApiKey(sendgridAPIKey);

type RequestBody = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
  const { name, email, subject, message }: RequestBody = req.body;
  try {
    await sendgrid.send({
      to: "raulk023@gmail.com",
      from: "raulk023@gmail.com",
      subject: subject,
      html: `<h1>Message from ${name} (${email})</h1>
             <p>${message}</p>
            `,
    });
  } catch (error: any) {
    return res.status(error.statusCode || 500).json({ status: Status.Success });
  }
  return res.status(200).json({ status: Status.Success });
}

export default sendEmail;
