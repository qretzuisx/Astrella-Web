import mongoose from "mongoose";
const {ObjectId} = mongoose.Schema.Types

const bookingSchema = new mongoose.Schema({
    gown: {type: ObjectId, ref: "Gown", required: true},
    user: {type: ObjectId, ref: "User", required: true},
    owner: {type: ObjectId, ref: "User", required: true},
    status: {type: String, enum: ["pending", "picked_up", "confirmed", "rejected"], default: "pending"},
    pickupDate: {type: Date},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date,}
}, {timestamps: true})

const Booking = mongoose.model('Booking', bookingSchema)
export default Booking;