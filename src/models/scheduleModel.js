const mongoose = require('mongoose');

const schedulerSchema = new mongoose.Schema({ 
    text: { 
        type: String,
        required: true, 
        trim: true 
    }, 
    dateTime: {
        type: Date,
        required: true,
    },
    reverse: {
        type: String,
        required: true, 
        trim: true
    }
})

module.exports = mongoose.model('scheduler', schedulerSchema)