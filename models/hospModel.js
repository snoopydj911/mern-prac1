const mongoose = require('mongoose')

const hospchema = new mongoose.Schema(
    {
        Id: {
            type : Number,
            required : true
        },
        name : {
            type : String,
            required : true
        },
        age : {
            type : Number,
            required : true
        },
        contact : {
            type : String,
            required : true,
            unique:true
        },
        disease : {
            type : String,
            required : true
        },
    },
    {
        collection : 'hospital'
    }
)
module.exports = mongoose.model('news', hospchema)