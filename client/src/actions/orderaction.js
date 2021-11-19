import axios from 'axios'
import { get } from 'mongoose'

export const PlaceOrderAction=(token,subtotal)=>(dispatch , getState )=>{

    const currentUser  = getState().LoginUserReducer.currentUser

    const DemoItem = getState().CartReducer.CartItem

    var CartItem = new Array();

    for(var i=0;i<DemoItem.length ;i++ )
    {
        var item ={
            name : DemoItem[i].name ,
            quantity : DemoItem[i].quantity ,
            price : DemoItem[i].price ,
            _id : DemoItem[i]._id 
        }
CartItem.push(item)
    }




    dispatch({type:'PLACE_ORDER_REQUEST'})

    axios.post('/api/orders/placeorder' , {token , subtotal , currentUser , CartItem } ).then( res=>{
        dispatch({type:'PLACE_ORDER_SUCCESS'})

        console.log(res);

    } ).catch(err=>{
        dispatch({type:'PLACE_ORDER_FAILED'})
    })

}




export const GetOrderByUserIdAction=()=>(dispatch , getState )=>{

    const userid = getState().LoginUserReducer.currentUser._id


    dispatch({type:'GET_ORDERBYID_REQUEST'})

    axios.post('/api/orders/getordersbyuserid' , {userid:userid} ).then( res=>{

        dispatch({type:'GET_ORDERBYID_SUCCESS' , payload:res.data })
        console.log(res.data)

    } ).catch(err=>{
        dispatch({type:'GET_ORDERBYID_FAILED' , payload:err })
        console.log(err)
    })


}



export const GetOrderByOnlyIdAction=(orderid)=>(dispatch , getState )=>{

    


    dispatch({type:'GET_ORDERBYONLYID_REQUEST'})

    axios.post('/api/orders/getordersbyonlyid' , {orderid:orderid} ).then( res=>{

        dispatch({type:'GET_ORDERBY_ONLYID_SUCCESS' , payload:res.data })
        console.log(res.data)

    } ).catch(err=>{
        dispatch({type:'GET_ORDERBY_ONLYID_FAILED' , payload:err })
        console.log(err)
    })


}





export const GetAllOrderAction=(orderid)=>(dispatch , getState )=>{

    


    dispatch({type:'GET_ALLORDER_REQUEST'})

    axios.get('/api/orders/getallorder'  ).then( res=>{

        dispatch({type:'GET_ALL_ORDERSUCCESS' , payload:res.data })
        console.log(res.data)

    } ).catch(err=>{
        dispatch({type:'GET_ALL_ORDER_FAILED' , payload:err })
        console.log(err)
    })


}