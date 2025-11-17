import React from "react";

const AbouteBround = () => {
  
  return (
    <div
      className="container flex items-center justify-center flex-col md:px-20 lg:px-32 py-24 overflow-hidden"
      id="about"
    >
       
      <h1 className="text-3xl my-2  sm:text-4xl">
        <span className="font-bold">Aboute</span>
        <span className="underline decoration-1">Our Brand</span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mb-2">
        Passionate About Properties, Dedictaed to your Vision
      </p>

      <div className="flex  flex-col p-2 mt-5 md:flex-row items-center md:items-start md:gap-20 ">
        
        <img
          src="https://real-estate-henna-nine.vercel.app/static/media/brand_img.e2eb95b624915fbff01e.png"
          className="w-full sm:w-1/2 max-w-lg bg-cover"
        />
      

        
        <div className="flex flex-col flex-wrap items-center md:items-start mt-10  text-gray-600">
          <div className="grid grid-cols-2 gap-6 w-full 2xl:pr-28">
            <div>
              <p className="text-4xl font-bold text-gray-800">10+</p>
              <p className="">Years of Excellence</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-gray-800">12+</p>
              <p className="">12+ Projects Completed</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-gray-800">20+</p>
              <p className="">Mn. Sq. Ft. Delivered</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-gray-800">25+</p>
              <p className="">Ongoing Projects</p>
            </div>
          </div>
          <p className="my-10 max-w-lg p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            quidem cupiditate sit, suscipit ipsam consequuntur sapiente beatae
            optio, delectus dolore modi in est officiis voluptates a aliquam
            fugiat. Hic, repudiandae?
          </p>
          <button className="bg-blue-500 text-white px-8 py-2 rounded cursor-pointer">
            Learn more
          </button>
        </div>
      </div>
 
    </div>
  );
};

export default AbouteBround;
