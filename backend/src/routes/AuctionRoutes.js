const { createAuction, getAuctions } = require('../controllers/auktionController');
const express = require('express');

const router = express.Router();

const {deleteAuction} = require('../controllers/malinsAuctionController')
const {searchAuctions} = require('../controllers/searchAuctions')



router.post('/', createAuction);
 router.get('/', getAuctions);
// router.get('/:id', getAuction);
router.get('/search', searchAuctions);
router.delete('/:id', deleteAuction);

module.exports = router;