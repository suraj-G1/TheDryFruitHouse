import React, { useState } from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { IoMdArrowRoundForward } from "react-icons/io";
import Logo from '../../assets/Logo/logo.png'
import { FaFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
    const[email,setEmail] = useState("");
    const handleOnChange=(e)=>{
        e.preventDefault();
        setEmail(e.target.value);
    }
  return (
    <div className='bg-pure-greys-100 pt-10 p-6 w-full mx-auto flex flex-col gap-6 text-black'>
        <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mx-auto  pt-6 px-6 pb-6 gap-6'>
             
            <div className='flex flex-col gap-4 max-w-[90%]'>
                <img src={Logo} height={250} width={250}/>
                <p className=' font-medium'>
                Dry Fruit House brings you a collection of carefully selected foods from India and across the world.
                </p>

                <div className='flex gap-4 w-[90%]'>
                    <FaFacebook className='h-[40px] w-full'/>
                    <FaSquareInstagram className='h-[40px] w-full'/>
                    <FaSquareXTwitter className='h-[40px] w-full'/>
                    <FaLinkedin className='h-[40px] w-full'/>
                </div>
            </div>

            <div className='flex flex-col gap-4 w-full'>
                <h2 className='text-xl font-semibold'>Services</h2>
                <ul className='flex flex-col gap-4'>
                    <li className='hover:underline transition-all duration-300'>Shop Now</li>
                    <li className='hover:underline'>Where To Buy</li>
                    <li className='hover:underline'>Subscribe And Save</li>
                    <li className='hover:underline'>Combos</li>
                    <li className='hover:underline'>About Us</li>
                </ul>
            </div> 

            <div className='flex flex-col gap-4'>
                <h2 className='text-xl font-semibold'>Information</h2>
                <ul className='flex flex-col gap-4 cursor-pointer'>
                    <li className='hover:underline'>Terms of Policy</li>
                    <li className='hover:underline'>Refund Policy</li>
                    <li className='hover:underline'>Privacy Policy</li>
                    <li className='hover:underline'>Delivery Policy</li>
                    <li className='hover:underline'>Contact Us</li>
                </ul>
            </div>

            <div className='flex flex-col gap-4'>
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