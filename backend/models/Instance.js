const mongoose = require('mongoose');

const InstanceSchema = new mongoose.Schema({
    master:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'profile'
    },
    name:{
        type: String,
        require: true,
    },
    location:{
        type: String,
        require: true,
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Instance = mongoose.model('instance', InstanceSchema)