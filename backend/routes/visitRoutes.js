import express from "express";
import {
  trackVisit,
  ignoreThisDevice,
} from "../controllers/visitController.js";

const router = express.Router();

router.post("/", trackVisit);

router.get("/ignore-this-device", ignoreThisDevice);

export default router;
