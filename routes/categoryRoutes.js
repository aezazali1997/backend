const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

// Create a new category
router.post('/', authMiddleware, categoryController.create);

// Retrieve all categories
router.get('/', authMiddleware, categoryController.getAll);

// Retrieve a single category with categoryId
router.get('/:categoryId', authMiddleware, categoryController.getById);

// Update a category with categoryId
router.put('/:categoryId', authMiddleware, categoryController.updateById);

// Delete a category with categoryId
router.delete('/:categoryId', authMiddleware, categoryController.deleteById);

module.exports = router;