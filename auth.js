const mongoose = require('mongoose')

let mongourl = 'mongodb+srv://admin:awanishmishra3@cluster0.3vdzz.mongodb.net/Ecommercetest'

mongoose.connect(mongourl , { useUnifiedTopology:true , useNewUrlParser:true })

var dbconnect = mongoose.connection

dbconnect.on( 'error' ,()=>{
    console.log('Mogo DB connection failed')
} )

dbconnect.on('connected' , ()=>{
    console.log('connection passed')
} )

mongoose.exports = mongoose