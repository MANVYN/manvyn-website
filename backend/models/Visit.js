import mongoose from "mongoose";

const visitSchema = new mongoose.Schema({
  ip: {
    type: String,
    required: true,
  },

  page: {
    type: String,
    default: "/",
  },

  userAgent: {
    type: String,
  },

  referrer: {
    type: String,
  },

  visitedAt: {
    type: Date,
    default: Date.now,
  },
});

const Visit = mongoose.model("Visit", visitSchema);

export default Visit;
