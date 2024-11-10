import React, { useState } from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { IoMdArrowRoundForward } from "react-icons/io";

const Footer = () => {
    const[email,setEmail] = useState("");
    const handleOnChange=()=>{

    }
  return (
    <div className='bg-richblack-300 px-6'>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-10/12 mx-auto bg-richblack-300'>
            <div className='flex flex-col gap-2'>
                <h2 className='text-xl font-semibold'>Services</h2>
                <ul className='flex flex-col gap-2'>
                    <li className='hover:underline transition-all duration-300'>Shop Now</li>
                    <li className='hover:underline'>Where To Buy</li>
                    <li className='hover:underline'>Subscribe And Save</li>
                    <li className='hover:underline'>Combos</li>
                    <li className='hover:underline'>About Us</li>
                </ul>
            </div>

            <div className='flex flex-col gap-2'>
                <h2 className='text-xl font-semibold'>Information</h2>
                <ul className='flex flex-col gap-2 cursor-pointer'>
                    <li className='hover:underline'>Terms of Policy</li>
                    <li className='hover:underline'>Refund Policy</li>
                    <li className='hover:underline'>Privacy Policy</li>
                    <li className='hover:underline'>Delivery Policy</li>
                    <li className='hover:underline'>Contact Us</li>
                </ul>
            </div>

            <div className='flex flex-col gap-2'>
                <h2 className='text-xl font-semibold'>Subscribe</h2>
                <p>Join our email list to stay updated on offers, recipes and nutritional tips!</p>
                <div className='flex bg-white bg-cover w-[60%] items-center gap-2 relative'>
                    <MdOutlineEmail className='h-full w-full'/>
                    <input
                        placeholder='Enter Email'
                        onChange={handleOnChange}
                        value={email}
                        name='email'

                    />
                    <IoMdArrowRoundForward className='h-full w-full'/>
                    
                    
                </div>
            </div>
        </div>


    </div>
  )
}

export default Footer