const express = require('express');
const router = express.Router();
const ShopController = require('../controllers/shopController');

router.post('/', authMiddleware, ShopController.create);
router.get('/:id', authMiddleware, ShopController.read);
router.get('/', authMiddleware, ShopController.getAll);
router.put('/:id', authMiddleware, ShopController.update);
router.delete('/:id', authMiddleware, ShopController.delete);

module.exports = router;