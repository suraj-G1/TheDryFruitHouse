import "./App.css";
import Navbar from "./components/common/Navbar";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
//import MyProfile from './pages/MyProfile'
import OpenRoute from "./components/core/Auth/OpenRoute";
import ForgotPassword from "./pages/ForgotPassword";
import VerifyEmail from "./pages/VerifyEmail";
import UpdatePassword from "./pages/UpdatePassword";
import CartItem from "./components/core/Cart/cart";
import ProductDetails from "./pages/ProductDetails";
import MyProfile from "./components/core/Dashboard/MyProfile";
import PrivateRoute from "./components/core/Auth/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import Settings from "./components/core/Dashboard/Settings";
import { useSelector } from "react-redux";
import Admin from "./components/core/Dashboard/Admin";
import PurchasedProduct from "./components/core/Dashboard/PurchasedProduct";
import { ADMIN_EMAIL } from "./utils/constants";
import MyProduct from "./components/core/Dashboard/MyProduct";
import AddProduct from "./components/core/Dashboard/AddProduct";
import ProductReviewModal from "./pages/ProductReviewModal";
import { RiContactsBook2Fill } from "react-icons/ri";
import ContactUs from "./pages/ContactUs";
function App() {
  const { user } = useSelector((state) => state.profile);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="signup" element={<Signup />}></Route>

        <Route path="products/:productId" element={<ProductDetails />} />

        <Route
          path="login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        ></Route>

        <Route path="/dashboard/cart" element={<CartItem />}></Route>

        <Route
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        ></Route>

        <Route path="products/productId" element={<ProductDetails />} />
        {/* <Route path="dashboard/my-profile" element={<MyProfile />} /> */}

        <Route
          path="forgot-password"
          element={
            <OpenRoute>
              <ForgotPassword />
            </OpenRoute>
          }
        />
        <Route
          path="update-password/:id"
          element={
            <OpenRoute>
              <UpdatePassword />
            </OpenRoute>
          }
        />
        <Route
          path="signup"
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          }
        />
        <Route
          path="verify-email"
          element={
            <OpenRoute>
              <VerifyEmail />
            </OpenRoute>
          }
        />
        {/* <Route 
          path='/dashboard'
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
          <Route path="dashboard/my-profile" element={<MyProfile />} />
          <Route path="dashboard/settings" element={<Settings />} />

          {
             user && user.email === process.env.ADMIN_EMAIL && (
              <Route path='dashboard/admin' element={<Admin/>}/>
             )
          }
          {
            user && user.email !== process.env.ADMIN_EMAIL && (
              <Route
              path='dashboard/purchased-products'
              element={<PurchasedProduct/>}
          />
            )
          } */}

        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard /> {/* This component contains Sidebar and Outlet */}
            </PrivateRoute>
          }
        >
          {/* Nested routes under /dashboard */}
          <Route path="my-profile" element={<MyProfile />} />
          <Route path="settings" element={<Settings />} />

          {/* Conditionally render admin or user-specific routes */}
          {user && user.email === ADMIN_EMAIL && (
            <Route path="admin" element={<Admin />} />
          )}

          {user && user.email === ADMIN_EMAIL && (
            <Route path="add-product" element={<AddProduct />} />
          )}
          {user && user.email === ADMIN_EMAIL && (
            <Route path="my-products" element={<MyProduct />} />
          )}
          <Route path="purchased-products" element={<PurchasedProduct />} />

          {/* <Route path='/add-review' element={<ProductReviewModal/>}/> */}
        </Route>

        <Route path="contact" element={<ContactUs/>}/>
      </Routes>
    </div>
  );
}

export default App;
