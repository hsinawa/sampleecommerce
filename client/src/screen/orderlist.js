import React from 'react'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllOrderAction } from '../actions/orderaction'
import { GetAllOrderReducer } from '../reducers/orderReducer'
import Loading from '../component/loader'
import ErrorPage from '../component/error'
import FilterComp from '../component/filter'
import Message from '../component/message';
import { user, wind } from 'fontawesome';


const OrderList = () => {

    const getorderdetails = useSelector(state => state.GetAllOrderReducer)

    const { loading, error, order } = getorderdetails

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GetAllOrderAction())

    }, [])

    return (
        <div>
            <h3> Order List  </h3>
            {loading && (<Loading />)}
            {error && (<Message message='Something Went Wrong' />)}

            <table>

                <thead>
                    <tr>

                        <th> OrderID </th>
                        <th> Email </th>
                        <th> User ID </th>
                        <th> Date  </th>
                        <th> Transaction ID  </th>
                        <th> Amount </th>


                    </tr>



                </thead>

                <tbody>

                    {order && ( order.map(ord=>{
                        return <tr onClick={ ()=>{ window.location.href=`/orderinfo/${ord._id}` } } >

                            <td> {ord._id} </td>
                            <td> {ord.email} </td>
                            <td> {ord.userid} </td>
                            <td> {ord.createdAt} </td>
                            <td> {ord.transactionid} </td>
                            <td> {ord.orderamount} </td>

                            </tr>
                    }) ) }

                </tbody>

            </table>


        </div>
    )
}


export default OrderList;