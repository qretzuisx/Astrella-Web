import express from "express";
import { changeBookingStatus, checkAvailability, createBooking, getOwnerBooking, getUserBooking } from "../controllers/bookingController.js";
import { protect } from "../middleware/auth.js";


const bookingRouter = express.Router();

bookingRouter.post('/check-availability', checkAvailability)
bookingRouter.post('/create', protect, createBooking)
bookingRouter.post('/user', protect, getUserBooking)
bookingRouter.post('/owner', protect, getOwnerBooking)
bookingRouter.get('/change-status', protect, changeBookingStatus)

export default bookingRouter;
