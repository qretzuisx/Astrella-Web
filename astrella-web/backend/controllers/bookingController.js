import Booking from "../models/booking.js"


// to check availability of gown for given date
const checkAvailability = async (gown, startDate, endDate)=>{
    const bookings = await Booking.find({
        gown,
        startDate: {$lte: endDate},
        endDate: {$lte: startDate},
    })
    return bookings.length === 0;
}

// API to recommend best styles 
