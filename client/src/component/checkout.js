import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import style from './loader.css'
import {useDispatch , useSelector } from 'react-redux'
import {PlaceOrderAction} from '../actions/orderaction'
import {OrderReducer} from '../reducers/orderReducer'
import Loading from '../component/loader'
import ErrorPage from '../component/error'
import Message from '../component/message'

const  CheckOut = ({amount}) => {

    const dispatch = useDispatch()

    const orderstate = useSelector(state=> state.OrderReducer )

    const {loading , success , error } = orderstate

    const tokenhandler=(token)=>{
      // console.log(token)
        dispatch(PlaceOrderAction(token , amount))
    }




    return (
        <div>

<p> Loading = {loading} </p>
            { loading && (<div> <Loading/> </div> )  }

            {success && ( <div> <Message message='Ordere Placed Succesfully' />  </div> ) }

            {error && ( <div> <ErrorPage/>  </div>  ) }


            <StripeCheckout

            amount={amount*100}
            
            token={tokenhandler}

            shippingAddress

            currency='INR'

            stripeKey='pk_test_51JvSXoSER75GHSO4TdEzDdIEKE8HqJUkG7oMQWuACYvLw7SfYIwtUlX5rcpmiJT20eBFfAwkgmd7mBfRR0raVA6L009pIHvmeU'
            
            >


            <button className="btn" > PAYNOW </button>

            </StripeCheckout>
           



        </div>
    )
}


export default  CheckOut;