var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: { type: String, required: true, max: 25 },
    lastName: { type: String, required: true, max: 30 },
    email_costumer: { type: String, required: true, max: 40 },
    messageCostumer: { type: String, required: true, max: 500 },
});

module.exports = mongoose.model('user', UserSchema);