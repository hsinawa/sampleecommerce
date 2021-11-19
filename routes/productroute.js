const express = require('express');
const router = express.Router();
const Product = require('../models/product')



router.get('/getallproducts' , (req,res)=>{
    //Displaying everything on homepage

    Product.find( {} , (err , docs)=>{
        if(!err)
        {
            return res.send(docs)
        }
        else
        {
            return res.status(400).json({message:`There's an error ${err} `})
        }
    
    } )

} )


router.post('/getproductbyid' , (req,res)=>{
    Product.find( {_id : req.body.prodid} , (err, docs)=>{
        if(!err)
        {
             res.send(docs[0])
        }
        else
        {
            return res.status(400).json({message:`There's an error ${err} `})
        }

    } )
} )



router.post('/addreview' , async(req,res)=>{
    const {review , productid, nowuser} = req.body

    const product = await Product.findById({_id:productid})

    const reviewmodel ={
        name : nowuser.name ,
        userid : nowuser._id ,
        comment : review.comment
    
    
    }

    product.reviews.push(reviewmodel)

    product.save( err=>{
        if(err)
        {
            return res.status(400).json({message:`Something Went Wrong  `})
        }
        else{
            res.send({message:'Review Submitted Successfully'})
        }
    } )



} );


router.post('/deleteproduct' , (req,res)=>{

    Product.findByIdAndDelete(req.body.productid , (err)=>{

        if(err)
        {
            return res.status(400).json({message:`Something Went Wrong ${err} `})
        }
        else{
            res.send({message:'Deleted Successfully'})
        }

    } )

} );



router.post('/addproduct' ,(req,res)=>{
    const {product} = req.body

    console.log(product)

    const productModel = new Product({
        name : product.name ,
        price : product.price ,
        description : product.description ,
        category : product.category ,
        image :product.image ,
        countInStock:product.countinstock ,


  
    })

    productModel.save(err=>{
        if(err)
        {
            return res.status(400).json({message:`Something Went Wrong ${err} `})
        }
        else{
            res.send({message:'Product Added Successfully'})
        }
    })


} );


router.post('/updateproduct' , (req,res)=>{
    Product.findByIdAndUpdate(req.body.productid , {
        name : req.body.updatedproduct.name ,
        price : req.body.updatedproduct.price ,
        category : req.body.updatedproduct.category ,
        description : req.body.updatedproduct.description ,
        countInStock :req.body.updatedproduct.countinstock ,
        image :req.body.updatedproduct.image
    } ,  (err)=>{
        if(err)
        return res.status(400).json({message:`Something Went Wrong ${err} `})

        else{
            res.send({message:'Product Updated Successfully'})
        }

    } )
} )

module.exports = router