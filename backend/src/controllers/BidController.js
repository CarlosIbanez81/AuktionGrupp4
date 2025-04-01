const Bid = require('./models/BidModel'); // Importera modellen för bud
const Auction = require('./models/AuctionModel'); // Importera modellen för auktioner

// Controller för att hämta alla bud för en auktion
const getBids = async (req, res) => {
  try {
    const { auctionId } = req.params; // Hämta auktionens ID från URL

    // Hämta alla bud som är kopplade till auktionen
    const bids = await Bid.find({ auction: auctionId }).populate('user', 'name'); // Här använder vi populate för att hämta användarnamn

    if (!bids || bids.length === 0) {
      return res.status(404).json({ message: 'Inga bud hittades för denna auktion' });
    }

    res.status(200).json({ bids });
  } catch (error) {
    console.error('Error fetching bids:', error.message);
    res.status(500).json({ message: 'Något gick fel', error: error.message });
  }
};


// Controller för att placera ett bud
const placeBid = async (req, res) => {
  try {
    const { id: auctionId } = req.params; // Auktionens ID
    const { userId, price } = req.body;  // Användarens ID och budets pris


    // Kontrollera om budets pris är högre än nuvarande högsta bud
    if (auction.highestBid && price <= auction.highestBid.price) {
      return res.status(400).json({ message: 'Budet måste vara högre än nuvarande högsta bud' });
    }

    // Skapa ett nytt bud om det inte finns
    const newBid = new Bid({
      user: userId,
      price: price,
      timestamp: new Date(),
    });

    // Spara det nya budet
    await newBid.save();

    // Uppdatera auktionen med det nya högsta budet
    auction.highestBid = newBid._id;
    await auction.save();

    res.status(201).json({ message: 'Bud har lagts', bid: newBid });
  } catch (error) {
    console.error('Error placing bid:', error.message);
    res.status(500).json({ message: 'Något gick fel', error: error.message });
  }
};

module.exports = { placeBid, getBids };