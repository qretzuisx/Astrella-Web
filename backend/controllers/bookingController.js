import Booking from "../models/booking.js";
import Gown from "../models/Gown.js";

// API reserving a gown
export const createBooking = async (req, res)=> {
    try {
        const {_id} = req.user;
        const {gown} = req.body;
     
        const gownData = await Gown.findById(gown);
        if(!gownData) {
            return res.json({ success: false, message: "Gown not Found"});
        }

        const isAlreadyReserved = await Booking.findOne({gown, status: {$in: ["reserved", "confirmed"]}});
        if(isAlreadyReserved) {
            return res.json({success: false, message: "Gown is already reserved"});
        }

        const newBooking = await Booking.create({user: _id, gown, owner: gownData.owner, status:"reserved"});
        res.json({ success: true, message: "Gown reserved successfully. You will be notified by owner for pickup", data: newBooking});
    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message});
    }
};

// API to list user bookings
export const getUserBookings = async (req, res)=> {
    try {
        const {_id} = req.user;
        const bookings = await Booking.find({ user: _id}).populate("gown", "name image") .populate("owner", "name email");
        res.json({ success: true, bookings });

    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message});
    }
}

// API to get owner bookings
export const getOwnerBookings = async (req, res)=> {
    try {
        if(req.user.role !== 'owner'){
            return res.json({ success: false, message: "Unauthorized"});
        }


        const {_id} = req.user;
        const booking = await Booking.find({ owner: _id}).populate("user", "name email").populate("gown", "name image");
        res.json({success: true, bookings });
       

    } catch (error) {
         res.json({ succes: false, message: error.message});
    }
}