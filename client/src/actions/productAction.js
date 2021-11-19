
import axios from 'axios';
import Message from '../component/message'
 
export  const getallproducts=()=>dispatch=>{

    dispatch({type:'GET_PRODUCT_REQUEST'})

    axios.get('/api/products//getallproducts').then(res=>{
        console.log(res)
       

        dispatch({type:'GET_PRODUCT_SUCCESS' , payload:res.data })

    }).catch(err=>{
        console.log(err)
        dispatch({type:'GET_PRODUCT_FAILED' , payload:err })
    })
}



export  const getallproductsById=(prodid)=>dispatch=>{

    dispatch({type:'GET_PRODUCT_BY_ID_REQUEST'})

    axios.post('/api/products/getproductbyid' , {prodid} ).then(res=>{
        console.log(res)
       

        dispatch({type:'GET_PRODUCT_BY_ID_SUCCESS' , payload:res.data })

    }).catch(err=>{
        console.log(err)
        dispatch({type:'GET_PRODUCT_BY_ID_FAILED' , payload:err })
    })
}

export const FilterProducts=(searchkey,sortkey,category)=>dispatch=>{

    let filterproduct ;

    dispatch({type:'GET_PRODUCT_REQUEST'})

    axios.get( '/api/products/getallproducts' ).then(res=>{
        filterproduct = res.data
        if(searchkey)
        {
            filterproduct = res.data.filter(product=> {
                return product.name.toLowerCase().includes(searchkey)
            } )
        }

        if(sortkey!=='popular')
        {
            if(sortkey=='htl')
            {
                filterproduct = res.data.sort( (a,b)=>{
                    return -a.price + b.price
                } )
            }
            else{
                filterproduct = res.data.sort( (a,b)=>{
                    return a.price - b.price
                } )
            }
        }

        if(category!=='all')
        {
            filterproduct = res.data.filter( product=> {
                return product.category.toLowerCase().includes(category)
            } )
        }

        dispatch({ type:'GET_PRODUCT_SUCCESS' , payload:filterproduct })



    }).catch(
        err=>{
            dispatch({type:'GET_PRODUCT_FAILED' , payload:err })
        }
    )

}



export const AddProductReviewAction=(review , productid )=>(dispatch , getState )=> {

    dispatch({type:'GET_PRODUCT_REVIEW' })

    const nowuser = getState().LoginUserReducer.currentUser

    axios.post('/api/products/addreview' , {review , productid , nowuser}  ).then(res=>{

        console.log(res.data)
        dispatch({type:'GET_PRODUCT_SUCCESS' })

        window.location.reload()



    }).catch(err=>{
        dispatch({type:'GET_PRODUCT_FAILED' })

    })


 
}


export const DeleteProductAction = (productid)=>dispatch=>{

    dispatch({type:'DELETE_PRODUCT_REQUEST' })

    axios.post('/api/products/deleteproduct' , {productid} ).then( res=>{
        dispatch({type:'DELETE_PRODUCT_SUCCESS' , payload : res.data })
       alert('Product Deleted Successfully')
       { true &&  <Message message='Deleted Successfully' />}
        window.location.reload()

    } ).catch(err=>{
        dispatch({type:'DELETE_PRODUCT_FAILED' , payload : err })


    })



}




export const AddProductAction= (product)=> dispatch=>{
    dispatch({type:'ADD_PRODUCT_REQUEST' })

    axios.post('/api/products/addproduct' , {product} ).then(res=>{
        dispatch({type:'ADD_PRODUCT_SUCCESS' })
        // window.location.reload()
        { true &&  <Message message='Added Successfully' />}
       
    }).catch(err=>{
        dispatch({type:'ADD_PRODUCT_FAILED' })
    })

}


export const UpdateProductAction= (productid , updatedproduct )=> dispatch=>{
    dispatch({type:'UPDATE_PRODUCT_REQUEST' })

    axios.post('/api/products/updateproduct' , {productid , updatedproduct } ).then(res=>{
        dispatch({type:'UPDATE_PRODUCT_SUCCESS' })
      window.location.href='/admin/productlist'
       
       
    }).catch(err=>{
        dispatch({type:'UPDATE_PRODUCT_FAILED' })
    })

}