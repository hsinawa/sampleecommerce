export const OrderReducer = ( state={} , action )=>{


    switch(action.type)
    {
        case 'PLACE_ORDER_REQUEST' : return {
            ...state ,
            loading : true 
        }

        case 'PLACE_ORDER_SUCCESS' : return{
            ...state ,
            loading:false  ,
            success : true 
        }

        case 'PLACE_ORDER_FAILED' : return{
            ...state ,
            loading:true  ,
            success : false 
        }

        default : return state
    }



}



export const GetOrderByUserIdReducer = ( state={} , action )=>{


    switch(action.type)
    {
        case 'GET_ORDERBYID_REQUEST' : return {
            ...state ,
            loading : true 
        }

        case 'GET_ORDERBYID_SUCCESS' : return{
            ...state ,
            loading:false  ,
            orders : action.payload 
        }

        case 'GET_ORDERBYID_FAILED' : return{
            ...state ,
            loading:true  ,
            error : true 
        }

        default : return state
    }



}



export const GetOrderByOnlyIdReducer = ( state={} , action )=>{


    switch(action.type)
    {
        case 'GET_ORDERBYONLYID_REQUEST' : return {
            ...state ,
            loading : true 
        }

        case 'GET_ORDERBY_ONLYID_SUCCESS' : return{
            ...state ,
            loading:false  ,
            order: action.payload 
        }

        case 'GET_ORDERBY_ONLYID_FAILED' : return{
            ...state ,
            loading:false  ,
            success : true 
        }

        default : return state
    }



}





export const GetAllOrderReducer = ( state={orders:[]} , action )=>{


    switch(action.type)
    {
        case 'GET_ALLORDER_REQUEST' : return {
            ...state ,
            loading : true 
        }

        case 'GET_ALL_ORDERSUCCESS' : return{
            ...state ,
            loading:false  ,
            order: action.payload 
        }

        case 'GET_ALL_ORDER_FAILED' : return{
            ...state ,
            loading:true  ,
            error : false 
        }

        default : return state
    }



}