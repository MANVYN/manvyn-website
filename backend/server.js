import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import connectDB from "./config/db.js";
import enquiryRoutes from "./routes/enquiryRoutes.js";
import visitRoutes from "./routes/visitRoutes.js";

dotenv.config();

const app = express();

connectDB();

const allowedOrigins = [process.env.FRONTEND_URL];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  }),
);

app.use(express.json());
app.use(cookieParser());
  
app.use("/api/visits", visitRoutes);
app.use("/api/enquiries", enquiryRoutes);

// app.get("/", (req, res) => {
//   res.json({
//     message: "MANVYN API is running",
//   });
// });

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "MANVYN API is healthy",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
