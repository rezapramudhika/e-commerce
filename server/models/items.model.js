const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name: String,
    price: Number,
    disc: Number,
    stock: Number,
    img: String,
    description: String,
    category: {type: Schema.Types.ObjectId, ref: 'Category'},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

itemSchema.query.search = function(name) {
    return this.find({ name: new RegExp(name, 'i') });
  };

module.exports = mongoose.model('Item', itemSchema);