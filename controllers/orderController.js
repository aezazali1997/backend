const Order = require('../models/Order')

module.exports = {

// Create a new order
createOrder: async (req, res) => {
  try {
    const { orderDetails, total, email, number, address } = req.body;
    const order = await Order.create({
      orderDetails,
      total,
      email,
      number,
      address
    });
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
},

// Get all orders
getAllOrders : async (req, res) => {
  try {
    const orders = await Order.findAll();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
},

// Get a specific order by ID
getOrderById : async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findByPk(id);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
},

// Update a specific order by ID
updateOrderById : async (req, res) => {
  try {
    const { id } = req.params;
    const { orderDetails, total, email, number, address } = req.body;
    const order = await Order.findByPk(id);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    await order.update({
      orderDetails,
      total,
      email,
      number,
      address
    });
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
},

// Delete a specific order by ID
deleteOrderById : async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findByPk(id);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    await order.destroy();
    res.status(204).json({ message: 'Order deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
}