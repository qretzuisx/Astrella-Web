import Booking from "../models/booking.js";
import Gown from "../models/Gown.js";

export const checkAvailability = async (gown, pickupDate, returnDate) => {
  // ensure dates are Date objects in query
  const start = new Date(pickupDate);
  const end = new Date(returnDate);
  const bookings = await Booking.find({
    gown,
    pickupDate: { $lte: end },
    returnDate: { $gte: start },
  });
  return bookings.length === 0;
}

// API to create booking
export const createBooking = async (req, res) => {
  try {
    const { _id } = req.user;
    const { gown, pickupDate, returnDate } = req.body;

    // basic validation
    if (!gown || !pickupDate || !returnDate) {
      return res.status(400).json({ success: false, message: "Missing required fields" });
    }

    const isAvailable = await checkAvailability(gown, pickupDate, returnDate);
    if (!isAvailable) {
      return res.json({ success: false, message: "Gown is not available" });
    }

    const gownData = await Gown.findById(gown);
    if (!gownData) {
      return res.status(404).json({ success: false, message: "Gown not found" });
    }

    // compute price from gown data (adjust if you need per-day calculation)
    const price = gownData.price || 0;

    await Booking.create({
      gown,
      owner: gownData.owner,
      user: _id,
      pickupDate: new Date(pickupDate),
      returnDate: new Date(returnDate),
      price,
    });

    res.json({ success: true, message: "Booking Created" });

  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
}

// API to list user bookings
export const getUserBooking = async (req, res) => {
  try {
    const { _id } = req.user;
    const bookings = await Booking.find({ user: _id }).populate("gown").sort({ createdAt: -1 });
    res.json({ success: true, bookings });

  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
}

// API to get owner bookings
export const getOwnerBooking = async (req, res) => {
  try {
    if (req.user.role !== 'owner') {
      return res.json({ success: false, message: "Unauthorized" });
    }

    const bookings = await Booking.find({ owner: req.user._id })
      .populate('gown')
      .populate('user', '-password')
      .sort({ createdAt: -1 });

    res.json({ success: true, bookings });

  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
}

// API change booking status
export const changeBookingStatus = async (req, res) => {
  try {
    const { _id } = req.user;
    const { bookingId, status } = req.body;

    if (!bookingId || !status) {
      return res.status(400).json({ success: false, message: "Missing bookingId or status" });
    }

    const booking = await Booking.findById(bookingId);
    if (!booking) {
      return res.status(404).json({ success: false, message: "Booking not found" });
    }

    if (booking.owner.toString() !== _id.toString()) {
      return res.json({ success: false, message: "Unauthorized" });
    }

    booking.status = status;
    await booking.save();
    res.json({ success: true, message: "Status Updated" });

  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
}
