const express = require('express')
const app = express()
port = 3000


app.get('/' (req,res) => {
    
    console.log("Greetings")
})

app.listen(port, ()=>{
    console.log(`its running on ${port}`)

})