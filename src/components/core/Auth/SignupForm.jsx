import React, { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {sentOtp} from "../../../services/operations/authAPI";
const SignupForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { firstName, lastName, email, password, confirmPassword } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData)=>({
        ...prevData,
        [e.target.name] : e.target.value
    }))
  };
  const handleOnSubmit=(e)=>{
    e.preventDefault();
    //dispatch(login(email,password,navigate))
    dispatch(sentOtp(email,navigate));
  };
  return (
    <form onSubmit={handleOnSubmit} className="flex w-full flex-col gap-y-4">
      <div className="flex gap-x-4 justify-between">
        <label>
          <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">First Name</p>

          <input
            required
            placeholder="Enter First Name"
            value={firstName}
            name="firstName"
            type="text"
            onChange={handleOnChange}
            className="form-style w-full p-2 bg-gray-800 text-white placeholder-gray-400 border
           border-gray-600 rounded-lg shadow-sm transition duration-200
           focus:border-pink-500 focus:ring-2 focus:ring-richblack-700 focus:outline-none hover:bg-gray-700"
          />
        </label>

        <label>
          <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
            Last Name <sup className="text-pink-200">*</sup>
          </p>

          <input
            required
            placeholder="Enter Last Name"
            value={lastName}
            name="lastName"
            type="text"
            onChange={handleOnChange}
            className="form-style w-full p-2 bg-gray-800 text-white placeholder-gray-400 border
           border-gray-600 rounded-lg shadow-sm transition duration-200
           focus:border-pink-500 focus:ring-2 focus:ring-richblack-700 focus:outline-none hover:bg-gray-700"
          />
        </label>
      </div>

      <div>
      <label >
        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">Email Address<sup className="text-pink-200">*</sup></p>
        <input
            required
            placeholder="Enter Email Address"
            type="text"
            value={email}
            name="email"
            onChange={handleOnChange}
            className="form-style w-full p-2 bg-gray-800 text-white placeholder-gray-400 border
           border-gray-600 rounded-lg shadow-sm transition duration-200
           focus:border-pink-500 focus:ring-2 focus:ring-richblack-700 focus:outline-none hover:bg-gray-700"
        />
      </label>
      </div>

      <div className="flex gap-x-4 justify-between">
        <label className="relative">
          <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
            Create Password
            <sup className="text-pink-200">*</sup>
          </p>
          <input
              placeholder="Enter Password"
              required
              value={password}
              name="password"
              type={showPassword?"text":"password"}
              onChange={handleOnChange}
              className="form-style w-full p-2 bg-gray-800 text-white placeholder-gray-400 border
           border-gray-600 rounded-lg shadow-sm transition duration-200
           focus:border-pink-500 focus:ring-2 focus:ring-richblack-700 focus:outline-none hover:bg-gray-700"
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
        </label>

        <label className="relative">
          <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">Confirm Password <sup className="text-pink-200">*</sup></p>
          <input
              placeholder="Confirm password"
              required
              value={confirmPassword}
              name="confirmPassword"
              type={showConfirmPassword?"text":"password"}
              onChange={handleOnChange}
              className="form-style w-full p-2 bg-gray-800 text-white placeholder-gray-400 border
           border-gray-600 rounded-lg shadow-sm transition duration-200
           focus:border-pink-500 focus:ring-2 focus:ring-richblack-700 focus:outline-none hover:bg-gray-700"
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

          

        </label>
      </div>

      <button type="submit" className="mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900">
        Create Account
      </button>


    </form>
  );
};

export default SignupForm;
