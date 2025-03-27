const Auction = require('../models/newAuctionSchema');
const Bid = require('../models/BidModel');

const deleteAuction = async (req, res) => {
  try {
    const { id } = req.params;
    const { user } = req.body; // Användarnamn skickas i request body

    if (!user) {
      return res.status(400).json({ message: 'Användarnamn krävs för att radera auktionen' });
    }

    const auction = await Auction.findById(id);
    if (!auction) {
      return res.status(404).json({ message: 'Auktionen hittades inte' });
    }

    if (auction.user !== user) {
      return res.status(403).json({ message: 'Du kan bara radera dina egna auktioner' });
    }

    const existingBids = await Bid.findOne({ id });
    if (existingBids) {
      return res.status(400).json({ message: 'Auktionen kan inte raderas eftersom det finns bud' });
    }

    await Auction.findByIdAndDelete(id);
    res.status(200).json({ message: 'Auktionen har raderats' });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { deleteAuction };
