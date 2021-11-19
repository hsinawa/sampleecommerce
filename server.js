const express = require('express')
const bodyparser= require('body-parser')
const app = express()
var productsroute = require('./routes/productroute')
var useroroute = require('./routes/useroute')
var orderroute = require('./routes/orderroute')
app.use(bodyparser.json())
const path=require('path')
let dbconnection = require('./auth')




app.use('/api/products/' , productsroute )

app.use('/api/users/' , useroroute )

app.use('/api/orders/' , orderroute )


if(process.env.NODE_ENV==='production')

{
    app.use('/' , express.static('client/build') )
    app.get('*' , (req,res)=>{
        res.sendFile(path.resolve(__dirname , 'client/build/index.html'))
    } )
}


const port = process.env.PORT ||  8080 ;

var server = app.listen( port , ()=>{
    console.log('Server started of Ecommerce')
} )
