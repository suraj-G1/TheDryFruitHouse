import React, { useState } from "react";
const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobileNo: "",
    email: "",
    subject: "",
    message: "",
  });

  const { name, mobileNo, email, subject, message } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };


  const handleOnSubmit=()=>{
    setFormData((prevData)=>({
    }))
  }
  return (
    <form className="flex flex-col gap-6 pl-6 pr-6 pt-4 w-full" onSubmit={handleOnSubmit}>
      <div className="flex gap-4 w-full">
        <label className="flex flex-col gap-2 w-full">
          <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-black">
            Name
          </p>
          <input
            required
            placeholder="Your Name"
            value={name}
            name="name"
            type="text"
            onChange={handleOnChange}
            className=" w-full p-2 text-white border-[1px] border-richblack-800
            rounded-lg shadow-sm transition duration-200"
          />
        </label>
        <label className="flex flex-col gap-2 w-full">
          <p className="mb-1 text-[0.875rem] leading-[1.375rem text-black">
            Mobile No
          </p>

          <input
            required
            placeholder="Mobile No"
            value={mobileNo}
            name="mobileNo"
            type="text"
            onChange={handleOnChange}
            className=" w-full p-2 text-white placeholder-gray-400 border-[1px]
           border-richblack-800 rounded-lg shadow-sm transition duration-200"
          />
        </label>
      </div>

      <div className="flex w-full gap-4">
        <label className="flex flex-col gap-2 w-full">
          <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-black">
            Email
          </p>

          <input
            required
            placeholder="Your Email"
            value={email}
            name="email"
            type="text"
            onChange={handleOnChange}
            className=" w-full p-2 text-white placeholder-gray-400 border-[1px]
           border-richblack-800 rounded-lg shadow-sm transition duration-200"
          />
        </label>
        <label className="flex flex-col gap-2 w-full">
          <p className="mb-1 text-[0.875rem] leading-[1.375rem text-black">
            Subject
          </p>

          <input
            required
            placeholder="Subject"
            value={subject}
            name="subject"
            type="text"
            onChange={handleOnChange}
            className=" w-full p-2 text-white placeholder-gray-400 border-[1px]
           border-richblack-800 rounded-lg shadow-sm transition duration-200"
          />
        </label>
      </div>
      <div className="flex w-full gap-4">
        <label className="flex flex-col gap-4 w-full">
          <p>Sent Message</p>
          <textarea
            placeholder="Your Message"
            value={message}
            name="message"
            onChange={handleOnChange}
            className="border-richblack-800 p-2 border-[1px] w-full h-[150px] text-black rounded-md"
          ></textarea>
        </label>
      </div>
      <button type="submit" className=" text-center yellowButton">Send Now</button>
    </form>
  );
};

export default ContactUsForm;
