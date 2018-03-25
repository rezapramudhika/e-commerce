const User = require('../models/users.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {
    register: (req, res) => {
        let salt = bcrypt.genSaltSync(saltRounds);
        let hash = bcrypt.hashSync(req.body.password, salt);
        User.create({
            name: req.body.name,
            email: req.body.email,
            password: hash
        }, (err, user) => {
            if (err) {
                return res.status(400).json({
                    message: err
                })
            }
            res.status(200).json({
                message: 'User registered',
                data: user
            })
        })
    }
}