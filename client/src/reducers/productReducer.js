

export const getallproductsreducer = ( state ={products:[]} , action )=>{

   
    switch(action.type)
    {
        case 'GET_PRODUCT_REQUEST' : return {
            loading : true 
        }

        case 'GET_PRODUCT_SUCCESS' : return {
            products : action.payload ,
            loading : false 

        }

        case 'GET_PRODUCT_FAILED' : return {
            products : action.payload ,
            loading : false 
        }

        default : return  state
    }

}


export  const GetProductByIdReducer = ( state ={products:[]} , action )=>{

   
    switch(action.type)
    {
        case 'GET_PRODUCT_BY_ID_REQUEST' : return {
            loading : true 
        }

        case 'GET_PRODUCT_BY_ID_SUCCESS' : return {
            products : action.payload ,
            loading : false 

        }

        case 'GET_PRODUCT_BY_ID_FAILED' : return {
            products : action.payload ,
            loading : false 
        }

        default : return  state
    }

}


export const ReviewReducer=( state={} ,  action)=>{
    switch(action.type)
    {
        case 'GET_PRODUCT_REVIEW' : return {
            loading : true 
        }

        case 'GET_PRODUCT_SUCCESS' : return {
            loading : true  , 
            success : true 
        }

        case 'GET_PRODUCT_FAILED' : return {
            loading : false ,
            error : true  
        }

        default : return  state



    }
}


export const ProductDeleteReducer=( state={} , action )=>{
    switch(action.type)
    {
        case 'DELETE_PRODUCT_REQUEST' : return {
            ...state ,
            loading : true 
        }

        case 'DELETE_PRODUCT_SUCCESS' : return {
            ...state ,
            loading : false ,
            success : true 
        }

        case 'DELETE_PRODUCT_FAILED' : return {
            ...state ,
            loading : false ,
            error : action.payload
        }

        default : return  state
    }
}





export const AddProductReducer=( state={} , action )=>{
    switch(action.type)
    {
        case 'ADD_PRODUCT_REQUEST' : return {
            ...state ,
            loading : true 
        }

        case 'ADD_PRODUCT_SUCCESS' : return {
            ...state ,
            loading : false ,
            success : true 
        }

        case 'ADD_PRODUCT_FAILED' : return {
            ...state ,
            loading : false ,
            error : action.payload
        }

        default : return  state
    }
}




export const UpdateProductReducer=( state={} , action )=>{
    switch(action.type)
    {
        case 'UPDATE_PRODUCT_REQUEST' : return {
            ...state ,
            uploading : true 
        }

        case 'UPDATE_PRODUCT_SUCCESS' : return {
            ...state ,
            uploading : false ,
            success : true 
        }

        case 'UPDATE_PRODUCT_FAILED' : return {
            ...state ,
            uploading : false ,
            update_error : action.payload
        }

        default : return  state
    }
}