const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// CREATE - Create a new book
router.post('/', bookController.create);

// READ - Get all books
router.get('/', bookController.getAll);

// READ - Get a book by ID
router.get('/:id', bookController.getById);

// UPDATE - Update a book by ID
router.put('/:id', bookController.updateById);

// DELETE - Delete a book by ID
router.delete('/:id', bookController.deleteById);

module.exports = router;
