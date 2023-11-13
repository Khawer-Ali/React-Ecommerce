// By the used of Slice, We can organise are store data in small pieces
// Reducer take functions to mutate state
//  dispatch  - when want Store change 

import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name : 'cart',
    initialState : [],
    reducers : {
        add(state,action) {
            state.push(action.payload);
        },
        remove(state,action) {
            return state.filter(item => item.id !== action.payload);
    
        }
    }
});

// console.log(cartSlice,"cartSlice");

// createSlice will create actions & reducer automactically
export const {add,remove} = cartSlice.actions;
export default cartSlice.reducer;