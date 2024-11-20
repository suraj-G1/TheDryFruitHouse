import React from "react";
import HeroSection from "../assets/Images/Hero_Section.jpg";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import BrowseProduct from '../components/core/HomePage/BrowseProduct'
import Footer from "../components/common/Footer";
const Home = () => {
  return (
    <div className=" flex flex-col gap-4">

        <div className="w-11/12 mx-auto mt-8">
            <h1 className="text-center text-4xl uppercase text-richblack-900 font-bold">Our Range of Dry Fruits!</h1>
            <BrowseProduct/>
        </div>
        <Footer/>
    </div>
  );
};

export default Home;
