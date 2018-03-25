const express = require('express');
const router = express.Router();
const { create, findAll, findById, update, destroy } = require('../controllers/carts.controller');
const { authLogin } = require('../middlewares/auth');

/* GET users listing. */
router.get('/:id', authLogin, findAll);
router.get('/:id', findById);
router.post('/', authLogin, create);
router.put('/:id', update);
router.delete('/:id', destroy);

module.exports = router;
