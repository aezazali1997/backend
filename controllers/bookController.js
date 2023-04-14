const Book = require('../models/Book');
const Shop = require('../models/Shop');
const {Op}  = require('sequelize');

module.exports = {
  // CREATE - Create a new book
  create: async (req, res) => {
    try {
      const { name, isbn, publisher, publicationDate, price, genre, description, coverImage, availability, rating, user_rating_count, shopId } = req.body;
      const book = await Book.create({ name, isbn, publisher, publicationDate, price, genre, description, coverImage, availability, rating, user_rating_count, shopId });
      res.status(201).json({ success: true, book });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },

  // READ - Get all books
  getAll: async (req, res) => {
    try {
      const { shopId} = req.query;
      let books
      if(shopId){

         books = await Book.findAll({where:{shopId}});
         console.log('books found',books)
      }
      else{
        books = await Book.findAll();
      }
      res.send( books );
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },
 

  // READ - Get a book by ID
  getById: async (req, res) => {
    try {
      const { id } = req.params;
      console.log(id)
      const book = await Book.findByPk(id,{include:[Shop]});
      if (!book) {
        return res.status(404).json({ success: false, message: 'Book not found' });
      }
      res.json({ success: true, book });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },

  // UPDATE - Update a book by ID
  updateById: async (req, res) => {
    try {
      const { id } = req.params;
      const { name, isbn, publisher, publicationDate, price, genre, description, coverImage, availability, rating, user_rating_count, shopId } = req.body;
      const book = await Book.findByPk(id);
      if (!book) {
        return res.status(404).json({ success: false, message: 'Book not found' });
      }
      await book.update({ name, isbn, publisher, publicationDate, price, genre, description, coverImage, availability, rating, user_rating_count, shopId });
      res.json({ success: true, book });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },

  // DELETE - Delete a book by ID
  deleteById: async (req, res) => {
    try {
      const { id } = req.params;
      const book = await Book.findByPk(id);
      if (!book) {
        return res.status(404).json({ success: false, message: 'Book not found' });
      }
      await book.destroy();
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },
  getTopRated:async (req, res, next) => {
    try {
      const {shopId} = req.body;
      const topRatedBooks = await Book.findAll({
        order: [['rating', 'DESC']],
        limit: 5,
        where: {
          rating: {
            [Op.not]: null, // Only return books with non-null rating
          },
          shopId:shopId
        },
      });
      res.json(topRatedBooks);
    } catch (err) {
      next(err);
    }
  },
  getBooksOnSale: async (req, res, next) => {
    try {
      const {shopId} = req.body;
      const booksOnSale = await Book.findAll({
        where: {
          sale: true,
          shopId:shopId
        },
      });
      res.json(booksOnSale);
    } catch (err) {
      next(err);
    }
  },
  getBooksByCategory:async (req, res, next) => {
    try {
      const categoryId = req.params.categoryId;
      const category = await Category.findByPk(categoryId);
      if (!category) {
        return res.status(404).json({ message: 'Category not found' });
      }
      const booksByCategory = await Book.findAll({
        where: {
          categoryId,
        },
      });
      res.json(booksByCategory);
    } catch (err) {
      next(err);
    }
  }
};
