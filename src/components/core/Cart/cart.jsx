import React from 'react'

import RenderCartProducts from './RenderCartProducts';
import RenderTotalAmount from './RenderTotalAmount';
import { useSelector } from 'react-redux';
const CartItem = ({item , itemIndex}) => {
    //const dispatch = useDispatch();
    const {total,totalItems} = useSelector((state)=>state.cart)
 
  return (
    <div>
        <div className='w-11/12 mx-auto p-4'>
      <h1 className="mb-8 text-3xl font-medium text-richblack-900">Cart</h1>
      <p className="border-b border-b-richblack-900 pb-2 font-semibold text-richblack-900">
        {totalItems} Products in Cart
      </p>
      {totalItems > 0 ? (
        <div className="mt-8 flex flex-col-reverse items-start gap-x-8 gap-y-4 lg:flex-row ">
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