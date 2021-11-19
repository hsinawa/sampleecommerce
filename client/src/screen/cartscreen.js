import React from 'react'
import {useDispatch , useSelector , useState } from 'react-redux'
import style from './cart.css'
import {AddToCart , DeleteFromCart} from '../actions/cartaction';
import CheckOut from '../component/checkout'

const CartScreen=()=>{

const cartselectorstate = useSelector(state=>state.CartReducer)
const dispatch = useDispatch()
const {CartItem} = cartselectorstate

let countotal = CartItem.reduce( (acc,item)=> acc+ (item.price*item.quantity) , 0 )

    return(
        <div>
            <h1> This is Cart Screen</h1>
            <p> Length = {CartItem.length} </p>

            <table style={{width:'100%'}}>
                <thead>
                <tr>
    <th>Name</th>
    <th>Price</th>
    <th>Quantity</th>
    <th> Final Quantity</th>
    <th>Total Price</th>
    <th>Delete</th>
  </tr>
                </thead>

                <tbody>
   
            {CartItem.map(item=> {
                return <tr>
                    <td> {item.name} </td>
                    <td> {item.price} </td>
                  

                    <td>   
                        
                         
                          <select value={item.quantity} onChange={ (e)=>{ dispatch(AddToCart(item , e.target.value)) } } >

{[...Array(item.countInStock).keys()].map((x, ii) => {

    return <option value={ii + 1}  >{item.quantity}</option>

})}

</select  > 




</td>


<td> {item.quantity} </td>

                    <td> {item.quantity * item.price} </td>
                    <td>  <i class="fas fa-trash"  onClick={ ()=> { dispatch(DeleteFromCart(item)) } } 
                    >Deletee</i> </td>
                </tr>
            } )}

                </tbody>
 
 
</table>

<hr>
</hr>

<h3> Subtotal = {countotal} </h3>

<CheckOut amount={countotal} />


        </div>

    )
}

export default CartScreen;