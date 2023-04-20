const express = require('express');
const userController = require('../controllers/userController')
const router = express.Router();
router.put('/password', authMiddleware, userController.passwordUpdate);
router.delete('/:id', authMiddleware, userController.delete);
router.get('/:id', authMiddleware, userController.readById);
router.put('/', authMiddleware, userController.update);
router.get('/', authMiddleware, userController.getAll);
module.exports = router