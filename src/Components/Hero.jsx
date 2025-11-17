import React from "react";

const Hero = () => {
  return (
    // <div>
    <div
      className="h-screen text-center bg-cover  text-white container mx-auto px-4  py-6 md:px-20 lg:px-32  overflow-hidden "
      style={{ backgroundImage: "url('./Images/header_img.png')" }} id="hero"
    >
        
      <h2 className="text-5xl sm:text-6xl md:text-[82px] font-semibold  inline-block pt-20 mt-20 ">
        Explore Homes That Fit Your Dream
      </h2>
      <div className="flex flex-wrap justify-center gap-6 mt-10">
       
        <a
          href="#project"
          className="border border-white  px-8 py-3 rounded hover:bg-white hover:text-black "
        >
          Project
        </a>
        <a
          href="#contactus"
          className="border bg-blue-500 px-8 py-3 rounded hover:bg-blue-600 "
        >
          Contact Us
        </a>
      </div>
    </div>
    // </div>
  );
};

export default Hero;
