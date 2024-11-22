import { useEffect, useState } from "react"
import { VscAdd } from "react-icons/vsc"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

//import { fetchInstructorCourses } from "../../../services/operations/courseDetailsAPI"
import { getAllProduct } from "../../../services/operations/productDetailsAPI"
import IconBtn from "../../common/IconBtn"
import ProductTable from "./AdminProduct/ProductTable"
//import CoursesTable from "./InstructorCourses/CourseTable"

export default function MyProduct() {
  const {token} = useSelector((state) => state.auth)
  const navigate = useNavigate()
  const [product,setProduct] = useState(null)

  useEffect(() => {
    const fetchProduct = async () => {
      const result = await getAllProduct(token)
      console.log("Admin Product",result);
      if (result) {
        setProduct(result)
      }
    }
    fetchProduct()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <div className="mb-14 flex items-center p-4 justify-between bg-richblack-700 pt-4 pb-4 rounded-lg">
        <h1 className="text-3xl font-medium text-richblack-5">My Products</h1>
        <IconBtn
          text="Add Product"
          onclick={() => navigate("/dashboard/add-product")}
        >
          <VscAdd />
        </IconBtn>
      </div>
      {product && <ProductTable product={product} setProduct={setProduct} />} 
    </div>
  )
}
