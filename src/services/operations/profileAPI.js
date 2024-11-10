import { setLoading } from "../../slices/authSlice";
import { profileEndpoints } from "../api";
import {toast} from 'react-hot-toast';
import { apiConnector } from "../apiConnector";
const {
    GET_SELLER_DATA_API,
    GET_USER_BOUGHT_PRODUCT_API,
    GET_USER_DETAILS_API,
    
} = profileEndpoints;

export async function getUserDetails(token,navigate){
    return async(dispatch)=>{
        const toastId = toast.loading("Loading");
        dispatch(setLoading(true));
        try{
            const response = await apiConnector("GET",GET_USER_DETAILS_API,null,{
                Authorization:`Bearer ${token}`
            })
    
            console.log("GET_USER_DETAILS API RESPONSE............", response)
    
            if (!response.data.success) {
                throw new Error(response.data.message)
            }
            const userImage = response.data.data.image
                ? response.data.data.image
                : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.data.firstName} ${response.data.data.lastName}`
            dispatch(setUser({ ...response.data.data, image: userImage }))
        }catch(error){
            dispatch(logout(navigate))
            console.log("GET_USER_DETAILS API ERROR............", error)
            toast.error("Could Not Get User Details")
        }
        toast.dismiss(toastId)
        dispatch(setLoading(false))
        

    }
}

export async function getUserPurchasedProduct(token,navigate){
    const toastId = toast.loading("Loading...")
  let result = []
  try {
    console.log("BEFORE Calling BACKEND API FOR PURCHASED PRODUCT");
    const response = await apiConnector(
      "GET",
      GET_USER_BOUGHT_PRODUCT_API,
      null,
      {
        Authorization: `Bearer ${token}`,
      }
    )
    console.log("AFTER Calling BACKEND API FOR PURCHASED PRODUCT");


    if (!response.data.success) {
      throw new Error(response.data.message)
    }
    result = response.data.data
  } catch (error) {
    console.log("GET_USER_BOUGHT_PRODUCT_API API ERROR............", error)
    toast.error("Could Not Get PURCHASED PRODUCT")
  }
  toast.dismiss(toastId)
  return result
}

export async function getSellerData(token){
    const toastId = toast.loading("Loading...");

  let result = [];
  try{

    const response = await apiConnector("GET",GET_SELLER_DATA_API,null,{Authorization:`Bearer ${token}`,});
    console.log("GET_SELLER_DATA_API response",response);
    result = response?.data?.courses;

  }catch(error){
    console.log("GET_SELLER Data error",error);
    toast.error("Could not fetch SELLER Data");
  }

  toast.dismiss(toastId);
  return result;
}
