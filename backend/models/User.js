const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    nama:{
        type: String,
        require: true,
    },
    avatar:{
        type: String
    },
    date:{
        type: Date,
        default: Date.now
    }
})

module.exports = User = mongoose.model('user', UserSchema)