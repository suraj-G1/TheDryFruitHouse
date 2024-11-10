import { combineReducers } from "@reduxjs/toolkit";
import authSlice from '../slices/authSlice';
import profileSlice from '../slices/profileSlice';
import cartSlice from '../slices/cartSlice';
const rootReducer = combineReducers({
    auth:authSlice,
    cart:cartSlice,
    profile:profileSlice

})

export default rootReducer;