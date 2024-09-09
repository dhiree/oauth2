const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    facebookId: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    picture: { type: String, required: true },
});

module.exports = mongoose.model('User', UserSchema);
