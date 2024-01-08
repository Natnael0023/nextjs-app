import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const POST = async (req:NextRequest, res:NextResponse)=>{
    console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@jhsbakdjb')
  if (req.method === "POST") {
    const { email,subject, message } = await req.json();
    console.log(email) 

    // Create a transporter using your email service provider's SMTP settings
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "nathyron23@gmail.com", // Replace with your Gmail email address
        pass: 'net7@Nathyron23.com', // Replace with your Gmail password or an app-specific password
      },
    });

    // Define the email options
    const mailOptions = {
      from: "your-email@gmail.com", // Replace with your Gmail email address
      to: "nathyron23@gmail.com@gmail.com", // Replace with the recipient's email address
      subject: "New Email from Contact Form",
      text: `Name: ${email}\nEmail: ${email}\n\n${message}`,
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);
      return new NextResponse(JSON.stringify({message:'sent'}),{status:200})
    } catch (error) {
      console.error("Error sending email:", error);
      return new NextResponse(JSON.stringify({message:'Error'}),{status:500})
    }
  } else {
    return new NextResponse(JSON.stringify({message:'method not allowed'}),{status:405})
}
}


//
// import type { NextApiRequest, NextApiResponse } from "next";
// // import { render } from "@react-email/render";
// import { sendEmail } from "./email";

// export const POST = async (
//   req: NextApiRequest,
//   res: NextApiResponse
// ) => {
//   await sendEmail({
//     to: "nathyron23@gmail.com",
//     subject: "Welcome to NextAPI",
//     html: render('wow'),
//   });

//   return res.status(200).json({ message: "Email sent successfully" });
// }