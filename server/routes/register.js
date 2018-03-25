const express = require('express');
const router = express.Router();
const { register } = require('../controllers/register.controller');

/* GET users listing. */
router.post('/', register);


module.exports = router;
