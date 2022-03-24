import store from './store'
import {productAdd, productDelete, productChangeDiscount} from '../src/store/product/productAction'

store.subscribe(()=>{
    console.log("Store Changed!", store.getState())
})

store.dispatch(productAdd({
    name: "Product 1",
    price: 1500
}))