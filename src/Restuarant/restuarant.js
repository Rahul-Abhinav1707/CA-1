const mongoose = require('mongoose')

const Rschema = new mongoose.Schema({
    Name: {
        type:String,
        required:true
    },
    City: {
        type:string,
        required:true 
    },
    Items: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:'items'
    }]
})

model.exports=mongoose.restuarant('restuarant', Rschema) 