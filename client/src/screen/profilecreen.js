import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { LoginUserReducer } from '../reducers/userreducer'
import Loading from '../component/loader';
import Message from '../component/message'
import {UpdateUserAction} from '../actions/useraction'
import {UpdateUserReducer} from '../reducers/userreducer'



const Profile = () => {
   

    const loginstate = useSelector((state) => state.LoginUserReducer)
    const updateuser = useSelector((state)=>state.UpdateUserReducer)

    const {loading , success , error} = updateuser

    const dispatch = useDispatch()

    const usernow = loginstate.currentUser

    const [name, setname] = useState(usernow.name)
    const [email, setemail] = useState(usernow.email)
    const [password, setpassword] = useState('')
    const [cpassword, setcpassword] = useState('')

    const update = (e) => {

        e.preventDefault()



        if (password === cpassword) {

            const updateuser = {
                name: name,
                email: email,
                password: password
            }

            dispatch(UpdateUserAction( updateuser , usernow._id  ))


        }
        else {
            document.getElementById('Message').innerHTML = 'Passwords Not Matched'
            alert('Passwords Not Matched')
        }



    }




    return (
        <div>

            <div style={{ textAlign: 'center' }} >
                <h2> Update </h2>

                {loading && (<Loading />)}
                {error && (<Message message='Email Already Registered' />)}

                {success && (<Message message='Succesfully Registered' />)}



                <form onSubmit={update} >

                    <input type="text" value={name} required placeholder="Enter Name" onChange={(e) => { setname(e.target.value) }} id="fashionform" ></input>
                    <input type="text" value={email} required placeholder="Enter Email" onChange={(e) => { setemail(e.target.value) }} id="fashionform" ></input>
                    <input type="text" value={password} required placeholder="Enter Password" onChange={(e) => { setpassword(e.target.value) }} id="fashionform" ></input>
                    <input type="text" value={cpassword} required placeholder="Enter Confrim Password" onChange={(e) => { setcpassword(e.target.value) }} id="fashionform" ></input>



                    <br></br>
                    <button id="btn" type="submit"   > Update </button>
                    <p id='Message' ></p>
                </form>


            </div>



        </div>
    )
}


export default Profile;