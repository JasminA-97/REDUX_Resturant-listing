import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchResturantData = createAsyncThunk('resturant/fetchData',async()=>{
    const result = await axios.get('/restaurants.json')
    return result.data.restaurants
})

const resturantSlice = createSlice({
    name:'resturant',
    initialState:{resturantData:[],loading:false,error:""},
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchResturantData.fulfilled,(state,action)=>{
            state.resturantData=action.payload
            state.loading=false
            state.error=""
        })
        .addCase(fetchResturantData.pending,(state,action)=>{
            state.resturantData=[]
            state.loading=true
            state.error=""
        })
        .addCase(fetchResturantData.rejected,(state,action)=>{
            state.resturantData=[]
            state.loading=false
            state.error="API call failed,Try after some time!!!"
        })
    }
})
export default resturantSlice.reducer