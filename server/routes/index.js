const express = require('express');
const router = express.Router();
const { getIndex } = require('../controllers/index.controller')
const { authLogin } = require('../middlewares/auth');

/* GET home page. */
router.get('/', authLogin, getIndex);

module.exports = router;
