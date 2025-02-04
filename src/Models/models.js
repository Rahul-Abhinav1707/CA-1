const mongoose = require('mongoose')

const itemSchema= mongoose.Schema({
    Name: {
        type:string,
        required:true

    },

    Price: {
        type:number,
        required:true

    }
})


model.exports= mongoose.model('items', itemSchema)