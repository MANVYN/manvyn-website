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

    const enquiry = await Enquiry.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      company: company?.trim(),
      projectType,
      budget,
      timeline,
      message: message.trim(),
    });

    res.status(201).json({
      message: "Your enquiry has been submitted successfully.",
      enquiry,
    });
  } catch (error) {
    console.error("Create enquiry error:", error);

    res.status(500).json({
      message: "Something went wrong. Please try again.",
    });
  }
};