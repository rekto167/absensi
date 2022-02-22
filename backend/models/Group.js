const mongoose = require('mongoose')

const GroupSchema = new mongoose.Schema({
    instance:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'instance'
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'profile'
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Group = mongoose.model('group', GroupSchema)