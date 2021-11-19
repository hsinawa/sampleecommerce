import axios from 'axios'
import { wind } from 'fontawesome';
import { useHistory } from "react-router-dom";

export const RegisterNewUser=(user)=>dispatch=>{

    

dispatch({type:'User_Register_Request'})

// const {email , password} =user

axios.post('/api/users/register',user).then( (res)=>{
    dispatch({type:'User_Register_Success'})

     console.log(res.data.message)
alert(res.data.message)
    

} ).catch(err=>{
    dispatch({type:'User_Register_Failed', payload:err })
    console.log(err)
})


}


export const LoginUser=(user)=>dispatch=>{


    
    dispatch({type:'User_Login_Request'})
    
    axios.post('/api/users/login',user).then( res=>{
        dispatch({type:'User_Login_Success'})
    localStorage.setItem('currentUser' , JSON.stringify(res.data) )
   window.location.href='/'
    
    } ).catch(err=>{
        dispatch({type:'User_Login_Failed' , payload:err } )
        
    })
    
    
    }




export const LogOutUser=()=>dispatch=>{


    localStorage.removeItem('currentUser' )
    localStorage.removeItem('CartItem')
    dispatch({type:'User_LogOut'})
    window.location.href='/login'
  
    
    }






    export const UpdateUserAction=(userupdate , userid )=>dispatch=>{

    

        dispatch({type:'User_update_Request'})
        
        // const {email , password} =user
        
        axios.post('/api/users/update',{userupdate , userid }).then( (res)=>{
            dispatch({type:'User_Update_Success'})
        
             console.log(res.data.message)
        alert(res.data.message)
            
        
        } ).catch(err=>{
            dispatch({type:'User_Update_Failed', payload:err })
            console.log(err)
        })
        
        
        }





export const GetAllUserAction=()=>dispatch=>{

    dispatch({type:'GET_ALL_REQUEST'})

    axios.get('/api/users/getalluser').then(res=>{
        dispatch({type:'GET_ALL_SUCCESS' , payload : res.data })

    }).catch(err=>{
        dispatch({type:'GET_ALL_FAILED' , payload:err })
        
    })

}    



export const DeleteUserAction=(userid)=>dispatch=>{

    dispatch({type:'DELETE_USER_REQUEST'})

    axios.post('/api/users/deleteuser' , {userid} ).then(res=>{
        dispatch({type:'DELETE_USER_SUCCESS' , payload : res.data })

        alert('User Deleted Successfully')
        // {
        //     <h1>
        //         User Deleted Successfully
        //     </h1>
        // }

        window.location.reload()

    }).catch(err=>{
        dispatch({type:'DELETE_USER_FAILED' , payload:err })
        
    })

}        