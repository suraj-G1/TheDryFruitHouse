import React from 'react'
import Template from '../components/core/Auth/Template'
import signupImage  from '../assets/Images/SignupImage.jpg'
const Signup = () => {
  return (
    <div>
        <Template
            header="Join Royal FruitNuts"
            subHeader = "Create an account and start your journey to a healthier, luxurious snacking experience"
            description = "Sign up to enjoy exclusive benefits, offers, and fresh deliveries of our premium dry fruits"
            image = {signupImage}
            formType = "signup"
        />
    </div>
  )
}

export default Signup