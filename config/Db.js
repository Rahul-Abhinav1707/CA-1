const mongoose = require('mongoose')

const connectdb = async () => {
    try{
        await mongoose.connect()

    }

    catch(error){
        console.error(error)
    }
}

model.exports=connectdb 