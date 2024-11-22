import React from 'react'
import Logo from '../../assets/Logo/logo.png'
import { Link ,useLocation} from 'react-router-dom'
import { NavbarLinks } from '../../data/Navbar-links'
import { useSelector } from 'react-redux'
import { AiOutlineShoppingCart } from "react-icons/ai";
import ProfileDropDown from '../core/Auth/ProfileDropDown'
import { AiOutlineMenu } from 'react-icons/ai'
const Navbar = () => {
    const {token} = useSelector((state)=>state.auth);
    const {user} = useSelector((state)=>state.profile);
    const {totalItems} = useSelector((state)=>state.cart);
   
    const location = useLocation();
    const handleLogoClick=()=>{
        if(location.pathname === '/'){
            window.scrollTo({top:0, behavior:'smooth'})
        }
    }

    
  return (
    <div className='bg-richblack-5 fixed top-0 left-0 right-0 z-50'>
        <div className='w-11/12 mx-auto flex justify-between items-center pb-2 pt-2'>
            <Link to={'/'} onClick={handleLogoClick}>
                <img src={Logo} width={250} height={250} loading='lazy'/>
            </Link>

            <div className='md:flex gap-8 justify-between items-center fond-bold text-xl hidden'>
                {
                    NavbarLinks.map((link,index)=>(
                        link.title !== 'Category'?
                        (
                    
                                <Link to={link.link} key={index}>
                                    {link.title}
                                </Link>
                    
                        )
                        :
                        (
                        
                                <Link to={link.link} key={index}>
                                    {link.title}
                                </Link>
                    
                        )
                    ))
                }
            </div>

            <div className='flex justify-between items-center gap-6'>
                
                    
                <Link to={'/dashboard/cart'} className='relative'>
                    
                        <AiOutlineShoppingCart  className='h-6 w-6'/> 
                
                    <div>
                        {totalItems > 0 && (
                            <div className='absolute -bottom-2 -right-2 grid h-5 w-5 items-center rounded-full
                             text-yellow-50 bg-richblack-600 text-xs text-center font-bold place-items-center overflow-hidden'>{totalItems}</div>
                        )}
                    </div>
                </Link>

                {token === null && (
                    <Link to='/login'>
                        <button className="rounded-[8px] border border-richblack-500  px-[12px] py-[8px] text-richblack-800">
                            Login
                        </button>
                    </Link>
                )}

                {token === null && (
                    <Link to='/signup'>
                        <button className="rounded-[8px] border border-richblack-500  px-[12px] py-[8px] text-richblack-800">
                            Sign Up
                        </button>
                    </Link>
                )}

                {token !== null && <ProfileDropDown/>}
                    
               
            </div>
            <button className="mr-4 md:hidden">
          <AiOutlineMenu fontSize={24} fill="#AFB2BF" />
        </button>
        </div>
    </div>
  )
}

export default Navbar