
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
        res.status(201).json(auction);
    } catch (error) {
        res.status(400).json({ error: "något gick fel på skapandet av auktion" });
    }

}

module.exports = { createAuction };
