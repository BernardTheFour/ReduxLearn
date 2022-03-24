import { createStore } from "redux"
import { devToolsEnhancer } from "@redux-devtools/extension"
import reducerProduct from './store/product/reducerProduct'
import reducerCart from './store/cart/reducerCart'

import reducer from '../src/store/rootReducers'

const store = createStore(reducer, devToolsEnhancer({trace:true}))

export default store