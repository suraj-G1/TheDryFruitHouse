import { FaStar } from "react-icons/fa"
import { RiDeleteBin6Line } from "react-icons/ri"
import ReactStars from "react-rating-stars-component"
import { useDispatch, useSelector } from "react-redux"
import { removeFromCart } from "../../../slices/cartSlice"

export default function RenderCartCourses() {
  const { cart } = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  console.log("Printing Cart",cart);

  const handleRemoveFromCart=(productId)=>{
    dispatch(removeFromCart(productId))
  }
  return (
    <div className="flex flex-1 flex-col ">
      {cart.map((product, indx) => (
        <div
          key={product._id}
          className={`flex w-full flex-wrap items-start justify-between gap-6 ${
            indx !== cart.length - 1 && "border-b border-b-richblack-400 pb-6"
          } ${indx !== 0 && "mt-6"} `}
        >
          <div className="flex flex-1 flex-col gap-4 xl:flex-row">
            <img
              src={product?.image}
              alt={product?.productName}
              className="h-[148px] w-[220px] rounded-lg object-cover"
            />
            <div className="flex flex-col space-y-1">
              <p className="text-lg font-medium text-richblack-800">
                {product?.productName}
              </p>
              
              <div className="flex items-center gap-2">
                <span className="text-yellow-25">4.5</span>
                <ReactStars
                  count={5}
                  value={product?.ratingAndReviews?.length}
                  size={20}
                  edit={false}
                  activeColor="#ffd700"
                  emptyIcon={<FaStar />}
                  fullIcon={<FaStar />}
                />
                <span className="text-richblack-600">
                  {product?.ratingAndReviews?.length} Ratings
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end space-y-2">
            <button
              onClick={()=>handleRemoveFromCart(product._id)}
              className="flex items-center gap-x-1 rounded-md border border-richblack-600 bg-richblack-700 py-2 px-[10px] text-pink-200"
            >
              <RiDeleteBin6Line />
              <span>Remove</span>
            </button>
            <p className="mb-6 text-3xl font-medium text-yellow-100">
              ₹ {product?.prize}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
