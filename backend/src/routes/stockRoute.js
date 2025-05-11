const express = require('express')
const router = express.Router();
const {CreatenewItem, getAllItems, getItemByID, updateItem, deleteItem} = require('../controller/stockController')
const validateStock = require('../middleware/validateData')
const authenticate = require('../auth/middlewares/AuthMiddleware')

router.get('/items', authenticate, getAllItems);
router.get('/item/:id', authenticate, getItemByID)
router.post('/newitem', authenticate, validateStock, CreatenewItem);
router.put('/item/:id', authenticate, validateStock, updateItem);
router.delete('/item/:id', authenticate, deleteItem);

module.exports = router