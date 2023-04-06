const express= require('express');
const userController = require('../controllers/userController')
const router = express.Router();
router.put('/password',userController.passwordUpdate)
router.delete('/:id',userController.delete)
router.put('/:id',userController.update)
module.exports = router