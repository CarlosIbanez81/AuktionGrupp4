const mongoose = require('mongoose');

const bidSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    price: { type: Number, required: true, min: 1 }, 
    timestamp: { type: Date, default: Date.now } 
});

module.exports = mongoose.model('Bid', bidSchema);