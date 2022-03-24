import { createSlice } from "@reduxjs/toolkit"

let lastId = 0
const initialState = []

const slice = createSlice({
    name: "carts",
    initialState: initialState,
    reducers:{
        cartAdd: (carts, action) =>{
            carts.push({
                id: ++lastId,
                quantity: action.payload.quantity
            })
        },

        cartRemove: (carts, action) => {
            const index = carts.findIndex(cart => cart.id === action.payload.id)
            if (index > -1){
                carts.splice(index, 1)
            }
        }
    }
})

export const {cartAdd, cartRemove} = slice.actions
export default slice.reducer