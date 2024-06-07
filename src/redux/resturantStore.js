import { configureStore } from "@reduxjs/toolkit";
import resturantSlice from "./resturantSlice";

const resturantStore = configureStore({
    reducer:{
        resturantReducer:resturantSlice
    }
})
export default resturantStore