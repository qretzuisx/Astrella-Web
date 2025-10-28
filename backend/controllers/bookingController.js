import Booking from "../models/booking.js";
import Gown from "../models/Gown.js";


// check if gown is available in given date
export const checkAvailability = async(gown, pickupDate, returnDate)=>{
    const bookings = await Booking.find({
        gown,
        pickupDate: {$lte: returnDate},
        returnDate: {$gte: pickupDate},
    })
    return bookings.length === 0;
}

// API to create bookiing
export const createBooking = async (req, res)=>{
    try {
        const {_id} = req.user;
        const {gown, pickupDate, returnDate} = req.body;

        const isAvailable = await checkAvailability(gown, pickupDate, returnDate)
        if(!isAvailable){
            return res.json({success: false, message: "Gown is not available"})
        }

        const gownData = await Gown.findbyId(gown)

        await Booking.create({gown, owner: gownData, user: _id, pickupDate, returnDate, price})

        res.json({ success: true, message: "Booking Created"})

    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message})
    }
}

// API to list user bookings
export const getUserBooking = async (req, res)=>{
    try {
        const {_id} = req.user;
        const bookings = await Booking.find({ user: _id}).populate("gown").sort({createdAt: -1})
        res.json({ success: true, bookings})

    } catch (error) {
        console.log(error.message);
        res.json({success:false, message: error.message})
    }
}

//API to get owner bookings
export const getOwnerBooking = async (req, res)=>{
    try {
       if(req.user,role !== 'owner'){
        return res.json({success: false, message: "Unauthorized" })
       }
       const bookings = await Booking.find({owner: req.user._id}).populate
       ('gown user').select("-user.password").sort({created: -1 })
       res.json({success: true, bookings})

    } catch (error) {
        console.log(error.message);
        res.json({success:false, message: error.message})
    }
}

//API change booking status
export const changeBookingStatus = async (req, res)=>{
    try {
        const {_id} = req.user;
        const {bookingId, status} = req.body;

        const booking = await Booking.find.findbyId(bookingId)

        if(booking.owner.toString() !== _id.toString()){
            return res.json({success: false, message: "Unathorized"})
        }

        booking.status = status;
        await booking.save()
        res.json({success: true, message: "Status Updated"})

    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message})
        
    }
}