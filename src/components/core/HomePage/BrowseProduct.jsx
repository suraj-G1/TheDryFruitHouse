import React, { useEffect, useState } from 'react'
import { getAllProduct } from '../../../services/operations/productDetailsAPI';
import { Link ,matchPath,useLocation} from 'react-router-dom';
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

    
    <div>
       {
           !products?
           (
              <div>
                <h2>No Products Available</h2>
              </div>
            )
            :
            (
              <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1'>
                {
                  products.map((product,index)=>{
                    return (
                      <Link key={index}>
                          <ProductCard product = {product}/>
                      </Link>
                  )
                  })
                }
              </div>
            )
       }
    </div>
  )
}

export default BrowseProduct