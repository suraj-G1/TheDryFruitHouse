import { combineReducers } from "@reduxjs/toolkit";
import authSlice from '../slices/authSlice';
import profileSlice from '../slices/profileSlice';
import cartSlice from '../slices/cartSlice';
import productSlice from '../slices/productSlice'
const rootReducer = combineReducers({
    auth:authSlice,
    cart:cartSlice,
    profile:profileSlice,
    product:productSlice

})

export default rootReducer;