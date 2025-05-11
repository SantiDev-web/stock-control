const express = require('express');
const router = express.Router();
const authenticate = require('../middlewares/AuthMiddleware');
const {loginUser} = require('../controllers/UserController');

router.post('/login', loginUser);

module.exports = router;