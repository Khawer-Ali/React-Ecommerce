import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const STATUES = {
    IDLE : "Idle",
    ERROR : "Error",
    LOADING : "Loading",
};

const productSlice = createSlice({
    name : 'Product',
    initialState : {
        data : [],
        status : STATUES.IDLE
    },
    // reducers : {
    //     setProducts(state,action) {
    //         // Never Do this here beacuse Reducer is a sync function use thunk to do this
    //         // const products = await fetch("https://fakestoreapi.com/products");
    //         state.data = action.payload;
    //     },
    //     setStatus(state,action) {
    //         state.status = action.payload;
    //     }
    // }
    extraReducers: (builder) => {
        builder
        .addCase(fetchProduct.pending,(state,action) => {
            state.status =  STATUES.LOADING;
        })
        .addCase(fetchProduct.fulfilled,(state,action) => {
            state.data = action.payload;
            state.status =  STATUES.IDLE;
        })
        .addCase(fetchProduct.rejected,(state,action) => {
            state.status =  STATUES.ERROR;
        })
    }
});


// createSlice will create actions & reducer automactically
export const {setProducts,setStatus} = productSlice.actions;
export default productSlice.reducer;


// // Thunks
export const fetchProduct = createAsyncThunk('product/fetch',async () => {
    const products = await fetch("https://fakestoreapi.com/products");
    const json = await products.json();
    return json;
});


// export function fetchProduct() {
//     return async function fetchProductThunks(dispatch,getState) {
//         dispatch(setStatus(STATUES.LOADING))
//         try {
//             const products = await fetch("https://fakestoreapi.com/products");
//             const json = await products.json();
//             dispatch(setProducts(json))
//             dispatch(setStatus(STATUES.IDLE))

//         } catch (error) {
//             console.log(error);
//         dispatch(setStatus(STATUES.ERROR))

//         }
//     }
// }