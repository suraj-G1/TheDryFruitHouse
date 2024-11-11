import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart, incrementQuantity,decrementQuantity} from '../../../slices/cartSlice';
import { Link } from 'react-router-dom';
import RatingStars from '../../common/RatingStars'
import GetAvgRating from '../../../utils/avgRating';
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
        <div className='flex flex-col bg-pink-25 py-3 px-4 rounded-md'>
          <div className="rounded-lg mx-auto">
            <img
              src={product?.image}
              alt="course thumnail"
              className={`${Height} w-full rounded-xl object-cover `}
            />
          </div>
          <div className="flex flex-col gap-2 px-1 py-3">
            <p className="text-xl text-richblack-5">{product?.productName}</p>
            <div className="flex items-center gap-2">
              <span className="text-yellow-5">{avgReviewCount || 0}</span>
              <RatingStars Review_Count={avgReviewCount} />
              <span className="text-richblack-400">
                {product?.ratingAndReview?.length} Ratings
              </span> 
            </div>
            <p className="text-xl text-richblack-5">Rs. {product?.prize}</p>
          </div>
        </div>
      </Link>
    </div>

  )
}

export default ProductCard