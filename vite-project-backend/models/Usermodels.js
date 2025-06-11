const mongoose = require('mongoose');

const userschema = new mongoose.Schema({
   name:String,
    email: String,
    });
models.exports = mongoose.model('User', userschema);