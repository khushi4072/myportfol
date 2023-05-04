const express = require('express')
 const s= require('./port')
 const cors=require('cors');
const port = require('./port');

const app = express();
require('./config')
app.use(express.json())
app.use(cors())

app.post('/touch',async(req,resp)=>{

    let ready = new s({
        name: req.body.name,
        mail: req.body.mail,
        text: req.body.text

    })
     ready= await ready.save()
    console.log(ready)
    resp.send('lets go')


})
app.use(express.static("port1/build"))
app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'port1','build','index.html'))

})
const Port = process.env.Port||5000

app.listen(Port);
