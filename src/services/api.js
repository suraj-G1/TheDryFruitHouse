const BASE_URL = process.env.REACT_APP_BASE_URL

export const endpoints = {
    SENDOTP_API : BASE_URL + '/auth/sendotp',
    SIGNUP_API:BASE_URL + '/auth/signup',  
    LOGIN_API:BASE_URL + '/auth/login',
    RESETPASSWORDTOKEN_API : BASE_URL + '/auth/reset-password-token',
    RESETPASSWORD_API:BASE_URL + '/auth/reset-password'

}

//PRODUCT ENDPOINTS
export const productEndpoints = {
    GET_ALL_PRODUCT_API:BASE_URL + '/product/getAllProduct',
    PRODUCT_DETAILS_API:BASE_URL + '/product/getProductDetails',
    ADD_PRODUCT_API:BASE_URL + '/product/addProduct',
    CREATE_RATING_API: BASE_URL + "/product/createRating",
    DELETE_PRODUCT_API:BASE_URL + '/product/deleteProduct'
}

// PROFILE ENDPOINTS
export const profileEndpoints = {
    GET_USER_DETAILS_API: BASE_URL + "/profile/getAllUserDetails",
    GET_USER_BOUGHT_PRODUCT_API: BASE_URL + "/profile/getPurchasedProduct",
    GET_SELLER_DATA_API:BASE_URL+"/profile/getAdminDashboard",
  }


// RATINGS AND REVIEWS
export const ratingsEndpoints = {
    REVIEWS_DETAILS_API: BASE_URL + "/product/getAllReviews",
}

// SETTINGS PAGE API
export const settingsEndpoints = {
    UPDATE_DISPLAY_PICTURE_API: BASE_URL + "/profile/updateProfilePicture",
    UPDATE_PROFILE_API: BASE_URL + "/profile/updateProfile",
    CHANGE_PASSWORD_API: BASE_URL + "/auth/changePassword",
    DELETE_PROFILE_API: BASE_URL + "/profile/deleteProfile",
}

// Customer ENDPOINTS
export const CustomerEndpoints = {
    COURSE_PAYMENT_API: BASE_URL + "/payment/capturePayment",
    COURSE_VERIFY_API: BASE_URL + "/payment/verifyPayment",
    SEND_PAYMENT_SUCCESS_EMAIL_API: BASE_URL + "/payment/sendPaymentSuccessEmail",
  }
  