import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {AddProductAction } from '../actions/productAction';
import {AddProductReducer} from '../reducers/productReducer'
import './addproduct.css'
import Loading from '../component/loader'
import ErrorPage from '../component/error'
import Message from '../component/message'

const  AddNewProduct = () => {

    const [name , setname ] = useState('');
    const [price , setprice] = useState();
    const [countinstock , setcountinstock ] =  useState()
    const [image , setimage] = useState('');
    const [category , setcategory ]= useState('');
    const [description , setdescription ] = useState('');

    const dispatch = useDispatch()

    const addproductstate = useSelector(state=> state.AddProductReducer )

    const {loading , success,error} = addproductstate

    const addproduct=(e)=>{
        e.preventDefault()
        const product = {
            name : name ,
            price : price ,
            countinstock : countinstock ,
            image : image ,
            category : category ,
            description : description
        }


        dispatch(AddProductAction(product))
    }





    return (
        <div>
           <h3> Add New Product  </h3>

           {success && (<Message message='Product Added Succesfully' />) }
           {loading && ( <Loading/> ) }
           {error && ( <ErrorPage/> ) }

           <form onSubmit={addproduct} >

        <input type="text"  placeholder="enter name" required value={name}  onChange={ (e)=>{ setname(e.target.value) } }  ></input>
        <input type="text"  placeholder="enter price" required value={price}  onChange={ (e)=>{ setprice(e.target.value) } }  ></input>
        <input type="text"  placeholder="enter Stock" required value={countinstock}  onChange={ (e)=>{ setcountinstock(e.target.value) } }  ></input> 
        <input type="text"  placeholder="enter Image URL" required value={image}  onChange={ (e)=>{ setimage(e.target.value) } }  ></input> 
        <input type="text"  placeholder="enter Category" required value={category}  onChange={ (e)=>{ setcategory(e.target.value) } }  ></input> 
        <input type="text"  placeholder="enter description" required value={description}  onChange={ (e)=>{ setdescription(e.target.value) } }  ></input>   
        <br/>
        <button type="submit"  > SUBMIT </button>  
          
           </form>




        </div>
    )
}


export default  AddNewProduct;