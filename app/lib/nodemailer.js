import nodemailer from "nodemailer";

const email = process.env.MAIL_USER;
const pass = process.env.MAIL_KEY;

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass,
  },
});

export const mailOptions = {
  from: email,
  to: email,
};
