import React, { useEffect, useState } from 'react'
import { getAllProduct } from '../../../services/operations/productDetailsAPI';
import { matchPath,useLocation} from 'react-router-dom';
import ProductCard from './ProductCard';
const BrowseProduct = () => {
  const[products,setProducts] = useState([]);
  const location = useLocation();
    //console.log("Browse Products");
    useEffect(()=>{
        let result=[];
        const getAllProducts = async()=>{
          result = await getAllProduct();
          console.log("REsults",result);
          setProducts(result);
        }
        
        getAllProducts();
      },[]);
    const matchRoute = (route) => {
      return matchPath({ path: route }, location.pathname)
    }
  return (

    
    <div className='w-full px-6 mx-auto mt-8'>
       {
           !products?
           (
              <div>
                <h2>No Products Available</h2>
              </div>
            )
            :
            (
              <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6'>
                {
                  products.map((product,index)=>(
            
                    <ProductCard key={index} product = {product} Height={"h-[200px]"}/>
                  
                  ))
                }
              </div>
            )
       }
    </div>
  )
}

export default BrowseProduct