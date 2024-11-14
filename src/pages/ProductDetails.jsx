import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';
import { getProductDetails } from '../services/operations/productDetailsAPI';
import GetAvgRating from '../utils/avgRating';
import ProductDetailsCart from '../components/core/Product/ProductDetailsCard';
import RatingStars from '../components/common/RatingStars';
import Footer from '../components/common/Footer';
import ConfirmationModal from '../components/common/ConfirmationModal';
import { BuyProduct } from '../services/operations/customerPaymentAPI';
import { addToCart } from '../slices/cartSlice';
const ProductDetails = () => {
  const { user } = useSelector((state) => state.profile)
  const { token } = useSelector((state) => state.auth)
  const { paymentLoading } = useSelector((state) => state.product)
  
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { productId } = useParams()
  
  const [response, setResponse] = useState(null)
  const [confirmationModal, setConfirmationModal] = useState(null)
  useEffect(() => {
    // Calling fetchCourseDetails fucntion to fetch the details
    ;(async () => {
      try {
        console.log("I am coming here");
        const res = await getProductDetails(productId)
        console.log("Product details res: ", res)
        setResponse(res)
      } catch (error) {
        console.log("Could not fetch Product Details")
      }
    })
    ()
  },[productId])

  // console.log("response: ", response)

  // Calculating Avg Review count
  const [avgReviewCount, setAvgReviewCount] = useState(0)
  useEffect(() => {
    const count = GetAvgRating(response?.data?.courseDetails.ratingAndReviews)
    setAvgReviewCount(count)
  }, [response])

  console.log("avgReviewCount: ", avgReviewCount)

  if ( !response) {
    return (
      <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
        <div className="spinner">Spinner</div>
      </div>
    )
  }
  
  console.log("Printing Response",response);

  const {
    _id: product_id,
    productName,
    description,
    image,
    prize,
    ratingAndReview,
    customerPurchased,
  } = response;

  const handleAddToCart=()=>{
    dispatch(addToCart(response))
  }

  const handleBuyProduct = () => {
    console.log("Buying the Course");
    if (token) {
      BuyProduct(token, [productId], user, navigate, dispatch)
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

  if (paymentLoading) {
    // console.log("payment loading")
    return (
      <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
        <div className="spinner"></div>
      </div>
    )
  }

  return (
    <>
        <div className={`relative w-full bg-richblack-600`}>
        {/* Hero Section */}
         <div className='w-10/12 mx-auto'>
         <div className="mx-auto box-content  2xl:relative bg-richblack-600 p-6">
          <div className="mx-auto grid min-h-[580px] max-w-maxContentTab justify-items-center py-8 lg:mx-4 lg:justify-items-start lg:py-0 xl:max-w-[810px]">
            <div className="relative block max-h-[30rem] lg:hidden">
              <div className="absolute bottom-0 left-0 h-full w-full shadow-[#161D29_0px_-64px_36px_-28px_inset]"></div>
              <img
                src={image}
                alt="Product Image"
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
                <span>{`${ratingAndReview.length} Reviews`}</span>
                <span>{`${customerPurchased.length} Customers Purchased`}</span>
              </div>
              
             
            </div>
            <div className="flex w-full flex-col gap-4 border-y border-y-richblack-500 py-4 lg:hidden">
              <p className="space-x-3 pb-4 text-3xl font-semibold text-richblack-5">
                Rs. {prize}
              </p>
              <button className="yellowButton"
                onClick={handleBuyProduct}
               >
                Buy Now
              </button>
              <button onClick={handleAddToCart} className="blackButton">Add to Cart</button>
            </div>
          </div>
          {/* Courses Card */}
          <div className="right-[2rem] top-[60px] mx-auto hidden min-h-[600px] w-1/3 max-w-[410px] translate-y-24 md:translate-y-0 lg:absolute  lg:block">
            <ProductDetailsCart
              product={response}
              setConfirmationModal={setConfirmationModal}
              handleBuyProduct={handleBuyProduct}
            />
          </div>
        </div>

        
         </div>
         <Footer/>
        </div>

      {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
    </>
    
  )
}

export default ProductDetails