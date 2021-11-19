import React , {useState , useEffect} from 'react'
import {useDispatch , useSelector } from 'react-redux'
import {GetOrderByOnlyIdAction} from '../actions/orderaction'
import {GetOrderByOnlyIdReducer} from '../actions/orderaction'
import Loading from '../component/loader'
import ErrorPage from '../component/error'
import FilterComp from '../component/filter'


const  OrderInfo = ({match}) => {

    

    const dispatch=useDispatch()

    const orderstate = useSelector(state=>state.GetOrderByOnlyIdReducer)

    const { order , loading  , error } = orderstate


    useEffect( ()=>{
        dispatch(GetOrderByOnlyIdAction(match.params.orderid))
    } )

    return (
        <div>
            <div className="error"  >
                
               {error && <ErrorPage/>  }
               {loading && (<Loading/> )}

               {order && ( <div>
                   
                   <div>
<h1>Order Items</h1>

{order.ordereditems.map( item=>{
    return <div>

        <h3> Name = {item.name} </h3>
        <h3> Quantity = {item.quantity} </h3>
        <h3>  {item.quantity} * {item.price} = {item.price * item.quantity} </h3>

<hr/>
<div>
<h1>Order Details</h1>
<h3> Order id = {order._id} </h3>
<h3> Total Amount = {order.orderamount} </h3>
<h3> Date of Order = {order.createdAt.substring(0,10)} </h3>
<h3> Transaction Id  = {order.transactionid} </h3>
<h3> {order.isdelivered ? (<h1> Delievered </h1> ) : (<h1> Placed </h1> ) } </h3>



<hr/>

<h1> Shipping Details </h1>
<h3> Address = {order.shippingaddress.city} </h3>


   </div> 



        </div>
} )}
                       </div>

                      
                   
                   
                   
                    </div> ) }
                
            </div>
        </div>
    )
}


export default  OrderInfo;