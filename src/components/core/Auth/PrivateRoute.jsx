import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {token} = useSelector((state)=>state.auth);
    console.log("Coming to private route");
    if(token !== null){
        return children
    }else{
        return Navigate('/login');
    }
  
}

export default PrivateRoute