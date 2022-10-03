const express = require('express')
const path = require('path')
const app = express()

app.use(express.static('C:/another_pp'))

app.get('/formdata',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','success.html'))
})

app.listen(8000,()=>{
    console.log('listening at port 8000');
})