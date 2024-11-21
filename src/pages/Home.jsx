import React from "react";

import BrowseProduct from '../components/core/HomePage/BrowseProduct'
import Footer from "../components/common/Footer";
import Quality from "../components/core/About/Quality";
const Home = () => {
  return (
    <div className=" flex flex-col gap-4 relative mt-[80px]">
        <div className="w-11/12 mx-auto mt-8">
            <h1 className="text-center text-4xl uppercase text-richblack-900 font-bold">Our Range of Dry Fruits!</h1>
            <BrowseProduct/>
        </div>
        <Quality/>
        <Footer/>
    </div>
  );
};

export default Home;
