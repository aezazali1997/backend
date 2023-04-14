const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// CREATE - Create a new book
router.post('/', bookController.create);

// READ - Get all books
router.get('/', bookController.getAll);
// READ - Get all books by shopId

// READ - Get a book by ID
router.get('/:id', bookController.getById);

// UPDATE - Update a book by ID
router.put('/:id', bookController.updateById);

// DELETE - Delete a book by ID
router.delete('/:id', bookController.deleteById);

// Get the top rated books

router.post('/top-rated', bookController.getTopRated);

// Get the books which are on sale

router.post('/on-sale', bookController.getBooksOnSale);

// Get Books by Category 

router.get('/by-category/:categoryId', bookController.getBooksByCategory);



module.exports = router;
