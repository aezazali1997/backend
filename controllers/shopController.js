// Import the necessary dependencies
const express = require('express');
const Shop = require('../models/Shop');

// Create the CRUD operations as functions
module.exports = {
  // CREATE operation
  create: (req, res) => {
    const { name, description, address } = req.body;
    Shop.create({
      name,
      description,
      address
    }).then((shop) => {
      res.status(201).json({ shop });
    }).catch((error) => {
      console.error(error);
      res.status(500).json({ message: 'Failed to create shop' });
    });
  },

  // READ operation
  read: (req, res) => {
    const { id } = req.params;
    Shop.findByPk(id).then((shop) => {
      if (!shop) {
        return res.status(404).json({ message: 'Shop not found' });
      }
      res.status(200).json({ shop });
    }).catch((error) => {
      console.error(error);
      res.status(500).json({ message: 'Failed to fetch shop' });
    });
  },

  // UPDATE operation
  update: (req, res) => {
    const { id } = req.params;
    const { name, description, address } = req.body;
    Shop.update({
      name,
      description,
      address
    }, {
      where: {
        shopId:id
      }
    }).then(([count]) => {
      if (count < 1) {
        return res.status(404).json({ message: 'Shop not found' });
      }
      res.status(200).json({ message: 'Shop updated successfully' });
    }).catch((error) => {
      console.error(error);
      res.status(500).json({ message: 'Failed to update shop' });
    });
  },

  // DELETE operation
  delete: (req, res) => {
    const { id } = req.params;
    Shop.destroy({
      where: {
        shopId:id
      }
    }).then((count) => {
      if (count < 1) {
        return res.status(404).json({ message: 'Shop not found' });
      }
      res.status(200).json({ message: 'Shop deleted successfully' });
    }).catch((error) => {
      console.error(error);
      res.status(500).json({ message: 'Failed to delete shop' });
    });
  },
  getAll: async (req, res) => {
    try {
      const shops = await Shop.findAll();
      res.json(shops);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  },
};