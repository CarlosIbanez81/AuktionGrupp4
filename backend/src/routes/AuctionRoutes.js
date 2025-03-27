const express = require("express");
// Importera controller.
const router = express.Router();
const deleteAuction = require('../controllers/malinsAuctionController')

router.post('/', createAuction);
router.get('/', getAuctions);
router.get('/:id', getAuction);
router.delete('/:id', deleteAuction);

module.exports = router;