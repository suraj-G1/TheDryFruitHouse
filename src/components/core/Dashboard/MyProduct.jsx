import { useEffect, useState } from "react"
import { VscAdd } from "react-icons/vsc"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

//import { fetchInstructorCourses } from "../../../services/operations/courseDetailsAPI"
import { getAllProduct } from "../../../services/operations/productDetailsAPI"
import IconBtn from "../../common/IconBtn"
//import CoursesTable from "./InstructorCourses/CourseTable"

export default function MyProduct() {
  const {token} = useSelector((state) => state.auth)
  const navigate = useNavigate()
  const [product,setProduct] = useState([])

  useEffect(() => {
    const fetchProduct = async () => {
      const result = await getAllProduct(token)
      if (result) {
        setProduct(result)
      }
    }
    fetchProduct()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <div className="mb-14 flex items-center justify-between">
        <h1 className="text-3xl font-medium text-richblack-5">My Products</h1>
        <IconBtn
          text="Add Course"
          onclick={() => navigate("/dashboard/add-product")}
        >
          <VscAdd />
        </IconBtn>
      </div>
      {/* {product && <CoursesTable product={product} setProduct={setProduct} />} */}
    </div>
  )
}
