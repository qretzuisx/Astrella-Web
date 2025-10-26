import mongoose from "mongoose";
const {ObjectId} = mongoose.Schema.Types

const gownSchema = new mongoose.Schema({
    owner: {type: ObjectId, ref: 'User'},
    name: {type: String, required: true},
    description: {type: String, required: true},
    category: {type: String, enum: ["bridal", "traditional", "prom", "others"], default: "others"},
    price: {type: Number, required: true},
    size: {type: [String], default: ["Free Size"]},
    color: {type: String, required: true},
    images: {type: [String], required: true},
    available: {type: Boolean, default: true},
    verified: {type: Boolean, default: false},
}, {timestamps: true})

const Gown = mongoose.model('Gown', gownSchema)

export default Gown