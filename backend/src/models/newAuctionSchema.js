const mongoose = require ('mongoose')

const AuctionSchema = new mongoose.Schema({

    object: { type: String, required: true },
    text: { type: String, required: true},
    price: { type: Number, required: true },
    duration: { type: Number, enum: [7,14], required: true },
    endTime: { type: Date, required: true}   
}, { timestamps: true })

module.exports = mongoose.model ('Auction', AuctionSchema)