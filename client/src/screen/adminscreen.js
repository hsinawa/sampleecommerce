import React from 'react'
import { Link , Switch , Route } from 'react-router-dom';
import ProductList from './productlist'
import AddNewProduct from './newproduct'
import OrderList from './orderlist'
import UserList from './userlist'
import EditProduct from './editproduct'
const  AdminScreen = () => {
    return (
        <div>
            <div className='row' style={{color:'black'}}  >

                <div >
                   <br/>

                <ul style={{background:'blue'}} >
                    <li ><Link to='/admin/userlist' style={{color:'black'}} > User List</Link>  </li>
                    <li ><Link to='/admin/productlist'  style={{color:'black'}}>Product List </Link>   </li>
                    <li ><Link to='/admin/addnewproduct' style={{color:'black'}} >Add New Product</Link>   </li>
                    <li ><Link to='/admin/orderlist' style={{color:'black'}} >Order List</Link>    </li>


                </ul>

                <Switch>

                    <Route path="/admin/userlist" component={UserList}  ></Route>
                    <Route path="/admin/productlist" component={ProductList} ></Route>
                    <Route path="/admin/addnewproduct" component={AddNewProduct} ></Route>
                    <Route path="/admin/orderlist" component={OrderList} ></Route>
                    <Route path="/admin/editproduct/:product" component={EditProduct} ></Route>
                    

                </Switch>

                </div>

               
                
              
                
            </div>
        </div>
    )
}


export default  AdminScreen;