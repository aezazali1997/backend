const Category = require('../models/Category');

module.exports = {
    // Create a new category
    create: (req, res) => {
      Category.create({
        name: req.body.name,
        description: req.body.description,
      }).then((category) => {
        res.status(201).json(category);
      }).catch((err) => {
        console.error(err);
        res.status(500).json({ message: 'Error creating category' });
      });
    },
  
    // Get all categories
    getAll: (req, res) => {
      Category.findAll().then((categories) => {
        res.status(200).json(categories);
      }).catch((err) => {
        console.error(err);
        res.status(500).json({ message: 'Error getting categories' });
      });
    },
  
    // Get a single category by ID
    getById: (req, res) => {
      Category.findByPk(req.params.categoryId).then((category) => {
        if (category) {
          res.status(200).json(category);
        } else {
          res.status(404).json({ message: 'Category not found' });
        }
      }).catch((err) => {
        console.error(err);
        res.status(500).json({ message: 'Error getting category' });
      });
    },
  
    // Update a category by ID
    updateById: (req, res) => {
      Category.findByPk(req.params.categoryId).then((category) => {
        if (category) {
          category.update({
            name: req.body.name,
            description: req.body.description,
          }).then(() => {
            res.status(200).json({ message: 'Category updated successfully' });
          }).catch((err) => {
            console.error(err);
            res.status(500).json({ message: 'Error updating category' });
          });
        } else {
          res.status(404).json({ message: 'Category not found' });
        }
      }).catch((err) => {
        console.error(err);
        res.status(500).json({ message: 'Error updating category' });
      });
    },
  
    // Delete a category by ID
    deleteById: (req, res) => {
      Category.findByPk(req.params.categoryId).then((category) => {
        if (category) {
          category.destroy().then(() => {
            res.status(200).json({ message: 'Category deleted successfully' });
          }).catch((err) => {
            console.error(err);
            res.status(500).json({ message: 'Error deleting category' });
          });
        } else {
          res.status(404).json({ message: 'Category not found' });
        }
      }).catch((err) => {
        console.error(err);
        res.status(500).json({ message: 'Error deleting category' });
      });
    },
  };