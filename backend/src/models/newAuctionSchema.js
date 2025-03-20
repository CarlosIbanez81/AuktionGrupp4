const mongoose = require ('mongoose')
const useAuctionMiddleware = require('../middlewars/AuctionMiddleware')

const AuctionSchema = new mongoose.Schema({
    user: { type: String, required: true},
    object: { type: String, required: true },
    text: { type: String, required: true},
    price: { type: Number, required: true },
    duration: { type: Number, enum: [7,14], required: true },
    endTime: { type: Date, required: true}   
}, { timestamps: true });

useAuctionMiddleware(AuctionSchema);

module.exports = mongoose.model ('Auction', AuctionSchema)