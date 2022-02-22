const mongoose = require('mongoose')

const LaporanSchema = new mongoose.Schema({
    kehadiran:{
        type: mongoose.Schema.Types.ObjectId,
    },
    room:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'room'
    }
})