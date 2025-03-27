import searchAuctions from "../controllers/AuctionController";

const express = require("express");
const router = express.Router();
const deleteAuction = require('../controllers/malinsAuctionController')

router.post('/', createAuction);
router.get('/search', searchAuctions);
router.delete('/:id', deleteAuction);

module.exports = router;