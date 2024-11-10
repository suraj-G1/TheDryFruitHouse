import { productEndpoints } from "../api";
import {toast} from 'react-hot-toast'
import { apiConnector } from "../apiConnector";
const {
    GET_ALL_PRODUCT_API,
    PRODUCT_DETAILS_API,
    ADD_PRODUCT_API,
    CREATE_RATING_API,
    DELETE_PRODUCT_API
} = productEndpoints;

export const getAllProduct = async()=>{
    const toastId = toast.loading("Loading");
    let result = [];
    try{
        const response = await apiConnector("GET",GET_ALL_PRODUCT_API);
        //console.log("respnse",response?.data?.data);
        if(!response?.data?.success){
            throw new Error("Could Not Fetch Course Categories")
        }
        //console.log("Get All Product",response?.data?.data?.data);
        result = response?.data?.data;
    }catch(error){
        console.log("GET_ALL_COURSE_API API ERROR............", error)
        toast.error(error.message)
    }
    toast.dismiss(toastId);
    console.log(result);
    return result;
}

export const addProduct = async(data,token)=>{
    let result = null;
    const toastId = toast.loading("Loading...");
    try{
        const response = await apiConnector("POST",ADD_PRODUCT_API,data,{
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
        });
        console.log("ADD Product API RESPONSE............", response)
        if (!response?.data?.success) {
            throw new Error("Could Not Add Course Details")
        }
        toast.success("Course Details Added Successfully")
        result = response?.data?.data
    
    }catch(error){
        console.log("CREATE COURSE API ERROR............", error)
        toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result
}

export const deleteProduct = async(data,token)=>{
    const toastId = toast.loading("Loading");
    try{
        const response = await apiConnector("DELETE",DELETE_PRODUCT_API,data,{
            Authorization: `Bearer ${token}`,
        })
        console.log("DELETE COURSE API RESPONSE............", response)
        if (!response?.data?.success) {
            throw new Error("Could Not Delete Course")
        }
        toast.success("Course Deleted")
    }catch(error){
        console.log("DELETE COURSE API ERROR............", error)
        toast.error(error.message)
    }

    toast.dismiss(toastId)
}

export const getProductDetails = async(productId,token)=>{
    const toastId = toast.loading("Loading");
    let result =null;
    try{
        const response = apiConnector("GET",PRODUCT_DETAILS_API,{productId},{Authorization:`Bearer ${token}`})
        console.log("COURSE_FULL_DETAILS_API API RESPONSE............", response)

        if (!response.data.success) {
            throw new Error(response.data.message)
        }
        result = response?.data?.data
    }catch(error){
        console.log("COURSE_FULL_DETAILS_API API ERROR............", error)
        result = error.response.data
    }
    toast.dismiss(toastId);
    return result;
}

// create a rating for product
export const createRating = async (data, token) => {
    const toastId = toast.loading("Loading...")
    let success = false
    try {
      const response = await apiConnector("POST", CREATE_RATING_API, data, {
        Authorization: `Bearer ${token}`,
      })
      console.log("CREATE RATING API RESPONSE............", response)
      if (!response?.data?.success) {
        throw new Error("Could Not Create Rating")
      }
      toast.success("Rating Created")
      success = true
    } catch (error) {
      success = false
      console.log("CREATE RATING API ERROR............", error)
      toast.error(error.message)
    }
    toast.dismiss(toastId)
    return success
  }