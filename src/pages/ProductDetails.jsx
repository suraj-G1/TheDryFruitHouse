import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';
import { getProductDetails } from '../services/operations/productDetailsAPI';
import GetAvgRating from '../utils/avgRating';
import ProductDetailsCart from '../components/core/Product/ProductDetailsCard';
import RatingStars from '../components/common/RatingStars';
const ProductDetails = () => {
    const {token} = useSelector((state)=>state.auth);
    const{user} = useSelector((state)=>state.profile);
    const{loading} = useSelector((state)=>state.profile);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const productId = useParams();

    const [response,setResponse] = useState(null);
    const [confirmationModal,setConfirmationModal] = useState(null);

    useEffect(()=>{
        const getProductDetails=async()=>{
            try{
                const result= await getProductDetails(productId);
                console.log("Product details",result);
                setResponse(result);
            }catch(error){
                console.log("Could not fetch Product Details")
            }
        }
        getProductDetails();
    },[productId])

    const[avgReviewCount,setAvgReviewCount] = useState(0);

    useEffect(()=>{
        const count = GetAvgRating(response?.data?.productDetails?.ratingAndReview);
        setAvgReviewCount(count);
    },[response])

    const [isActive, setIsActive] = useState(Array(0))
  const handleActive = (id) => {
    // console.log("called", id)
    setIsActive(
      !isActive.includes(id)
        ? isActive.concat([id])
        : isActive.filter((e) => e !== id)
    )
  }

  const{
    _id:product_id,
    productName,
    description,
    image,
    prize,
    ratingAndReview,
    customerPurchased,
  } = response?.data?.productDetails;


  return (
    <div>
        <div className={`relative w-full bg-richblack-800`}>
        {/* Hero Section */}
        <div className="mx-auto box-content px-4 lg:w-[1260px] 2xl:relative ">
          <div className="mx-auto grid min-h-[450px] max-w-maxContentTab justify-items-center py-8 lg:mx-0 lg:justify-items-start lg:py-0 xl:max-w-[810px]">
            <div className="relative block max-h-[30rem] lg:hidden">
              <div className="absolute bottom-0 left-0 h-full w-full shadow-[#161D29_0px_-64px_36px_-28px_inset]"></div>
              <img
                src={image}
                alt="course thumbnail"
                className="aspect-auto w-full"
              />
            </div>
            <div
              className={`z-30 my-5 flex flex-col justify-center gap-4 py-5 text-lg text-richblack-5`}
            >
              <div>
                <p className="text-4xl font-bold text-richblack-5 sm:text-[42px]">
                  {productName}
                </p>
              </div>
              <p className={`text-richblack-200`}>{description}</p>
              <div className="text-md flex flex-wrap items-center gap-2">
                <span className="text-yellow-25">{avgReviewCount}</span>
                <RatingStars Review_Count={avgReviewCount} Star_Size={24} />
                <span>{`(${ratingAndReview.length} reviews)`}</span>
                <span>{`${customerPurchased.length} Customers Purchased`}</span>
              </div>
             
            </div>
            <div className="flex w-full flex-col gap-4 border-y border-y-richblack-500 py-4 lg:hidden">
              <p className="space-x-3 pb-4 text-3xl font-semibold text-richblack-5">
                Rs. {prize}
              </p>
              <button className="yellowButton">
                Buy Now
              </button>
              <button className="blackButton">Add to Cart</button>
            </div>
          </div>
          {/* Courses Card */}
          <div className="right-[1rem] top-[60px] mx-auto hidden min-h-[600px] w-1/3 max-w-[410px] translate-y-24 md:translate-y-0 lg:absolute  lg:block">
            <ProductDetailsCart
              product={response?.data?.productDetails}
              setConfirmationModal={setConfirmationModal}
            //   handleBuyCourse={handleBuyCourse}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails