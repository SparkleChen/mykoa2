const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const uri = 'mongodb://localhost:27017/users';
const db = mongoose.createConnection(uri);
const UserSchema = new Schema({
    name: String,
    email: String,
    age: String
});

module.exports = db.model('User', UserSchema);