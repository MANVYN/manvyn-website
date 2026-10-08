import Visit from "../models/Visit.js";

export const trackVisit = async (req, res) => {
  try {
    // Ignore marked internal devices
    if (req.cookies.manvyn_internal === "true") {
      return res.status(200).json({
        success: true,
        tracked: false,
        ignored: true,
      });
    }

    const ip =
      req.headers["x-forwarded-for"]?.split(",")[0]?.trim() ||
      req.socket.remoteAddress;

    const page = req.body.page || "/";

    // Don't count the same IP + page again within 30 minutes
    const thirtyMinutesAgo = new Date(Date.now() - 30 * 60 * 1000);

    const recentVisit = await Visit.findOne({
      ip,
      page,
      visitedAt: { $gte: thirtyMinutesAgo },
    });

    if (recentVisit) {
      return res.status(200).json({
        success: true,
        tracked: false,
      });
    }

    await Visit.create({
      ip,
      page,
      userAgent: req.headers["user-agent"],
      referrer: req.headers["referer"] || null,
    });

    res.status(201).json({
      success: true,
      tracked: true,
    });
  } catch (error) {
    console.error("Visit tracking error:", error);

    res.status(500).json({
      success: false,
    });
  }
};

export const ignoreThisDevice = (req, res) => {
  res.cookie("manvyn_internal", "true", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 365 * 24 * 60 * 60 * 1000,
  });

  res.json({
    success: true,
    message: "This device will not be tracked.",
  });
};
