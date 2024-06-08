import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchResturantData = createAsyncThunk('resturant/fetchData',async()=>{
    const result = await axios.get('/restaurants.json')
    localStorage.setItem("resturantData",JSON.stringify(result.data.restaurants))
    return result.data.restaurants
})

const resturantSlice = createSlice({
    name:'resturant',
    initialState:{resturantDataDummy:[],resturantData:[],loading:false,error:""},
    reducers:{
        searchResturant : (state,action)=>{
            state.resturantData = state.resturantDataDummy.filter(item=>item.neighborhood.toLowerCase().includes(action.payload))
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchResturantData.fulfilled,(state,action)=>{
            state.resturantDataDummy=action.payload
            state.resturantData=action.payload
            state.loading=false
            state.error=""
        })
        .addCase(fetchResturantData.pending,(state,action)=>{
            state.resturantDataDummy=[]
            state.resturantData=[]
            state.loading=true
            state.error=""
        })
        .addCase(fetchResturantData.rejected,(state,action)=>{
            state.resturantDataDummy=[]
            state.resturantData=[]
            state.loading=false
            state.error="API call failed,Try after some time!!!"
        })
    }
})
export const {searchResturant} = resturantSlice.actions
export default resturantSlice.reducer