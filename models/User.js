const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true, //공백 없애 줌
        unique: 1
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0
    },
    image: String,
    token: { //토큰: 유효성 관리
        type: String
    },
    tokenExp: { //토큰 유효 기간.
        type: Number
    }

})

const User = mongoose.model('User',userSchema)

module.exports = {User}