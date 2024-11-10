import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
//import { useState } from "react";
import { login } from "../../../services/operations/authAPI";
const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });


  const { email, password } = formData;
  const [showPassword, setShowPassword] = useState(false);
  const handleOnChange = (e) => {
    setFormData((prevData)=>({
        ...prevData,
        [e.target.name] : e.target.value
    }))
  };


  const handleOnSubmit=(e)=>{
    e.preventDefault();
    //dispatch(login(email,password,navigate))
    dispatch(login(email,password,navigate));
  };
  return (
    <form onSubmit={handleOnSubmit} 
    className="mt-6 flex w-full flex-col gap-y-4">
      <label className="w-full">
        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
            Email Address 
            <sup className="text-pink-200">*</sup>
        </p>
        <input
          required
          value={email}
          placeholder="Enter Email Address"
          type="text"
          name="email"
          onChange={handleOnChange}
          className="form-style w-full text-black"
        />
      </label>

      <label className="relative">
        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">Password <sup className="text-pink-200">*</sup></p>
        <input
          required
          value={password}
          placeholder="Enter The Password"
          name="password"
          type={showPassword ? "text" : "password"}
          onChange={handleOnChange}
          className="form-style w-full text-black"
        />

        <span
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-3 top-[38px] z-[10] cursor-pointer"
        >
          {showPassword ? (
            <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
          ) : (
            <AiOutlineEye fontSize={24} fill="#AFB2BF" />
          )}
        </span>
        <Link to="/forgot-password">
          <p className="mt-1 ml-auto max-w-max text-xs text-blue-100">
            Forgot Password
          </p>
        </Link>
      </label>
      <button
        type="submit"
        className="mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900"
      >
        Sign In
      </button>
    </form>
  );
};

export default LoginForm;
