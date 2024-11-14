import React, { useDebugValue, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import IconBtn from '../../common/IconBtn';
import { BuyProduct } from '../../../services/operations/customerPaymentAPI';
import { useNavigate } from 'react-router-dom';
import ConfirmationModal from '../../common/ConfirmationModal';
const RenderTotalAmount = () => {
    const {total} = useSelector((state)=>state.cart);
    const {token} = useSelector((state)=>state.auth);
    const {cart} = useSelector((state)=>state.cart);
    const [confirmationModal,setConfirmationModal] = useState(false);
    const {user} = useSelector((state)=>state.profile);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleBuyProduct = () => {
      console.log("Buying the Course");
      if (token) {
        BuyProduct(token, cart, user, navigate, dispatch)
        console.log("Bought the Course");
        return
      }
      
      setConfirmationModal({
        text1: "You are not logged in!",
        text2: "Please login to Purchase Course.",
        btn1Text: "Login",
        btn2Text: "Cancel",
        btn1Handler: () => navigate("/login"),
        btn2Handler: () => setConfirmationModal(null),
      })
    }
  
  return (
    <div className="min-w-[280px] rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-6">
      <p className="mb-1 text-sm font-medium text-richblack-300">Total:</p>
      <p className="mb-6 text-3xl font-medium text-yellow-100">₹ {total}</p>
      <IconBtn
        text="Buy Now"
        onclick={handleBuyProduct}
        customClasses="w-full justify-center"
      />
      {confirmationModal && <ConfirmationModal confirmationModal={confirmationModal}/>}
    </div>
  )
}

export default RenderTotalAmount