import React from 'react'
import { useSelector } from 'react-redux'
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';

const Template = ({header,subHeader,description,image,formType}) => {
    const {loading} = useSelector((state)=>state.auth);
  return (
    <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center bg-richblack-25">
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <div className="mx-auto flex w-10/12 max-w-maxContent flex-col-reverse justify-between gap-y-12 py-12 md:flex-row md:gap-y-0 md:gap-x-12">
          <div className="mx-auto w-10/12 max-w-[450px] md:mx-0">
            <h1 className="text-[1.875rem] font-bold leading-[2.375rem] text-richblack-500">
              {header}
            </h1>
            <p className="mt-4 text-[1.125rem] leading-[1.625rem] flex flex-col">
              <span className="text-richblack-200">{subHeader}</span>{" "}
              <span className="font-edu-sa font-bold italic text-richblack-300">
                {description}
              </span>
            </p>
            {formType === "signup" ? <SignupForm /> : <LoginForm />}
          </div>
          <div className="relative mx-auto w-10/12 max-w-[450px] md:mx-0 max-h-screen">
            <img
              src={image}
              alt="Pattern"
              width={558}
              height={504}
              loading="lazy"
            />
            
          </div>
        </div>
      )}
    </div>
  )
}

export default Template