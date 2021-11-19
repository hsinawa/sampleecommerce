export const RegisterUserReducer = (state = {}, action) => {
    switch (action.type) {
        case 'User_Register_Request': return {
            ...state,
            loading: true
        }

        case 'User_Register_Success': return {
            ...state,
            loading: false,
            success: true
        }

        case 'User_Register_Failed': return {
            ...state,
            loading: true,
            error: true
        }


        default: return state



    }
}


export const LoginUserReducer = (state = {}, action) => {
    switch (action.type) {
        case 'User_Login_Request': return {
            ...state,
            loading: true
        }

        case 'User_Login_Success': return {
            ...state,
            loading: false,
            success: true
        }

        case 'User_Login_Failed': return {
            ...state,
            loading: false,
            error: 'Invalid Credentials'
        }

        case 'User_LogOut': return {
            ...state
        }


        default: return state



    }
}




export const UpdateUserReducer = (state = {  }, action) => {

    switch (action.type) {
        case 'User_update_Request': return {
            ...state,
            loading: true
        }

        case 'User_Update_Success': return {
            ...state,
            loading: false,
            success: true
        }

        case 'User_Update_Failed': return {
            ...state,
            loading: true,
            error: true
        }


        default: return state



    }



}



export const GetAllUserReducer = (state = {users: []}, action) => {





    switch (action.type) {
        case 'GET_ALL_REQUEST': return {
            ...state,
            loading: true
        }

        case 'GET_ALL_SUCCESS': return {
            ...state,
            loading: false,
            users: action.payload
        }

        case 'GET_ALL_FAILED': return {
            ...state,
            loading: true,
            error: action.payload
        }


        default: return state



    }


}




export const DeleteUserReducer = ( state={} , action )=>{
  




    switch(action.type)
    {
        case 'DELETE_USER_REQUEST': return{
            ...state ,
            loading : true 
        }

        case 'DELETE_USER_SUCCESS': return{
            ...state ,
            loading : false ,
            success:true
        }

        case 'DELETE_USER_FAILED': return{
            ...state ,
            loading : true  ,
            error :  action.payload  
        }


        default : return state



    }


}