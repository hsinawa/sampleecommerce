import { getallproductsreducer, GetProductByIdReducer, ReviewReducer , ProductDeleteReducer , AddProductReducer , UpdateProductReducer} from './reducers/productReducer';
import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { CartReducer } from './reducers/cartreducer';
import { RegisterUserReducer, LoginUserReducer, UpdateUserReducer , GetAllUserReducer , DeleteUserReducer } from './reducers/userreducer'
import { OrderReducer } from './reducers/orderReducer'
import { GetOrderByUserIdReducer , GetAllOrderReducer } from './reducers/orderReducer';
import { GetOrderByOnlyIdReducer } from './reducers/orderReducer'


import thunk from 'redux-thunk'


const FinalReducer = combineReducers(
  {
    getallproductsreducer: getallproductsreducer,
    GetProductByIdReducer: GetProductByIdReducer,
    CartReducer: CartReducer,
    RegisterUserReducer: RegisterUserReducer,
    LoginUserReducer: LoginUserReducer,
    OrderReducer: OrderReducer,
    GetOrderByUserIdReducer: GetOrderByUserIdReducer,
    GetOrderByOnlyIdReducer: GetOrderByOnlyIdReducer,
    ReviewReducer: ReviewReducer,
    UpdateUserReducer: UpdateUserReducer ,
    GetAllUserReducer:GetAllUserReducer ,
    DeleteUserReducer:DeleteUserReducer ,
    ProductDeleteReducer : ProductDeleteReducer ,
    AddProductReducer:AddProductReducer ,
    UpdateProductReducer:UpdateProductReducer ,
    GetAllOrderReducer:GetAllOrderReducer

  }
)


const CartItem = localStorage.getItem('CartItem') ? JSON.parse(localStorage.getItem('CartItem')) : []

const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null


const InitialState = {
  CartReducer: { CartItem: CartItem },
  LoginUserReducer: { currentUser: currentUser }
}



const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsBlacklist, actionsCreators and other options
});

const store = createStore(FinalReducer, InitialState, composeWithDevTools(
  applyMiddleware(thunk)

))


export default store;