import nodemailer from "nodemailer";

type EmailPayload = {
    to: string
    subject: string
    html: string
  }
  
  // Replace with your SMTP credentials
  const smtpOptions = {
    host: process.env.SMTP_HOST || "smtp.mailtrap.io",
    port: parseInt(process.env.SMTP_PORT || "2525"),
    secure: false,
    auth: {
      user: 'nathyron23@gmail.com' || "user",
      pass: 'net7@Nathyron23.com' || "password",
    },
  }
  
  export const sendEmail = async (data: EmailPayload) => {
    const transporter = nodemailer.createTransport({
      ...smtpOptions,
    })
  
    return await transporter.sendMail({
      from: process.env.SMTP_FROM_EMAIL,
      ...data,
    })
  }