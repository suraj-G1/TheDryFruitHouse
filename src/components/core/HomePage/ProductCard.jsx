import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart, incrementQuantity,decrementQuantity} from '../../../slices/cartSlice';

const ProductCard = ({product}) => {
    const {cart} = useSelector((state)=>state.cart);
    //const cartItem = cart.find((p)=>p.id === product._id);

    const[quantity,setQuantity] = useState(1);
    console.log("Quantity",quantity);
    const dispatch = useDispatch();
  return (
    <div
      className="flex flex-col justify-between items-center hover:scale-105 transition duration-300 
    ease-in shadow-2xl gap-3 py-4 px-1 mt-10 ml-5 rounded-xl bg-pink-5 "
    >
      <div className="h-[150px] w-[78%]">
        <img src={product.image} className="h-full w-full rounded-lg" />
      </div>
      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1 ">
          {product.productName}
        </p>
      </div>

      <div>
        <p className="w-40 text-gray-400 text-[11px] font-normal text-left">
          {product.description.split(" ").slice(0, 3).join(" ") + "..."}
        </p>
      </div>
      <div className="flex justify-between  gap-[25px] items-center w-full mt-2">
        <div>
          <p className="text-green-600 text-sm font-semibold">${product.prize}</p>
        </div>
         {cart.some((p) => p._id === product._id) ? (
          <button   className="text-gray-700 border-2 uppercase border-gray-700 p-1 px-3 
           text-[12px] rounded-full font-semibold
           hover:text-white hover:bg-gray-700 transition duration-300 ease-in">Remove Item</button>
        ) : (
          <button  className="text-gray-700 border-2 uppercase border-gray-700 p-1 px-3
            text-[12px] rounded-full font-semibold
            hover:text-white hover:bg-gray-700 transition duration-300 ease-in">Add to Cart</button>
        )}
      </div>

      

    </div>
  )
}

export default ProductCard