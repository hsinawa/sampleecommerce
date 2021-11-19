const express = require('express');
const router = express.Router();
const stripe = require('stripe')('sk_test_51JvSXoSER75GHSO4XINegJDyRzo5bhWxxPP4xji6BKHcb9Rt4MQhNcam5NzPFJYBEDbtndauSQEbECPQHce2r44a00wxpxrXZG')
const { v4: uuidv4 } = require('uuid')

const Order = require('../models/ordermodel')

router.post('/placeorder', async (req, res) => {


    const { token, subtotal, currentUser, CartItem } = req.body

    const customer = await stripe.customers.create({
        email: token.email,
        source: token.id
    })

    const payment = await stripe.charges.create({

        amount: subtotal * 100,
        currency: 'inr',
        customer: customer.id,
        receipt_email: token.email




    }, {
        idempotencyKey: uuidv4()
    })



    if (payment) {
        const order = new Order({
            userid: currentUser._id,
            name: currentUser.name,
            email: currentUser.email,
            ordereditems: CartItem,
            shippingaddress: {
                adddress: token.card.address_line1,
                city: token.card.address_city,
                postalcode: token.card.address_zip,

            },
            orderamount: subtotal,
            transactionid: payment.source.id, //getting id from backend 
            isdelivered: false
        })

        order.save(err => {
            if (err) {
                return res.status(400).json({ message: 'Something Went Wrong' })
            }
            else {
                res.send({ message: 'Order Placed Successfully Successful' })
            }
        })


        res.send({ message: 'Payment Successful' })
    }
    else {
        return res.status(400).json({ message: 'Payment Failed' })
    }



})


router.post('/getordersbyuserid', (req, res) => {

    const userid = req.body.userid

    Order.find({ userid: userid }, (err, docs) => {
        if (err) {
            return res.status(400).json({ message: 'Something Went Wrong' })
        }
        else {
            res.send(docs)
        }
    })

})




router.post('/getordersbyonlyid', (req, res) => {

    const orderid = req.body.orderid

    Order.find({ _id: orderid }, (err, docs) => {
        if (err) {
            return res.status(400).json({ message: 'Something Went Wrong' })
        }
        else {
            res.send(docs[0])
        }
    })

})



router.get('/getallorder' , (req,res)=>{
    Order.find( {} , (err,docs)=>{
        if(err)
        {
            return res.status(400).json({ message: 'Something Went Wrong' })
        }
        else{
            res.send(docs)
        }
    } )
} )


module.exports = router