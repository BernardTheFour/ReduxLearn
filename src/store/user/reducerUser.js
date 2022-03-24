import { createSlice } from "@reduxjs/toolkit";

let lastId = 0
const initialState = []

const slice = createSlice({
    name: "users",
    initialState,
    reducers:{
        userAdd: (users, action) =>{
            users.push({
                id: ++lastId,
                name: action.payload.name,
                balance: action.payload.balance
            })
        },

        userRemove: (users, action) => {
            const index = users.findIndex(user.id === action.payload.id)
            if (index > -1){
                users.splice(index, 1)
            }
        }
    }
})

export const {userAdd, userRemove} = slice.actions
export default slice.reducer