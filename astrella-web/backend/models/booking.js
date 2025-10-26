import mongoose from "mongoose";
const {ObjectId} = mongoose.Schema.Types

const bookingSchema = new mongoose.Schema({
    gown: {type: ObjectId, ref: "Gown", required: true},
    user: {type: ObjectId, ref: "User", required: true},
    owner: {type: ObjectId, ref: "User", required: true},
    startDate: {type: Date, required: true},
    endDate: {type: Date, required: true},
    totalPrice: {type: Number, required: true},
    status: {type: String, enum: ["pending", "completed", "confirmed"], default: "pending"}
}, {timestamps: true})

const Booking = mongoose.model('Booking', bookingSchema)

export default Booking