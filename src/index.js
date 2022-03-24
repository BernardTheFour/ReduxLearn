import {cart, product} from './store'
import {productAdd, productDelete, productDiscount} from '../src/store/product/productAction'
import {cartAdd, cartRemove} from './store/cart/reducerCart'

product.subscribe(()=>{
    console.log("Store Changed!", store.getState())
})

product.dispatch(productAdd({
    name: "Product 1",
    price: 1500
}))

product.dispatch(productAdd({
    name: "Product 2",
    price: 1000
}))

product.dispatch(productDiscount({
    id: 1,
    hasDiscount: true
}))

cart.dispatch(cartAdd({
    id: 1,
    quantity: 3
}))