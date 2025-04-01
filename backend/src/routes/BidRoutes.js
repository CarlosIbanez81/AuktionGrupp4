
const express = require("express");
const { getBid, updateBid, placeBid } = require("../controllers/BidController");
const router = express.Router();


router.get('/:auctionId/bids', getBids); // Hämta alla bud
router.put('/:id', updateBid);
router.post('/:id/place', placeBid); //placera bud


module.exports = router;
