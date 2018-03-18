const jwt = require('jsonwebtoken');

module.exports = {
    authLogin: (req, res, next) => {
        if (!req.headers.token) {
            next()
        }
        try {
            jwt.verify(req.headers.token, 'secret-ui', function (err, decoded) {
                req.decoded = decoded;
                next()
            })
        } catch (e) {
            console.log(e)
            res.status(500).json({
                err: e
            });
        }
    }
}