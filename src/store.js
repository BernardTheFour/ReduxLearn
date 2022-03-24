import { createStore } from "redux"
import { devToolsEnhancer } from "@redux-devtools/extension"
import reducerProduct from './store/product/reducerProduct'
import reducerCart from './store/cart/reducerCart'

export const product  = createStore(reducerProduct, devToolsEnhancer({trace:true}))
export const cart = createStore(reducerCart, devToolsEnhancer({trace:true}))