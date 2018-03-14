const Category = require('../models/categories.model');

module.exports = {
    create: (req, res) => {
        Category.create(req.body, (err, data) => {
            if (err) {
                console.log(err);
                return res.status(400).json({
                    message: err.message
                })
            }
            res.status(200).json({
                message: 'New category inserted',
                data
            })
        })
    },
    findAll: (req, res) => {
        Category.find()
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
        Category.findOne({
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
    update: (req, res) => {
        req.body.updatedAt = Date.now();
        Category.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, data) => {
            if (err) {
                console.log(err);
                return res.status(400).json({
                    message: err.message
                })
            }
            res.status(200).json({
                message: 'Category updated',
                data
            })
        })
    },
    destroy: (req, res) => {
        Category.remove({ _id: req.params.id }, (err, data) => {
            if (err) {
                console.log(err);
                return res.status(400).json({
                    message: err.message
                })
            }
            res.status(200).json({
                message: 'Category deleted',
            })
        })
    }
}
