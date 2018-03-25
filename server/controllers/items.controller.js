const Item = require('../models/items.model');
const Category = require('../models/categories.model');

module.exports = {
    create: (req, res) => {
        req.body.img = req.file.cloudStoragePublicUrl;
        Item.create(req.body, (err, data) => {
            if (err) {
                console.log(err);
                return res.status(400).json({
                    message: err.message
                })
            }
            res.status(200).json({
                message: 'New item inserted',
                data
            })
        })
    },
    findAll: (req, res) => {
        Item.find()
            .exec()
            .then((data) => {
                res.status(200).json({
                    message: 'Success get all data !',
                    data
                })
            })
            .catch(err => {
                console.log(err);
                res.status(400).json({
                    message: err.message
                })
            })
    },
    findById: (req, res) => {
        Item.findOne({
            _id: req.params.id
        })
            .exec()
            .then((data) => {
                res.status(200).json({
                    message: 'Success get data !',
                    data
                })
            })
            .catch(err => {
                console.log(err);
                res.status(400).json({
                    message: err.message
                })
            })
    },
    search: (req, res) => {
        Item.find()
            .search(req.params.search)
            .exec()
            .then((data) => {
                res.status(200).json({
                    message: 'Success get all data !',
                    data
                })
            })
            .catch(err => {
                console.log(err);
                res.status(400).json({
                    message: err.message
                })
            })
    },
    update: (req, res) => {
        req.body.updatedAt = Date.now();
        Item.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, data) => {
            if (err) {
                console.log(err);
                return res.status(400).json({
                    message: err.message
                })
            }
            res.status(200).json({
                message: 'Item updated',
                data
            })
        })
    },
    destroy: (req, res) => {
        Item.remove({ _id: req.params.id }, (err, data) => {
            if (err) {
                console.log(err);
                return res.status(400).json({
                    message: err.message
                })
            }
            res.status(200).json({
                message: 'Item deleted',
            })
        })
    }
}
