import './App.css';
import Navbar from './components/common/Navbar';
import Home from './pages/Home';
import { Route,Routes } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import MyProfile from './pages/MyProfile'
import OpenRoute from './components/core/Auth/OpenRoute';
import ForgotPassword from './pages/ForgotPassword';
import VerifyEmail from './pages/VerifyEmail';
import UpdatePassword from './pages/UpdatePassword';
import CartItem from './components/core/Cart/cart';
import ProductDetails from './pages/ProductDetails'
function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        
        <Route path='signup' element={<Signup/>}></Route>
        <Route path='/dashboard//my-profile' element={<MyProfile/>}/>

        <Route path="product/:productId" element={<ProductDetails/>} />

        <Route path='login' element={
          <OpenRoute>
            <Login/>
          </OpenRoute>
        }></Route>

        <Route path='/dashboard/cart' element={<CartItem/>}>

        </Route>

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
      </Routes>
    </div>
  );
}

export default App;
