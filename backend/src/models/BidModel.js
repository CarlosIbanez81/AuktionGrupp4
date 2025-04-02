const mongoose = require('mongoose');

const bidSchema = new mongoose.Schema({
    user: { type: String, required: false },
    auction: { type: mongoose.Schema.Types.ObjectId, ref: 'Auction', required: true }, 
    price: { type: Number, required: true, min: 1 },
    timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Bid', bidSchema);