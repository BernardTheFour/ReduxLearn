import store from './store'
import {productAdd, productDelete, productDiscount} from '../src/store/product/productAction'
import {cartAdd, cartRemove} from './store/cart/reducerCart'
import {userAdd, userRemove} from './store/user/reducerUser'

store.subscribe(()=>{
    console.log("Store Changed!", store.getState())
})

// product store
store.dispatch(productAdd({
    name: "Product 1",
    price: 1500
}))

store.dispatch(productAdd({
    name: "Product 2",
    price: 1000
}))

store.dispatch(productAdd({
    name: "Product 3",
    price: 2500
}))

store.dispatch(productDiscount({
    id: 1,
    hasDiscount: true
}))

store.dispatch(productDelete({
    id:2
}))

// cart store


// user store
