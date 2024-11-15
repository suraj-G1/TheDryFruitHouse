import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { getAllProduct } from "../../../services/operations/productDetailsAPI"
//import { fetchInstructorCourses } from "../../../services/operations/courseDetailsAPI"
//import { getInstructorData } from "../../../services/operations/profileAPI"
//import InstructorChart from "./InstructorDashboard/InstructorChart"
import AdminChart from "./AdminDashboard/AdminChart"
import { getUserDetails } from "../../../services/operations/profileAPI"
export default function Admin() {
  const { token } = useSelector((state) => state.auth)
  const { user } = useSelector((state) => state.profile)
  const [loading, setLoading] = useState(false)
  const [adminData, setAdminData] = useState(null)
  const [products, setProduct] = useState([])

  useEffect(() => {
    ;(async () => {
      setLoading(true)
      const adminApiData = await getUserDetails(token)
      const result = await getAllProduct(token)
      console.log(adminApiData)
      if (adminApiData.length) setAdminData(adminApiData)
      if (result) {
        setProduct(result)
      }
      setLoading(false)
    })()
  }, [])

      useEffect(()=>{
        let result = null;
        const getAllProducts = async()=>{
            result = await getAllProduct();
            setProduct(result);
        };
        getAllProducts();

      },[])

   const totalAmount = 0
//adminData?.reduce(
//     (acc, curr) => acc + curr.totalAmountGenerated,
//     0
//   ) || 0

  const totalCustomer = 0
//   adminData?.reduce(
//     (acc, curr) => acc + curr.totalCustomerPurchased,
//     0
//   ) || 0

  return (
    
    <div>
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-richblack-5">
          Hi {user?.firstName} 👋
        </h1>
        <p className="font-medium text-richblack-200">
          Let's start something new
        </p>
      </div>
      {loading ? (
        <div className="spinner"></div>
      ) : products.length > 0 ? (
        <div>
          <div className="my-4 flex h-[450px] space-x-4">
            {/* Render chart / graph */}
            {totalAmount > 0 || totalCustomer > 0 ? (
              <AdminChart products={adminData} />
            ) : (
              <div className="flex-1 rounded-md bg-richblack-800 p-6">
                <p className="text-lg font-bold text-richblack-5">Visualize</p>
                <p className="mt-4 text-xl font-medium text-richblack-50">
                  Not Enough Data To Visualize
                </p>
              </div>
            )}
            {/* Total Statistics */}
            <div className="flex min-w-[250px] flex-col rounded-md bg-richblack-800 p-6">
              <p className="text-lg font-bold text-richblack-5">Statistics</p>
              <div className="mt-4 space-y-4">
                <div>
                  <p className="text-lg text-richblack-200">Total Product</p>
                  <p className="text-3xl font-semibold text-richblack-50">
                    {products.length}
                  </p>
                </div>
                <div>
                  <p className="text-lg text-richblack-200">Total Customer</p>
                  <p className="text-3xl font-semibold text-richblack-50">
                    {totalCustomer}
                  </p>
                </div>
                <div>
                  <p className="text-lg text-richblack-200">Total Income</p>
                  <p className="text-3xl font-semibold text-richblack-50">
                    Rs. {totalAmount}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-md bg-richblack-800 p-6">
            
            <div className="flex items-center justify-between">
              <p className="text-lg font-bold text-richblack-5">Your Product</p>
              <Link to="/dashboard/my-products">
                <p className="text-xs font-semibold text-yellow-50">View All</p>
              </Link>
            </div>
            <div className="my-4 flex items-start space-x-6">
              {products.slice(0, 3).map((product) => (
                <div key={product._id} className="w-1/3">
                  <img
                    src={product.image}
                    alt={product.productName}
                    className="h-[201px] w-full rounded-md object-cover"
                  />
                  <div className="mt-3 w-full">
                    <p className="text-sm font-medium text-richblack-50">
                      {product.productName}
                    </p>
                    <div className="mt-1 flex items-center space-x-2">
                      <p className="text-xs font-medium text-richblack-300">
                        {product.customerPurchased.length} Happy Customers
                      </p>
                      <p className="text-xs font-medium text-richblack-300">
                        |
                      </p>
                      <p className="text-xs font-medium text-richblack-300">
                        Rs. {product.prize}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-20 rounded-md bg-richblack-800 p-6 py-20">
          <p className="text-center text-2xl font-bold text-richblack-5">
            You have Added any Product Yet
          </p>
          <Link to="/dashboard/add-product">
            <p className="mt-1 text-center text-lg font-semibold text-yellow-50">
              Add a Product
            </p>
          </Link>
        </div>
      )}
    </div>
    // </Link>
  )
}
