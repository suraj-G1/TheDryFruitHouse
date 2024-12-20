import React  from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom"
import {addToCart} from '../../../slices/cartSlice'
import {toast} from 'react-hot-toast'
import { FaShareSquare } from 'react-icons/fa'
import copy from 'copy-to-clipboard'
import { BuyProduct } from '../../../services/operations/customerPaymentAPI'
const ProductDetailsCart = ({weight,product , setConfirmationModal}) => {
  const {user} = useSelector((state)=>state.profile);
  const {token} = useSelector((state)=>state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleBuyProduct = () => {
    if (token) {
      BuyProduct(token, [productId], user, navigate, dispatch);
      return;
    }

    setConfirmationModal({
      text1: "You are not logged in!",
      text2: "Please login to Purchase Product.",
      btn1Text: "Login",
      btn2Text: "Cancel",
      btn1Handler: () => navigate("/login"),
      btn2Handler: () => setConfirmationModal(null),
    });
  };
  const {
    image:image,
    prize:currentPrize,
    _id:productId
  } = product;


  const handleShare = () => {
    copy(window.location.href)
    toast.success("Link copied to clipboard")
  }

  const handleAddToCart = ()=>{
    if (token) {
      dispatch(addToCart(product))
      return
    }
    setConfirmationModal({
      text1: "You are not logged in!",
      text2: "Please login to add To Cart",
      btn1Text: "Login",
      btn2Text: "Cancel",
      btn1Handler: () => navigate("/login"),
      btn2Handler: () => setConfirmationModal(null),
    })
  }
  return (
    <div className='rounded-lg'>
      <div
        className={`flex flex-col gap-4  bg-richblack-700  text-richblack-5 mx-auto w-11/12 rounded-lg`}
      >
        {/* Course Image */}
        <img
          src={image}
          alt={product?.productName}
          className="max-h-[300px] min-h-[200px] overflow-hidden object-cover max-w-full"
        />

        <div className="px-4">
          <div className="space-x-3 pb-4 text-3xl font-semibold">
            Rs. {weight*currentPrize}
          </div>
          <div className="flex flex-col gap-4">
            <button
              className="yellowButton"  
              onClick={handleBuyProduct}
            >
                Buy Now
            </button> 
             {(!user || !product?.customerPurchased.includes(user?._id)) && (
              <button onClick={handleAddToCart} className="blackButton">
                Add to Cart
              </button>
            )}
          </div>

          <div className="text-center">
            <button
              className="mx-auto flex items-center gap-2 py-6 text-yellow-100 "
              onClick={handleShare}
            >
              <FaShareSquare size={15} /> Share
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailsCart