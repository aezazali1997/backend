const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

// Create a new category
router.post('/', categoryController.create);

// Retrieve all categories
router.get('/', categoryController.getAll);

// Retrieve a single category with categoryId
router.get('/:categoryId', categoryController.getById);

// Update a category with categoryId
router.put('/:categoryId', categoryController.updateById);

// Delete a category with categoryId
router.delete('/:categoryId', categoryController.deleteById);

module.exports = router;