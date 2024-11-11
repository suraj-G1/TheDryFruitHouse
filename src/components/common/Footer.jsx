import React, { useState } from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { IoMdArrowRoundForward } from "react-icons/io";

const Footer = () => {
    const[email,setEmail] = useState("");
    const handleOnChange=(e)=>{
        e.preventDefault();
        setEmail(e.target.value);
    }
  return (
    <div className='bg-richblack-300 p-6 w-full mx-auto flex flex-col gap-6'>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-10/12 mx-auto  pt-6 px-6 pb-6'>
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
                <div className='flex bg-white w-[75%] bg-cover justify-start items-center gap-1 relative'>
                    <MdOutlineEmail className='w-1/3'/>
                    <input
                        placeholder='Enter Email'
                        onChange={handleOnChange}
                        value={email}
                        name='email'
                        className='border-none outline-none'
                    />
                    <IoMdArrowRoundForward className='w-1/3'/>
                    
                    
                </div>
            </div> 
            

        </div>
        <div className='h-[1px] bg-richblack-600 w-full'>

        </div>
        <div className="text-center">Made with Love ❤️ by Suraj Gund </div>

        


    </div>
  )
}

export default Footer