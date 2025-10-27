import mongoose from "mongoose";
const {ObjectId} = mongoose.Schema.Types

const bookingSchema = new mongoose.Schema({
    gown: {type: ObjectId, ref: "Gown", required: true},
    user: {type: ObjectId, ref: "User", required: true},
    owner: {type: ObjectId, ref: "User", required: true},
    status: {type: String, enum: ["pending", "confirmed", "canceled"], default: "pending"},
    pickupDate: {type: Date, required: true},
    returnDate: {type: Date, required: true},
    price: {type: Number, required: true}
}, {timestamps: true})

const Booking = mongoose.model('Booking', bookingSchema)
export default Booking;