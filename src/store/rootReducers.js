import { combineReducers } from "redux";
import productReducer from './product/reducerProduct'
import cartReducer from './cart/reducerCart'

export default combineReducers({
    products: productReducer,
    carts: cartReducer
})