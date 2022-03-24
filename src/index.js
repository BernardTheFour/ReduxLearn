import store from './store'
import {productAdd, productDelete, productDiscount} from '../src/store/product/productAction'
import {cartAdd, cartRemove} from './store/cart/reducerCart'

store.subscribe(()=>{
    console.log("Store Changed!", store.getState())
})

store.dispatch(productAdd({
    name: "Product 1",
    price: 1500
}))

store.dispatch(productAdd({
    name: "Product 2",
    price: 1000
}))

store.dispatch(productDiscount({
    id: 1,
    hasDiscount: true
}))

store.dispatch(cartAdd({
    id: 1,
    quantity: 3
}))