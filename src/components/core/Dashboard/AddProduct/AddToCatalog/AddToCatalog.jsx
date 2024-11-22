import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setStep } from "../../../../../slices/productSlice"
import IconBtn from "../../../../common/IconBtn"
import { resetProductState } from "../../../../../slices/productSlice"

export default function AddToCatalog() {
  const { register, handleSubmit, setValue, getValues } = useForm()

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { token } = useSelector((state) => state.auth)
  const { product } = useSelector((state) => state.product)
  const [loading, setLoading] = useState(false)



  const goBack = () => {
    dispatch(setStep(2))
  }

  const goToProduct = () => {
    dispatch(resetProductState())
    navigate("/dashboard/my-products")
  }

  const handleProductPublish = async () => {
  
    const formData = new FormData()
    formData.append("productId", product._id)
    
    setLoading(true)
    goToProduct()
    setLoading(false)
  }

  const onSubmit = (data) => {
    handleProductPublish()
  }

  if(loading){
    return <div className="spinner"></div>
  }

  return (
    <div className="rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-6">
      <p className="text-2xl font-semibold text-richblack-5">
        Publish Settings
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Checkbox */}
        <div className="my-6 mb-8">
          <label htmlFor="public" className="inline-flex items-center text-lg">
            <input
              type="checkbox"
              id="public"
              {...register("public")}
              className="border-gray-300 h-4 w-4 rounded bg-richblack-500 text-richblack-400 focus:ring-2 focus:ring-richblack-5"
            />
            <span className="ml-2 text-richblack-400">
              Add To Catalog
            </span>
          </label>
        </div>

        {/* Next Prev Button */}
        <div className="ml-auto flex max-w-max items-center gap-x-4">
          <button
            disabled={loading}
            type="button"
            onClick={goBack}
            className="flex cursor-pointer items-center gap-x-2 rounded-md bg-richblack-300 py-[8px] px-[20px] font-semibold text-richblack-900"
          >
            Back
          </button>
          <IconBtn disabled={loading} text="Save Changes" />
        </div>
      </form>
    </div>
  )
}
