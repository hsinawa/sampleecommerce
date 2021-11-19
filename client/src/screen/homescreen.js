import React from 'react';
import style from './homescreen.css';
import axios from 'axios';
import {useEffect , useState} from 'react'
import {Link} from 'react-router-dom';
import Rating from 'react-rating'
// import Product from '../../../models/product';
import ProductGrid from '../Header/productgrid';
import {useDispatch ,  useSelector } from 'react-redux';
import {getallproductsreducer} from '../reducers/productReducer'
import {getallproducts } from '../actions/productAction'
import Loading from '../component/loader'
import ErrorPage from '../component/error'
import FilterComp from '../component/filter'

const HomeScreen =()=>{

const getallproductstate = useSelector(state=>state.getallproductsreducer)
const {loading , products , error} = getallproductstate

const dispatch = useDispatch()

useEffect( ()=>{
    // axios.get('/api/products//getallproducts').then(res=>{
    //     console.log(res)
    //     setproducts(res.data)
    // }).catch(err=>{
    //     console.log(err)
    // })

    dispatch(getallproducts())
}  ,[])


    return(
        <div>

<h1>Home Screen</h1>

<FilterComp/>
      
<div className="gridcontain" >






    {loading ? <h1> <Loading/> </h1> :error ? <ErrorPage/> : 
    (
        products.map(prod=>{
            return <div className="container" >
                <ProductGrid prod={prod} />
                </div>
        })
    ) }

 

</div>



    </div>

    );
  
}

export default HomeScreen;