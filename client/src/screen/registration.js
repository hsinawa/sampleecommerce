import React , {useState} from 'react';
import {useDispatch , useSelector} from 'react-redux'
import {RegisterNewUser} from '../actions/useraction'
import {RegisterUserReducer} from '../reducers/userreducer'
import style from './form.css'
import Loading from '../component/loader';
import Message from '../component/message'

const Register=()=>{

    const registreducer = useSelector(state=>state.RegisterUserReducer)


const {loading , error , success } = registreducer


    const [name , setname] = useState('')
    const [email , setemail] = useState('')
    const [password , setpassword] = useState('')
    const [cpassword , setcpassword ] = useState('')

    const dispatch = useDispatch()

    const register=(e)=>{

        e.preventDefault()

        const user ={
            name : name , 
            email:email ,
            password:password
        }


        if(password===cpassword)
        {
           dispatch(RegisterNewUser(user))
        }
        else{
document.getElementById('Message').innerHTML = 'Passwords Not Matched'
 alert('Passwords Not Matched')
        }
    
  
    
    }



    return(
        <div>

<div style={{textAlign:'center'}} >
    <h2> Register </h2>

{ loading && (<Loading/>) }
{error && (<Message message='Email Already Registered' />) }

{success && ( <Message message='Succesfully Registered' /> ) }



<form onSubmit={register} >

<input type="text" value={name} required  placeholder="Enter Name" onChange={ (e)=>{ setname(e.target.value) } }   id="fashionform" ></input>
<input type="text" value={email} required placeholder="Enter Email" onChange={ (e)=>{ setemail(e.target.value) } }   id="fashionform" ></input>
<input type="text" value={password} required placeholder="Enter Password" onChange={ (e)=>{ setpassword(e.target.value) } }   id="fashionform" ></input>
<input type="text" value={cpassword} required placeholder="Enter Confrim Password" onChange={ (e)=>{ setcpassword(e.target.value) } }   id="fashionform" ></input>

<br></br>
<button id="btn"  type="submit"   > Register </button>
<p id='Message' ></p>
</form>

<a href="/login" > Click here to login </a>

</div>




        </div>
    )



}

export default Register;