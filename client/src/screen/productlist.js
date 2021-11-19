import React from 'react'
import {getallproducts} from '../actions/productAction';
import {useEffect , useState} from 'react';
import {getallproductsreducer} from '../reducers/productReducer';
import {DeleteProductAction} from '../actions/productAction'
import {useDispatch , useSelector} from 'react-redux';
import Loading from '../component/loader'
import ErrorPage from '../component/error'
import {Link} from 'react-router-dom'


const  ProductList = () => {

    const getallrpoducts = useSelector(state=> state.getallproductsreducer )
    const {products , loading , error} = getallrpoducts

    const dispatch = useDispatch()

    useEffect( ()=>{
        dispatch(getallproducts())
    } , [] )



    return (
        <div>
           <h3> Product List  </h3>

           <table>
               <thead>
                   <tr>
                       <th>Name</th>
                       <th>Price</th>
                       <th>Stock</th>
                       <th>ID</th>
                       <th>Delete</th>
                       <th> Edit </th>
                   </tr>
               </thead>
               { loading && <Loading/> }
          

           {products &&  products.map(prod=>{
               return <tr>
                   <td> {prod.name} </td>
                   <td> {prod.price} </td>
                   <td> {prod.countInStock} </td>
                   <td> {prod._id} </td>
                   <td>   <td> <i className="far fa-trash-alt" onClick={ ()=>{ dispatch(DeleteProductAction(prod._id)) } }  ></i> 
                   
                  
                   
                   </td>
                    </td>
                    <td>
                        <Link to={`/admin/editproduct/${prod._id}`} ><i class="fas fa-edit"></i></Link>
                        
                        </td>

                   </tr>
           }) }

               <tbody>

               </tbody>



               </table>





       
        </div>
    )
}


export default  ProductList;