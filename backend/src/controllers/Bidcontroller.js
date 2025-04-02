const Bid = require('../models/BidModel'); // Importera modellen för bud
const Auction = require('../models/newAuctionSchema'); // Importera modellen för auktioner

// Controller för att hämta alla bud för en auktion
const getBids = async (req, res) => {
  try {
    const { auctionId } = req.params; // Hämta auktionens ID från URL

    // Hämta alla bud som är kopplade till auktionen
    const bids = await Bid.find({ auction: auctionId });

    if (!bids || bids.length === 0) {
      return res.status(404).json({ message: 'Inga bud hittades för denna auktion' });
    }

    res.status(200).json({ bids });
  } catch (error) {
    console.error('Error fetching bids:', error.message);
    res.status(500).json({ message: 'Något gick fel', error: error.message });
  }
};


const placeBid = async (req, res) => {
  try {
    const { auctionId } = req.params;  // Auktionens ID från URL
    const { user, price } = req.body;  // Användarens ID och budets pris från body

    // Hämta auktionen med auctionId
    const auction = await Auction.findById(auctionId);
    if (!auction) {
      return res.status(404).json({ message: 'Auktion hittades inte' });
    }

    // Kontrollera om budet är högre än det nuvarande högsta budet
    if (auction.highestBid && price <= auction.highestBid.price) {
      return res.status(400).json({ message: 'Budet måste vara högre än nuvarande högsta bud' });
    }

    // Skapa ett nytt bud om det inte finns
    const newBid = new Bid({
      user: user || 'Anonym',
      price: price,
      auction: auctionId, // Kopplar budet till auktionen
      timestamp: new Date(),
    });

    // Spara det nya budet
    await newBid.save();

   // Uppdatera auktionen
   auction.bids.push(newBid._id); // Lägg till budet i auktionens lista
   auction.highestBid = newBid._id; // Uppdatera högsta budet
   auction.price = price; // Uppdatera auktionens pris
   await auction.save();

   res.status(201).json({ message: 'Bud har lagts', bid: newBid, auction });
 } catch (error) {
   console.error('Error placing bid:', error.message);
   res.status(500).json({ message: 'Något gick fel', error: error.message });
 }
};

module.exports = { placeBid, getBids };