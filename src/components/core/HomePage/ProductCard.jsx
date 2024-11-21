import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { addToCart, removeFromCart, incrementQuantity,decrementQuantity} from '../../../slices/cartSlice';
import { Link } from 'react-router-dom';
import RatingStars from '../../common/RatingStars'
import GetAvgRating from '../../../utils/avgRating';
import { MdOutlineShoppingBag } from "react-icons/md";

const ProductCard = ({product,Height}) => {
    const {cart} = useSelector((state)=>state.cart);
    //const cartItem = cart.find((p)=>p.id === product._id);

    //const[quantity,setQuantity] = useState(1);
    //console.log("Quantity",quantity);
    const dispatch = useDispatch();

    const [avgReviewCount,setAvgReviewCount] = useState(0);

    useEffect(()=>{
      const count = GetAvgRating(product.ratingAndReview);
      setAvgReviewCount(count)
    },[product]);
  return (
    
    <div>
      <Link to={`/products/${product._id}`}>
        <div className='flex flex-col border border-richblack-25 text-center mb-4 rounded-md shadow-xl'>
          <div className="rounded-md mx-auto">
            <img
              src={product?.image}
              alt="product thumnail"
              className={`${Height} w-full object-cover h-fit rounded-md `}
            />
          </div>
          <div className="flex flex-col gap-2 px-1 py-3">
            <p className="text-xl font-semibold">{product?.productName}</p>
            <div className="flex items-center gap-2 justify-center">
              <span className="text-black">{avgReviewCount || 0}</span>
              <RatingStars Review_Count={avgReviewCount} />
              <span className="text-black">
                {product?.ratingAndReview?.length} Ratings
              </span> 
            </div>
            <p className="text-[#520608] text-xl font-bold">Rs. {product?.prize}</p>

            <div className='flex justify-center items-center w-full'>
            <div className='flex justify-center items-center bg-[#520608] p-1 text-white'>
              <MdOutlineShoppingBag/>
              <button className='font-semibold text-[16px]'>View Details</button>
              
            </div>
          </div>
          </div>
        </div>
      </Link>
    </div>

  )
}

export default ProductCard