const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth');
const bookController = require('../controllers/bookController');

// CREATE - Create a new book
router.post('/', authMiddleware, bookController.create);

// READ - Get all books
router.get('/', authMiddleware, bookController.getAll);
// READ - Get all books by shopId

// READ - Get a book by ID
router.get('/:id', authMiddleware, bookController.getById);

// UPDATE - Update a book by ID
router.put('/:id', authMiddleware, bookController.updateById);

// DELETE - Delete a book by ID
router.delete('/:id', authMiddleware, bookController.deleteById);

// Get the top rated books

router.post('/top-rated', authMiddleware, bookController.getTopRated);

// Get the books which are on sale

router.post('/on-sale', authMiddleware, bookController.getBooksOnSale);

// Get Books by Category 

router.get('/by-category', authMiddleware, bookController.getBooksByCategory);



module.exports = router;
