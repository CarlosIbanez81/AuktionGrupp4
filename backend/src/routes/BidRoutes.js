const express = require("express");
// Importera controller.
const router = express.Router();

router.get('/:id', getBid);
router.post('/:id', createBid);
router.put('/:id', updateBid);

module.exports = router;