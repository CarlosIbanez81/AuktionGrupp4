
const express = require("express");
const { getBids, updateBid, placeBid } = require("../controllers/BidController");
const router = express.Router();


router.get('/:auctionId/bids', getBids);

router.post('/:auctionId/bids', placeBid);

module.exports = router;
