import mongoose from "mongoose";
import { Resend } from "resend";

const enquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    company: {
      type: String,
      trim: true,
    },

    projectType: {
      type: String,
      required: true,
      trim: true,
    },

    budget: {
      type: String,
      trim: true,
    },

    timeline: {
      type: String,
      trim: true,
    },

    message: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

const Enquiry =
  mongoose.models.Enquiry ||
  mongoose.model("Enquiry", enquirySchema);

let cachedConnection = null;

const connectDB = async () => {
  if (cachedConnection) {
    return cachedConnection;
  }

  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI is not configured");
  }

  cachedConnection = await mongoose.connect(process.env.MONGO_URI);

  return cachedConnection;
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      message: "Method not allowed.",
    });
  }

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

    // Validation
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

    // Connect to MongoDB
    await connectDB();

    // Save enquiry
    await Enquiry.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      company: company?.trim(),
      projectType,
      budget,
      timeline,
      message: message.trim(),
    });

    // Send notification email
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

    return res.status(201).json({
      message: "Your enquiry has been submitted successfully.",
    });
  } catch (error) {
    console.error("Create enquiry error:", error);

    return res.status(500).json({
      message: "Something went wrong. Please try again.",
    });
  }
}