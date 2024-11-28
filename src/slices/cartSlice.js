import { createSlice } from "@reduxjs/toolkit";
import {toast} from 'react-hot-toast'
const initialState = {
    cart:localStorage.getItem('cart') 
    ? JSON.parse(localStorage.getItem('cart')) : [],
    total : localStorage.getItem('total') ?
     JSON.parse(localStorage.getItem('total')):0,
    totalItems:localStorage.getItem('totalItems') ?
     JSON.parse(localStorage.getItem('totalItems')) : 0,
    quantity:1,
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart:(state,action)=>{
           const product = action.payload
           const index = state.cart.findIndex((item)=>item._id === product._id) 
           if(index >=0){
            toast.error("Product Is already in Cart");
            return;
           }
           console.log("Products",product);
           state.cart.push(product);
           state.totalItems++;
           state.total += product.prize;
           localStorage.setItem('cart',JSON.stringify(state.cart));
           localStorage.setItem('total',JSON.stringify(state.total));
           localStorage.setItem('totalItems',JSON.stringify(state.totalItems));

           toast.success("Product Added to Cart");
        },
        removeFromCart:(state,action)=>{
            const productId = action.payload;
            console.log("ProductId",productId);
            const index = state.cart.findIndex((item)=>item._id === productId);
            if(index>=0){
                state.totalItems--;
                state.total -= state.cart[index].prize;
                state.cart.splice(index,1);

                localStorage.setItem('cart',JSON.stringify(state.cart));
                localStorage.setItem('total',JSON.stringify(state.total));
                localStorage.setItem('totalItems',JSON.stringify(state.totalItems));

                toast.success('Product Remove Successfully');
                
            }
        },
        resetCart:(state)=>{
            state.cart = [];
            state.total = 0;
            state.totalItems = 0;
            localStorage.removeItem('cart');
            localStorage.removeItem('total');
            localStorage.removeItem('totalItems');
        },
        incrementQuantity(state,action){
            const product = action.payload;
            state.quantity += 1;
            console.log("Printing Product Prize",state.quantity);
            state.total = product.prize * state.quantity;  
        },
        decrementQuantity(state,action){
            const product = action.payload;
            if(state.quantity === 1){
                toast.success("Minimum Quantity is 1kg")
                return;
            }
            state.quantity-= 1;
            state.total = product.prize * state.quantity;
        }
    }
})

export const{addToCart,resetCart,removeFromCart,incrementQuantity,decrementQuantity} = cartSlice.actions;

export default cartSlice.reducer;