const Item = require('../models/items.model');
const Category = require('../models/categories.model');

module.exports = {
    getIndex: (req, res) => {
        Category.find()
            .exec()
            .then((categories) => {
                Item.find()
                    .exec()
                    .then((items) => {
                        if(!req.decoded){
                            res.status(200).json({
                                message: 'Success get all data !',
                                categories,
                                items
                            })
                        }else{
                            res.status(200).json({
                                message: 'Success get all data !',
                                categories,
                                items,
                                name: req.decoded.name,
                                imgUrl: req.decoded.imgUrl,
                                isAdmin: req.decoded.isAdmin
                            })
                        }

                    })
                    .catch(err => {
                        console.log(err);
                        res.status(400).json({
                            message: err.message
                        })
                    })
            })
            .catch(err => {
                console.log(err);
                res.status(400).json({
                    message: err.message
                })
            })
    }
}
