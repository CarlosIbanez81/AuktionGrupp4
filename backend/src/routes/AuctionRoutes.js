import searchAuctions from "../controllers/AuctionController";

const express = require("express");
const router = express.Router();

router.post('/', createAuction);
router.get('/search', searchAuctions);
router.delete('/:id', deleteAuction);

module.exports = router;