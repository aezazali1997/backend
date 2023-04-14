const express = require('express');
const router = express.Router();
const ShopController = require('../controllers/shopController');

router.post('/', ShopController.create);
router.get('/:id', ShopController.read);
router.get('/', ShopController.getAll);
router.put('/:id', ShopController.update);
router.delete('/:id', ShopController.delete);

module.exports = router;