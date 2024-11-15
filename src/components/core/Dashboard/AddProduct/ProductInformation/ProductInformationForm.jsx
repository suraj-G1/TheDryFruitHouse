import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { HiOutlineCurrencyRupee } from 'react-icons/hi'
import IconBtn from '../../../../common/IconBtn'
import Upload from '../Upload'
import { MdNavigateNext } from 'react-icons/md'
import { setProduct,setStep } from '../../../../../slices/productSlice'
import { addProduct } from '../../../../../services/operations/productDetailsAPI'
//course
const ProductInformationForm = () => {
    const {
        register,
        handleSubmit,
        setValue,
        getValues,
        formState: { errors },
      } = useForm()
    
      const dispatch = useDispatch()
      const { token } = useSelector((state) => state.auth)
      const { product, editProduct } = useSelector((state) => state.product)
      const [loading, setLoading] = useState(false)
    
      const isFormUpdated = () => {
        const currentValues = getValues()
        // console.log("changes after editing form values:", currentValues)
        if (
          currentValues.productTitle !== product.productName ||
          currentValues.productShortDesc !== product.description ||
          currentValues.productPrice !== product.prize ||
          currentValues.productImage !== product.image
        ) {
          return true
        }
        return false
      }
    
       // handle next button click
      const onSubmit = async (data) => {
        // console.log(data)
    
        
          // const currentValues = getValues()
          // console.log("changes after editing form values:", currentValues)
          // console.log("now course:", course)
          // console.log("Has Form Changed:", isFormUpdated())
        const formData = new FormData()
        formData.append("productName", data.productTitle)
        formData.append("description", data.productShortDesc)
        formData.append("prize", data.productPrice)
        
        formData.append("image", data.productImage)
        setLoading(true)
        const result = await addProduct(formData, token)
        if (result) {
          dispatch(setStep(2))
          dispatch(setProduct(result))
        }
        setLoading(false)
      }
    
      return (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-8 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-6"
        >
          {/* Product Name */}
          <div className="flex flex-col space-y-2">
            <label className="text-sm text-richblack-5" htmlFor="productTitle">
              Product Name <sup className="text-pink-200">*</sup>
            </label>
            <input
              id="productTitle"
              placeholder="Enter Course Title"
              {...register("productTitle", { required: true })}
              className="form-style w-full"
            />
            {errors.productTitle && (
              <span className="ml-2 text-xs tracking-wide text-pink-200">
                Product Name is required
              </span>
            )}
          </div>
          {/* Product Short Description */}
          <div className="flex flex-col space-y-2">
            <label className="text-sm text-richblack-5" htmlFor="productShortDesc">
              Product Short Description <sup className="text-pink-200">*</sup>
            </label>
            <textarea
              id="productShortDesc"
              placeholder="Enter Description"
              {...register("productShortDesc", { required: true })}
              className="form-style resize-x-none min-h-[130px] w-full"
            />
            {errors.productShortDesc && (
              <span className="ml-2 text-xs tracking-wide text-pink-200">
                Product Description is required
              </span>
            )}
          </div>
          {/*Product Price */}
          <div className="flex flex-col space-y-2">
            <label className="text-sm text-richblack-5" htmlFor="productPrice">
               Prize <sup className="text-pink-200">*</sup>
            </label>
            <div className="relative">
              <input
                id="productPrice"
                placeholder="Enter Course Price"
                {...register("productPrice", {
                  required: true,
                  valueAsNumber: true,
                  pattern: {
                    value: /^(0|[1-9]\d*)(\.\d+)?$/,
                  },
                })}
                className="form-style w-full !pl-12"
              />
              <HiOutlineCurrencyRupee className="absolute left-3 top-1/2 inline-block -translate-y-1/2 text-2xl text-richblack-400" />
            </div>
            {errors.productPrice && (
              <span className="ml-2 text-xs tracking-wide text-pink-200">
                 Prize is required
              </span>
            )}
          </div>
          
          {/* Product Image */}
          <Upload
            name="productImage"
            label="Product Image"
            register={register}
            setValue={setValue}
            errors={errors}
            editData={product?.image}
          />
          
          {/* Next Button */}
          <div className="flex justify-end gap-x-2">
            {editProduct && (
              <button
                onClick={() => dispatch(setStep(2))}
                disabled={loading}
                className={`flex cursor-pointer items-center gap-x-2 rounded-md bg-richblack-300 py-[8px] px-[20px] font-semibold text-richblack-900`}
              >
                Continue Wihout Saving
              </button>
            )}
            <IconBtn
              disabled={loading}
              text={"Next"}
            >
              <MdNavigateNext />
            </IconBtn>
          </div>
        </form>
      )
}

export default ProductInformationForm