import React from "react";
import contact from "../assets/Images/Contact.png";
import { MdOutlineEmail } from "react-icons/md";
import { RiHomeOfficeFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { MdAddCall } from "react-icons/md";
import Footer from "../components/common/Footer";
import ContactUsForm from "../components/core/Contact/ContactUsForm";
const ContactUs = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="w-full">
        <img src={contact} className="w-full" />
      </div>
      <div className="w-10/12 mx-auto">
        <div className="flex flex-col gap-4 mb-8 mt-8">
          <h1 className="text-4xl font-semibold">Get in Touch</h1>
          <div className="flex flex-col gap-2">
            <p>
              We are here to help our customers all over world. We would be
              happy to assist you.
            </p>
            <p>
              So let us know what are your queries or what you are looking for,
              we will get back to you shortly
            </p>
          </div>
        </div>

        <div className="flex w-full gap-6">
          <div className="bg-[#520608] text-white p-12 rounded-lg w-[40%] flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-semibold">Contact Us</h2>
              <div className="flex justify-start items-center gap-6">
                <MdAddCall className="w-[35px] h-[40px]" />
                <div className="flex flex-col">
                  <p>Reach us on call/whatsapp</p>
                  <p>+91-1234567890</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
                <h2 className="text-2xl font-semibold">Email Address</h2>
                <div className="flex items-center gap-6">
                    <MdOutlineEmail className="w-[35px] h-[40px]" />
                    <p>surajgund46@gmail.com</p>
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <h2 className="text-2xl font-semibold">Office Location</h2>
                <div className="flex items-center gap-6">
                    <RiHomeOfficeFill className="w-[60px] h-[45px]" />
                    <p>
                        NR Tower, 17th Cross, Sector 4, 19th Main Road, HSR Layout, Pandharpur, Maharashtra 413253
                    </p>
                </div>
            </div>

            <div className="flex flex-col">
                <h2 className="text-2xl font-semibold">Follow Us</h2>
                <div className='flex gap-4'>
                    <FaFacebook className='h-[38px] w-[28px]'/>
                    <FaSquareInstagram className='h-[38px] w-[28px]'/>
                    <FaSquareXTwitter className='h-[38px] w-[28px]'/>
                    <FaLinkedin className='h-[38px] w-[28px]'/>
                </div>

            </div>
          </div>
          <div className="w-[50%] shadow-2xl p-2">
            <ContactUsForm/>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ContactUs;
