const Auction = require('../models/newAuctionSchema');
const Bid = require('../models/BidModel');

const deleteAuction = async (req, res) => {
  try {
    const { auctionId } = req.params;
    const { username } = req.body; // Användarnamn skickas i request body

    if (!username) {
      return res.status(400).json({ message: 'Användarnamn krävs för att radera auktionen' });
    }

    const auction = await Auction.findById(auctionId);
    if (!auction) {
      return res.status(404).json({ message: 'Auktionen hittades inte' });
    }

    if (auction.user !== username) {
      return res.status(403).json({ message: 'Du kan bara radera dina egna auktioner' });
    }

    const existingBids = await Bid.findOne({ auctionId });
    if (existingBids) {
      return res.status(400).json({ message: 'Auktionen kan inte raderas eftersom det finns bud' });
    }

    await Auction.findByIdAndDelete(auctionId);
    res.status(200).json({ message: 'Auktionen har raderats' });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { deleteAuction };
