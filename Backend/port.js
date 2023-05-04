const mongoose= require('mongoose')
const portf = new mongoose.Schema({
    name:String,
    mail:String,
    text:String
})
module.exports= mongoose.model('port',portf)