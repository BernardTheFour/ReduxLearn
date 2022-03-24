import { createStore } from "redux"
import { devToolsEnhancer } from "@redux-devtools/extension"
import reducerProduct from './store/product/reducerProduct'
import reducerCart from './store/cart/reducerCart'

const store  = createStore(reducerProduct, devToolsEnhancer({trace:true}))
const cart = createStore(reducerCart, devToolsEnhancer({trace:true}))

export default store