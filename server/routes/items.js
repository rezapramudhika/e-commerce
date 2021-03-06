const express = require('express');
const router = express.Router();
const { create, findAll, findById, update, destroy, search } = require('../controllers/items.controller');
const {sendUploadToGCS} = require('../middlewares/uploadGCS')
const memUpload = require('../middlewares/multer')

/* GET users listing. */
router.get('/', findAll);
router.get('/:id', findById);
router.post('/', memUpload.single('image'), sendUploadToGCS, create);
router.put('/:id', update);
router.delete('/:id', destroy);
router.get('/search/:search', search);

module.exports = router;
