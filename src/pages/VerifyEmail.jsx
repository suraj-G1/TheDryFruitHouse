import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import  OTPInput  from "react-otp-input";
import { Link, useNavigate } from "react-router-dom";
import { sentOtp, signup } from "../services/operations/authAPI";
const VerifyEmail = () => {
  const {signupData, loading } = useSelector((state) => state.auth);
  const [otp, setOtp] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(()=>{
    if(!signupData){
        navigate('/signup');
    }
  },[])
  const onSubmitHandler = (e) =>{
    e.preventDefault();
    const{
        accountType,
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
    } = signupData;
    dispatch(signup(accountType,firstName,lastName,email,password,confirmPassword,otp,navigate))
  }
  return (
    <div className="min-h-[calc(100vh-3.5rem)] grid place-items-center">
      {loading ? (
        <div>Loading ....</div>
      ) : (
        <div className="max-w-[500px] p-4 lg:p-8">
          <h1 className="text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]">Verify Email</h1>
          <p className="text-[1.125rem] leading-[1.625rem] my-4 text-richblack-100">A verification code sent to your email.Enter the code below</p>

          <form onSubmit={onSubmitHandler}>
          <OTPInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderInput={(props) => (
                <input
                  {...props}
                  placeholder="-"
                  style={{
                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                  }}
                  className="w-[48px] lg:w-[60px] border-0 bg-richblack-800 rounded-[0.5rem] text-richblack-5 aspect-square text-center focus:border-0 focus:outline-2 focus:outline-yellow-50"
                />
              )}
              containerStyle={{
                justifyContent: "space-between",
                gap: "0 6px",
              }}
            />
            <button type="submit">Verify OTP</button>
          </form>

          <div>
            <div>
              <Link to="/login">
                <p>Back to Login</p>
              </Link>
            </div>

            <button onSubmit={()=>dispatch(sentOtp(signupData.email,navigate))}>
                Resend OTP
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VerifyEmail;
