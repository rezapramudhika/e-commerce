const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema({
    items: [{type: Schema.Types.ObjectId, ref: 'Item'}],
    customer: {type: Schema.Types.ObjectId, ref: 'Customer'},
    status: {type: Boolean, default: false},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Cart', cartSchema);