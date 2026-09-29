// import Enquiry from "../models/Enquiry.js";

// export const createEnquiry = async (req, res) => {
//   try {
//     const {
//       name,
//       email,
//       company,
//       projectType,
//       budget,
//       timeline,
//       message,
//     } = req.body;

//     if (!name?.trim()) {
//       return res.status(400).json({
//         message: "Name is required.",
//       });
//     }

//     if (!email?.trim()) {
//       return res.status(400).json({
//         message: "Email is required.",
//       });
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (!emailRegex.test(email)) {
//       return res.status(400).json({
//         message: "Please provide a valid email address.",
//       });
//     }

//     if (!projectType) {
//       return res.status(400).json({
//         message: "Project type is required.",
//       });
//     }

//     if (!message?.trim()) {
//       return res.status(400).json({
//         message: "Project description is required.",
//       });
//     }

//     const enquiry = await Enquiry.create({
//       name: name.trim(),
//       email: email.trim().toLowerCase(),
//       company: company?.trim(),
//       projectType,
//       budget,
//       timeline,
//       message: message.trim(),
//     });

//     res.status(201).json({
//       message: "Your enquiry has been submitted successfully.",
//       // enquiry,
//     });
//   } catch (error) {
//     console.error("Create enquiry error:", error);

//     res.status(500).json({
//       message: "Something went wrong. Please try again.",
//     });
//   }
// };




import { Resend } from "resend";
import Enquiry from "../models/Enquiry.js";


export const createEnquiry = async (req, res) => {
  try {
    const {
      name,
      email,
      company,
      projectType,
      budget,
      timeline,
      message,
    } = req.body;

    if (!name?.trim()) {
      return res.status(400).json({
        message: "Name is required.",
      });
    }

    if (!email?.trim()) {
      return res.status(400).json({
        message: "Email is required.",
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({
        message: "Please provide a valid email address.",
      });
    }

    if (!projectType) {
      return res.status(400).json({
        message: "Project type is required.",
      });
    }

    if (!message?.trim()) {
      return res.status(400).json({
        message: "Project description is required.",
      });
    }

    // Save enquiry to MongoDB
    const enquiry = await Enquiry.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      company: company?.trim(),
      projectType,
      budget,
      timeline,
      message: message.trim(),
    });

    // Send notification to MANVYN
    try {
      
      const resend = new Resend(process.env.RESEND_API_KEY);

      await resend.emails.send({
        from: "MANVYN <hello@manvyn.com>",
        to: [process.env.ENQUIRY_TO_EMAIL],
        replyTo: email.trim().toLowerCase(),
        subject: `New Project Enquiry — ${name.trim()}`,
        html: `
          <h2>New Project Enquiry</h2>

          <p><strong>Name:</strong> ${name.trim()}</p>
          <p><strong>Email:</strong> ${email.trim()}</p>
          <p><strong>Company:</strong> ${company?.trim() || "Not provided"}</p>
          <p><strong>Project Type:</strong> ${projectType}</p>
          <p><strong>Budget:</strong> ${budget || "Not provided"}</p>
          <p><strong>Timeline:</strong> ${timeline || "Not provided"}</p>

          <h3>Project Description</h3>
          <p>${message.trim()}</p>
        `,
      });
    } catch (emailError) {
      console.error("Enquiry email failed:", emailError);
    }

    res.status(201).json({
      message: "Your enquiry has been submitted successfully.",
    });
  } catch (error) {
    console.error("Create enquiry error:", error);

    res.status(500).json({
      message: "Something went wrong. Please try again.",
    });
  }
};