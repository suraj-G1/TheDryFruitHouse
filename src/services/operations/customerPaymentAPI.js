import { toast } from "react-hot-toast"

import rzpLogo from "../../assets/Logo/logo.jpg"
import { resetCart } from "../../slices/cartSlice"
import { setPaymentLoading } from "../../slices/productSlice"
import { apiConnector } from "../apiConnector"
import { CustomerEndpoints } from "../api"

const {
  COURSE_PAYMENT_API,
  COURSE_VERIFY_API,
  SEND_PAYMENT_SUCCESS_EMAIL_API,
} = CustomerEndpoints

// Load the Razorpay SDK from the CDN
function loadScript(src) {
    console.log("Loading the Script");
  return new Promise((resolve) => {
    const script = document.createElement("script")
    script.src = src
    script.onload = () => {
      resolve(true)
    }
    script.onerror = () => {
      resolve(false)
    }
    //console.log("Loading the child");
    document.body.appendChild(script)
    //console.log("Loaded the child");
  })
}

// Buy the Product
export async function BuyProduct(
  token,
  products,
  user_details,
  navigate,
  dispatch
) {
  const toastId = toast.loading("Loading...")
  try {
    // Loading the script of Razorpay SDK
    console.log("Loading Payment Script");
    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js")
    //console.log("Loaded the script");
    if (!res) {
      toast.error(
        "Razorpay SDK failed to load. Check your Internet Connection."
      )
      return
    }
    //console.log("Result",res);

    // Initiating the Order in Backend
    //console.log("Courses",courses);
    const orderResponse = await apiConnector(
      "POST",
      COURSE_PAYMENT_API,
      {
        products,
      },
      {
        Authorization: `Bearer ${token}`,
      }
    )
    console.log("orderRespnose",orderResponse);

    if (!orderResponse.data.success) {
      throw new Error(orderResponse.data.message)
    }
    console.log("PAYMENT RESPONSE FROM BACKEND............", orderResponse.data)

    // Opening the Razorpay SDK
    const options = {
      key: process.env.RAZORPAY_KEY,
      currency: orderResponse.data.data.currency,
      amount: `${orderResponse.data.data.amount}`,
      order_id: orderResponse.data.data.id,
      name: "FruitNuts",
      description: "Thank you for Purchasing the Products.",
      image: rzpLogo,
      prefill: {
        name: `${user_details.firstName} ${user_details.lastName}`,
        email: user_details.email,
      },
      handler: function (response) {
        sendPaymentSuccessEmail(response, orderResponse.data.data.amount, token)
        verifyPayment({ ...response,products }, token, navigate, dispatch)
      },
    }
    const paymentObject = new window.Razorpay(options)

    paymentObject.open()
    paymentObject.on("payment.failed", function (response) {
      toast.error("Oops! Payment Failed.")
      console.log(response.error)
    })
  } catch (error) {
    console.log("PAYMENT API ERROR............", error)
    toast.error("Could Not make Payment.")
  }
  toast.dismiss(toastId)
}

// Verify the Payment
async function verifyPayment(bodyData, token, navigate, dispatch) {
  const toastId = toast.loading("Verifying Payment...")
  dispatch(setPaymentLoading(true))
  try {
    const response = await apiConnector("POST", COURSE_VERIFY_API, bodyData, {
      Authorization: `Bearer ${token}`,
    })

    console.log("VERIFY PAYMENT RESPONSE FROM BACKEND............", response)

    if (!response.data.success) {
      throw new Error(response.data.message)
    }

    toast.success("Payment Successful")
    console.log('Payment Successful');
    navigate("/dashboard/purchased-products")
    dispatch(resetCart())
  } catch (error) {
    console.log("PAYMENT VERIFY ERROR............", error)
    toast.error("Could Not Verify Payment.")
  }
  toast.dismiss(toastId)
  dispatch(setPaymentLoading(false))
}

// Send the Payment Success Email
async function sendPaymentSuccessEmail(response, amount, token) {
  try {
    await apiConnector(
      "POST",
      SEND_PAYMENT_SUCCESS_EMAIL_API,
      {
        orderId: response.razorpay_order_id,
        paymentId: response.razorpay_payment_id,
        amount,
      },
      {
        Authorization: `Bearer ${token}`,
      }
    )
  } catch (error) {
    console.log("PAYMENT SUCCESS EMAIL ERROR............", error)
  }
}
