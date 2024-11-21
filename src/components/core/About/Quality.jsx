import React from 'react'
import { MdVerifiedUser } from "react-icons/md";
import { LiaShippingFastSolid } from "react-icons/lia";
import { TbTruckReturn } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";

const Quality = () => {
  return (
    <div className='flex justify-between w-11/12 mx-auto bg-richblack-5  p-8 mt-8 mb-8 border border-richblack-25 rounded-lg shadow-2xl'>
        <div className='flex items-center gap-4'>
            <MdVerifiedUser className='h-[35px] w-[35px]'/>  
            <div className='flex flex-col'>
                <h3 className='text-xl font-semibold'>Premium Quality</h3>
                <p>100% Quality Guarantee</p>
            </div>
        </div>
        <div className='w-[1px] bg-richblack-100'></div>
        <div className='flex items-center gap-4'>
            <LiaShippingFastSolid className='h-[35px] w-[35px]'/>
            <div>
                <h3 className='text-xl font-semibold'>Free Shipping</h3>
                <p>On Orders Above Rs. 2999</p>
            </div>
        </div>

        <div className='w-[1px] bg-richblack-100'></div>

        <div className='flex items-center gap-4'>
            <TbTruckReturn className='h-[35px] w-[35px]'/>  
            <div className='flex flex-col'>
                <h3 className='text-xl font-semibold'>Easy Return</h3>
                <p>Refer return policy</p>
            </div>
        </div>

        <div className='w-[1px] bg-richblack-100'></div>
        <div className='flex items-center gap-4'>
            <BiSupport className='h-[35px] w-[35px]'/>  
            <div className='flex flex-col'>
                <h3 className='text-xl font-semibold'>24/7 Support</h3>
                <p>Support every time</p>
            </div>
        </div>
    </div>
  )
}

export default Quality