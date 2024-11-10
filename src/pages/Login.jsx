import React from 'react'
import Template from '../components/core/Auth/Template'
import loginImage from '../assets/Images/LoginImage.jpg'
const Login = () => {
  return (
    
        <Template
             
            header="Welcome Back to Royal FruitNuts"
            subHeader = "Sign in to enjoy the royal experience with fresh, premium-quality dry fruits."
            description = "Securely log in to explore our premium selection and manage your orders."
            image={loginImage}
            formType = "login"
        />
    
  )
}

export default Login