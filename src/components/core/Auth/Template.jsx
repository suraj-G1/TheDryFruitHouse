import React from "react";
import { useSelector } from "react-redux";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import frameImg from "../../../assets/Images/frame.png";
const Template = ({ header, subHeader, description, image, formType }) => {
  const { loading } = useSelector((state) => state.auth);
  return (
    <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center bg-white px-4 mt-[50px] border shadow-2xl">
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <div className="mx-auto flex w-9/12 max-w-maxContent flex-col-reverse justify-between gap-y-8 py-12 md:flex-row md:gap-y-0 md:gap-x-12">
          <div className="mx-auto w-9/12 max-w-[450px] md:mx-0">
            <h1 className="text-[1.875rem] font-bold leading-[2.375rem] text-richblack-700">
              {header}
            </h1>
            <p className="mt-4 text-[1.125rem] leading-[1.625rem] flex flex-col">
              <span className="text-richblack-500 font-semibold">{subHeader}</span>{" "}
              <span className="font-edu-sa font-bold italic text-richblack-600">
                {description}
              </span>
            </p>
            {formType === "signup" ? <SignupForm /> : <LoginForm />}
          </div>
          <div className="mt-4 rounded-xl relative mx-auto w-10/12 max-w-[450px] max-h-[420px] md:mx-0 overflow-hidden">
            <img
              src={frameImg}
              alt="Pattern"
              width={558}
              height={504}
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <img
              src={image}
              alt="Students"
              width={558}
              height={504}
              loading="lazy"
              className=" w-full h-full absolute bottom-4 z-10 right-4"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Template;
