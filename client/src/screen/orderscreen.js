import React , {useState , useEffect} from 'react';
import { Link } from 'react-router-dom';
import {useDispatch , useSelector } from 'react-redux'
import {GetOrderByUserIdAction} from '../actions/orderaction'
import {GetOrderByUserIdReducer} from '../reducers/orderReducer'
import Loading from '../component/loader'
import ErrorPage from '../component/error'
import FilterComp from '../component/filter'

const  OrderScreen = () => {

    const dispatch = useDispatch()


const orderstate = useSelector(state=>state.GetOrderByUserIdReducer)

const {orders , error , loading } = orderstate



    useEffect( ()=>{

        if(localStorage.getItem('currentUser'))
        {
            dispatch(GetOrderByUserIdAction())
        }
        else{
            window.location.href='/login'
        }



    } ,[dispatch]  )





    return (
        <div>
            <div className="error"  >
                
               <h1 style={{textAlign:'center'}} >My Orders</h1>

               <table    >
                  
                       <tr  > 

                          <th> Order Id </th>
                           <th  > Amount </th>
                           <th> Date </th>

                           <th> Transaction Id  </th>
                           <th> Status </th>
                           
                           
                     </tr>
                      
                    
                          {/* {loading && ( <Loading/> ) }   */}
                           {orders && (
                              orders.map( ord =>{
                                  return <tr onClick={ ()=>{ window.location=`orderinfo/${ord._id}`  } } >

                                     
                                      <td> {ord._id} </td>
                                  <td> {ord.orderamount} </td>
                                  <td> {ord.createdAt.substring(0,10)} </td>
                                  <td> {ord.transactionid} </td>
                                  <td>  {ord.isdelivered ? (<p> Delivered </p> ) : (<p> Order Placed</p> ) } </td>


                                     
                                

                                  </tr>
                              } )
                          )  } 
                          
                              {error && <ErrorPage/> }
                     

                   

               </table>


                
            </div>
        </div>
    )
}


export default  OrderScreen;