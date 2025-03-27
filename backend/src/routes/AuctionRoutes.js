const { createAuction } = require('../controllers/auktionController');

const express = require("express");
// Importera controller.
const router = express.Router();


router.post('/', createAuction);
// router.get('/', getAuctions);
// router.get('/:id', getAuction);
// router.delete('/:id', deleteAuction);

console.log(createAuction);

module.exports = router;