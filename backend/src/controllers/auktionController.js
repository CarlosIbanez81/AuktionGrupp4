
const Auction = require ('../models/newAuctionSchema')

const createAuction = async (req, res) => {
    try {

        const {user, object, text, price, duration} = req.body

        if (!user || !object || !text || !price || ![7,14].includes(duration)) {
            return res.status(400).json({ error: 'Alla fält måste fyllas i' });
        }


        const now = new Date()
        const endTime = new Date(now.getTime() + duration * 24 * 60 * 60 * 1000)

        const auction = new Auction({ user, object, text, price, duration, endTime });

        await auction.save();

        // Respond with success
    res.status(201).json({ message: 'Auktion skapades framgångsrikt', auction });
    } catch (error) {
        console.error('Error creating auction:', error);
        res.status(500).json({ error: 'Något gick fel vid skapandet av auktionen' });
    }
}
   // Get all auctions
const getAuctions = async (req, res) => {
  try {
    const auctions = await Auction.find(); // Fetch all auctions from the database
    res.status(200).json(auctions); // Respond with the auction data
  } catch (error) {
    console.error('Error fetching auctions:', error);
    res.status(500).json({ error: 'Failed to fetch auctions' });
  }
}; 


module.exports = { getAuctions, createAuction };
