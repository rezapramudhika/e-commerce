const express = require('express');
const router = express.Router();
const { loginFB, login } = require('../controllers/login.controller');

/* GET users listing. */
router.post('/fb', loginFB);
router.post('/', login)

module.exports = router;
