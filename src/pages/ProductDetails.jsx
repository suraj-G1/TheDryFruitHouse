import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getProductDetails } from "../services/operations/productDetailsAPI";
import GetAvgRating from "../utils/avgRating";
import ProductDetailsCart from "../components/core/Product/ProductDetailsCard";
import RatingStars from "../components/common/RatingStars";
import Footer from "../components/common/Footer";
import ConfirmationModal from "../components/common/ConfirmationModal";
import { BuyProduct } from "../services/operations/customerPaymentAPI";
import { addToCart } from "../slices/cartSlice";
const ProductDetails = () => {
  const { user } = useSelector((state) => state.profile);
  const { token } = useSelector((state) => state.auth);
  const { paymentLoading } = useSelector((state) => state.product);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { productId } = useParams();
  const [response, setResponse] = useState(null);
  const [confirmationModal, setConfirmationModal] = useState(null);
  //const [weight, setWeight] = useState(1);
  //const [selectedWeight, setSelectedWeight] = useState(1);

  const [selectedWeight, setSelectedWeight] = useState(1); // Ensure useState is at the top level

  const handleWeight = (weight) => {
    setSelectedWeight(weight); // Update the selected weight
    console.log(`Selected weight: ${weight}kg`);
  };

  const weights = [1, 2, 3, 4, 5];
  useEffect(() => {
    // Calling fetchCourseDetails fucntion to fetch the details
    (async () => {
      try {
        console.log("I am coming here");
        const res = await getProductDetails(productId);
        console.log("Product details res: ", res);
        setResponse(res);
      } catch (error) {
        console.log("Could not fetch Product Details");
      }
    })();
  }, [productId]);

  const [avgReviewCount, setAvgReviewCount] = useState(0);
  useEffect(() => {
    const count = GetAvgRating(response?.data?.courseDetails.ratingAndReviews);
    setAvgReviewCount(count);
  }, [response]);

  console.log("avgReviewCount: ", avgReviewCount);

  if (!response) {
    return (
      <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
        <div className="spinner"></div>
      </div>
    );
  }

  console.log("Printing Response", response);

  const {
    _id: product_id,
    productName,
    description,
    image,
    prize,
    ratingAndReview,
    customerPurchased,
  } = response;

  const handleAddToCart = () => {
    dispatch(addToCart(response));
  };

  const handleBuyProduct = () => {
    console.log("Buying the Product");
    if (token) {
      BuyProduct(token, [productId], user, navigate, dispatch);
      console.log("Bought the Product");
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

  if (paymentLoading) {
    return (
      <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <>
      <div className={`relative w-full `}>
        {/* Hero Section */}
        <div className="w-10/12 mx-auto">
          <div className="mx-auto box-content 2xl:relative  p-2">
            <div className="mx-auto grid min-h-[600px] w-[60%] max-w-maxContentTab   lg:mx-4 lg:justify-items-start lg:py-0 xl:max-w-[810px]">
              <div className="relative block max-h-[30rem] lg:hidden">
                <div className="absolute bottom-0 left-0 h-full w-full shadow-[#161D29_0px_-64px_36px_-28px_inset]"></div>
                <img
                  src={image}
                  alt="Product Image"
                  className="aspect-auto w-full"
                />
              </div>
              <div
                className={`z-30 my-5 flex flex-col justify-center gap-4  text-lg text-richblack-5`}
              >
                <div>
                  <p className="text-xl font-bold text-richblack-900 sm:text-[36px]">
                    {productName}
                  </p>
                </div>
                <p className="text-richblack-900 font-semibold">Description</p>
                <p className={`text-black text-[16px] italic`}>{description}</p>
                <div className="text-md flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-25">
                      {avgReviewCount || 4.5}
                    </span>
                    <RatingStars
                      Review_Count={avgReviewCount || 4.5}
                      Star_Size={24}
                    />
                    <span className="text-black font-semibold">{`${
                      ratingAndReview.length || 19
                    } Reviews`}</span>
                  </div>
                  <span className="text-black font-semibold">{`${
                    customerPurchased.length || 87
                  } Customers Purchased`}</span>
                </div>
              </div>
              <div className="flex flex-col gap-4 items-start">
                <h2 className="text-lg font-semibold">Select Weight</h2>
                <div className="grid grid-cols-5 gap-4">
                  {weights.map((weight) => (
                    <div
                      key={weight}
                      className={`border rounded-md p-3 transition ${
                        selectedWeight === weight
                          ? "bg-blue-100 border-blue-500"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      <button
                        className={`w-full text-sm font-medium ${
                          selectedWeight === weight
                            ? "text-blue-600 font-semibold"
                            : "text-gray-700 hover:text-blue-600"
                        }`}
                        onClick={() => handleWeight(weight)}
                      >
                        {weight}kg
                      </button>
                    </div>
                  ))}
                </div>
                <div className="flex items-center">
                  <p className="text-3xl font-semibold text-richblack-900 ">
                    Rs. {selectedWeight * prize}
                  </p>
                </div>
              </div>

              <div className="flex w-full flex-col gap-4 border-y border-y-richblack-500 py-4 lg:hidden">
                <button className="yellowButton" onClick={handleBuyProduct}>
                  Buy Now
                </button>
                <button onClick={handleAddToCart} className="blackButton">
                  Add to Cart
                </button>
              </div>
            </div>
            {/* Courses Card */}
            <div className="right-[2rem] top-[50px] mx-auto hidden min-h-[600px] w-1/3 max-w-[500px] translate-y-24 md:translate-y-0 lg:absolute  lg:block">
              <ProductDetailsCart
                weight={selectedWeight}
                product={response}
                setConfirmationModal={setConfirmationModal}
                handleBuyProduct={handleBuyProduct}
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>

      {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
    </>
  );
};

export default ProductDetails;
