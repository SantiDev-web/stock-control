const express = require('express')
const router = express.Router();
const {CreatenewItem, getAllItems, getItemByID, updateItem, deleteItem} = require('../controller/stockController')
const validateStock = require('../middleware/validateData')

router.get('/items', getAllItems);
router.get('/item/:id', getItemByID)
router.post('/newitem', validateStock, CreatenewItem);
router.put('/item/:id', validateStock, updateItem);
router.delete('/item/:id', deleteItem);

module.exports = router