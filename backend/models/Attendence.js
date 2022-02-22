const mongoose = requireq('mongoose')

const AttendenceSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'profile'
    },
    attend:{
        type: Boolean,
        default: false
    },
    accAttend:{
        type: Boolean,
        default: false
    },
    dateIn:{
        type: Date,
        default: Date.now
    },
    dateOut: {
        type: Date,
    },
    timeIn:{
        type: Date,
    },
    timeOut:{
        type:Date
    }

})

module.exports = Kehadiran = mongoose.model('kehadiran', AttendenceSchema)