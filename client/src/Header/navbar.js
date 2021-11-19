import React from 'react';
import style from './navbar.css'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { LogOutUser } from '../actions/useraction'

const Navbar = () => {


    const cartreducer = useSelector(state => state.CartReducer)


    const { CartItem } = cartreducer


    const dispatch = useDispatch()

    const currentuser = JSON.parse(localStorage.getItem('currentUser'))



    return (
        <div>

            <ul>
               
                <li>Awanish  Mishra </li>
                {/* <a  href="/login" >
    <li>Login </li>
    </a> */}


                {currentuser ?
                 (
                    <div>
                        <li>name = {currentuser.name}
                        </li>
                        {/* <li onClick={() => { dispatch(LogOutUser()) }} >Logout</li> */}


                        <div class="dropdown">

                        <a onClick={() => { dispatch(LogOutUser()) }}>
                            <li>LOGOUT</li>
                        </a>



  <a href="/" style={{ textDecoration: 'none', color: 'white' }}>
                    <li>Home</li>
                </a>

<a href ="/order" > <li>Orders</li> </a>


                <li  >
                    <a href="/cart" style={{ textDecoration: 'none', color: 'white' }} >
                        <i class="fas fa-shopping-cart"></i> {CartItem.length}
                    </a>

                </li>

</div>
                    </div>




                ) 
                
                :



                    (
                        <div>
                            <a href="/login" >
                                <li>Login </li>
                            </a>
                            <a href="/register" >
                                <li>Register </li>
                            </a>
                        </div>
                    )}

                {/* <a  href="/register" >
    <li>Register </li>
    </a> */}

                {/* <li onClick={ ()=>{ dispatch(LogOutUser()) } } >Logout</li> */}

        



            </ul>

        </div>

    );

}

export default Navbar;