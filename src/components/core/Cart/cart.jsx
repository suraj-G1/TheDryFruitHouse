import React from 'react'

import RenderCartProducts from './RenderCartProducts';
import RenderTotalAmount from './RenderTotalAmount';
import { useSelector } from 'react-redux';
const CartItem = ({item , itemIndex}) => {
    //const dispatch = useDispatch();
    const {total,totalItems} = useSelector((state)=>state.cart)
 
  return (
    <div className='bg-richblack-300'>
        <div className='w-10/12 mx-auto bg-richblack-600 p-4'>
      <h1 className="mb-14 text-3xl font-medium text-richblack-5">Cart</h1>
      <p className="border-b border-b-richblack-400 pb-2 font-semibold text-richblack-400">
        {totalItems} Products in Cart
      </p>
      {total > 0 ? (
        <div className="mt-8 flex flex-col-reverse items-start gap-x-6 gap-y-4 lg:flex-row px-4">
          <RenderCartProducts/>
          <RenderTotalAmount />
        </div>
      ) : (
        <p className="mt-14 text-center text-3xl text-richblack-100">
          Your cart is empty
        </p>
      )}
    </div>
    </div>
  )
}

export default CartItem