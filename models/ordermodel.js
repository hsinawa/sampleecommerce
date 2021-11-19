const mongoose = require('mongoose')

const OrdeSchema = mongoose.Schema({

    userid :{
        type:String ,
        require
    } ,
    name :{
        type:String ,
        require
    }  ,
    email:{
        type:String ,
        require
    } ,
ordereditems : [{ name :{ type:String , require } ,
    quantity : {type:Number , require} ,
    _id : { type:String , require } ,
    price : {type:Number , require}




}] ,
shippingaddress :{
    adddress : {type:String , require} ,
    city : {type:String , require} ,
    postalcode : {type:Number , require}  ,
    country : {type:String , require} 
} ,
orderamount : {type:Number , require}  ,
transactionid: {type:String , require}  ,
isdelivered : {type:Boolean , require}   


} , {timestamps:true } ) 


const OrderModel = mongoose.model('OrderModel' , OrdeSchema )

module.exports = OrderModel