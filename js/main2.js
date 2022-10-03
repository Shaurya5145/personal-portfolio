const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 8000;

app.use(express.static('C:/another_pp'))

app.get('/formdata',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','success.html'))
})

app.listen(port,()=>{
    console.log('listening at port 8000');
})