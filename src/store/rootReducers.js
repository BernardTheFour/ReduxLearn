import { combineReducers } from "redux";
import productReducer from './product/reducerProduct'
import cartReducer from './cart/reducerCart'
import userReducer from './user/reducerUser'

export default combineReducers({
    products: productReducer,
    carts: cartReducer,
    users: userReducer
})