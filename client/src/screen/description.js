import React, { useState, useEffect } from 'react';

import Rating from 'react-rating';
import style from 'fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { GetProductByIdReducer } from '../reducers/productReducer';
import { getallproductsById } from '../actions/productAction'

import {AddToCart} from '../actions/cartaction'
import Loading from '../component/loader'
import ErrorPage from '../component/error'
import ReviewComponent from '../component/review'

const ProductScreenDescription = ({ match }) => {

    const prodid = match.params.id
    const dispatch = useDispatch()

    const [quantity , setquantity] = useState(1)

    const productbyidstate = useSelector(state => state.GetProductByIdReducer)

    const { products, loading, error } = productbyidstate



    const cartreducer = useSelector(state => state.CartReducer)


    const { CartItem } = cartreducer


    

    const currentuser = JSON.parse(localStorage.getItem('currentUser'))





    const addtocart=()=>{
        dispatch(AddToCart(products,quantity))

    }




    useEffect(() => {
        dispatch(getallproductsById(prodid))

    }, [])


    return (
        <div>






{
    currentuser ? ( <div> 


{

loading ? (<Loading/>) : error ? (<ErrorPage/>) : (


    <div>
        <h1>This is product description</h1>
        <h3> Product id = {prodid} </h3>
        <p>Name is = {products.name} </p>
        <img src={products.image} ></img>
        <h4> Description is = {products.description} </h4>
        <Rating

            initialRating={products.rating}
            emptySymbol="fa fa-star-o fa-1x"
            fullSymbol="fa fa-star fa-1x"


        />



        <br></br>

        <h2>Buy</h2>
        <h3>price = {products.price} </h3>

        <hr></hr>


        <h2>Select Quantity</h2>


        <select value={quantity} onChange={ (e)=>setquantity(e.target.value) } >

            {[...Array(products.countInStock).keys()].map((x, i) => {

                return <option value={i + 1}  >{i + 1}</option>

            })}

        </select  >

        <button onClick={addtocart} >Add to cart</button>

<hr/>

        <ReviewComponent products={products} />


    </div>


)



}










        
    </div> ) : (<p> PLease Login  </p> )
}





        



        </div>
    )
}

export default ProductScreenDescription;