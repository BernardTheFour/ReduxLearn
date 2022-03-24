import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;
const initialState = [];

const slice = createSlice({
    name: "products",
    initialState: initialState,
    reducers: {
        productAdd: (products, action) => {
            products.push({
                id: ++lastId,
                name: action.payload.name,
                price: action.payload.price,
                hasDiscount: false,
            });
        },
        productDiscount: (products, action) => {
            const index = products.findIndex(product => product.id === action.payload.id);
            if(index > -1) {
                products[index].hasDiscount = action.payload.hasDiscount;
            }
        },

        productDelete:(products, action) =>{
            const index = products.findIndex(product => product.id === action.payload.id)
            if (index > -1){
                products.splice(index, 1)
            }
        }
    }
});

export const { productAdded, productDiscount, productDelete} = slice.actions;
export default slice.reducer;
