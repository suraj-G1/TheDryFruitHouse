import { useEffect, useState } from "react"
//import ProgressBar from "@ramonak/react-progress-bar"
import { BiDotsVerticalRounded } from "react-icons/bi"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

//import { getUserEnrolledCourses } from "../../../services/operations/profileAPI"
import { getUserPurchasedProduct } from "../../../services/operations/profileAPI"
import { setPaymentLoading } from "../../../slices/productSlice"
export default function PurchasedProduct() {
  const { token } = useSelector((state) => state.auth)
  const navigate = useNavigate()

  const [PurchasedProduct, setPurchasedProduct] = useState(null)

  useEffect(() => {
    ;(async () => {
      try {
        const res = await getUserPurchasedProduct(token); // Getting all the published and the drafted courses

        // Filtering the published course out
        //const filterPublishCourse = res.filter((ele) => ele.status !== "Draft")
        // console.log(
        //   "Viewing all the couse that is Published",
        //   filterPublishCourse
        // )
        setPurchasedProduct(res)
      } catch (error) {
        console.log("Could not fetch enrolled courses.")
      }
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <div className="text-3xl text-richblack-50">Purchased Products</div>
      {!PurchasedProduct ? (
        <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
          <div className="spinner"></div>
        </div>
      ) : !PurchasedProduct.length ? (
        <p className="grid h-[10vh] w-full place-content-center text-richblack-5">
          You have not Purchased any Product yet.
          {/* TODO: Modify this Empty State */}
        </p>
      ) : (
        <div className="my-8 text-richblack-5">
          {/* Headings */}
          <div className="flex rounded-t-lg bg-richblack-500 ">
            <p className="w-[45%] px-5 py-3">Product Name</p>
            
          </div>
          {/* Product Names */}
          {PurchasedProduct.map((product, i, arr) => (
            <div
              className={`flex items-center border border-richblack-700 ${
                i === arr.length - 1 ? "rounded-b-lg" : "rounded-none"
              }`}
              key={i}
            >
              <div
                className="flex w-[45%] cursor-pointer items-center gap-4 px-5 py-3"
              >
                <img
                  src={product.image}
                  alt="Prduct Image"
                  className="h-14 w-14 rounded-lg object-cover"
                />
                <div className="flex max-w-xs flex-col gap-2">
                  <p className="font-semibold">{product.productName}</p>
                  <p className="text-xs text-richblack-300">
                    {product.description.length > 50
                      ? `${product.description.slice(0, 50)}...`
                      : product.description}
                  </p>
                </div>
              </div>
              
            </div>
          ))}
        </div>
      )}
    </>
  )
}
