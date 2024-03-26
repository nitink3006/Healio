// Import modules
import express from "express";
import { authenticate } from "./../auth/verifyToken.js";
import { getCheckoutSession } from "../Controllers/bookingController.js";

// Create router instance
const router = express.Router()

// Define route with middleware
router.post('/checkout-session/:doctorId', authenticate, getCheckoutSession);

// Export router
export default router
