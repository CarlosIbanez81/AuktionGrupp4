
const express = require("express");
const { getBids, updateBid, placeBid } = require("../controllers/BidController");
const router = express.Router();

// Hämta alla bud för en auktion
router.get('/:auctionId/bids', getBids);

// Uppdatera bud (om du behöver det)
//router.put('/:id', updateBid);

// Placera ett bud på en auktion
router.post('/:auctionId/bids', placeBid); //rutt för att placera ett bud

module.exports = router;