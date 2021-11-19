
import './App.css';
import Navbar from './Header/navbar';
import HomeScreen from './screen/homescreen'
import { BrowserRouter , Route } from "react-router-dom";
import  ProductScreenDescription  from './screen/description' ;
import ProductGrid from './Header/productgrid'
import axios from 'axios';
import CartScreen from './screen/cartscreen';
import Register from './screen/registration'
import Login from './screen/login'
import { useState } from 'react';
import OrderScreen from './screen/orderscreen'
import OrderInfo from './screen/OrderInfo'
import Profile from './screen/profilecreen'
import AdminScreen from './screen/adminscreen'

function App() {
  const currentuser = JSON.parse(localStorage.getItem('currentUser'))

  return (
    <div className="App">

      <Navbar/>
  
   {/* <HomeScreen/> */}

   <BrowserRouter>
   
   <Route exact path="/" component={HomeScreen} ></Route>
   <Route path="/product/:id" component={ProductScreenDescription}  ></Route>
    <Route  path="/cart"  component={CartScreen}  />
    <Route path="/register" component={Register}  ></Route>
    <Route path="/login" component={Login} ></Route>
 {  currentuser ? <Route path="/order" component={OrderScreen} ></Route> : ( null ) }
 {  currentuser ? <Route path="/orderinfo/:orderid" component={OrderInfo} ></Route> : ( <h3>Please Login First  </h3> ) }
 <Route path='/profile' component={Profile} ></Route>
 <Route path="/admin" component={AdminScreen}  ></Route>

   </BrowserRouter>
    </div>
  );
}

export default App;
