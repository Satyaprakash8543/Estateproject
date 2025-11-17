import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-5 overflow-hidden md:px-20 lg:px-32 w-full">
      <div className="container mx-auto flex flex-col md:flex-row justify-around items-start gap-10 px-8">
        {/* Left Section */}
        <div className=" w-full md:w-1/2 md:mb-0 mb-8">
          <img
            src="https://real-estate-henna-nine.vercel.app/static/media/logo_dark.b51a75e1959f1d1f62bca2e7dfdaec75.svg"
            alt="logo"
          />

          <p className="text-gray-400 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
            repellendus distinctio numquam laboriosam, voluptate ab? Quaerat sit
            corporis ducimus perspiciatis culpa in, hic odio, iure dolorem nemo
            debitis ut alias.
          </p>
        </div>

        {/* Middle Section */}

        <div>
          <h1 className="font-bold text-lg mb-4">Company</h1>
          <ul className="flex flex-col text-gray-400 gap-1">
            <li>
              <a href="#" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="max-w-sm">
          <h1 className="font-bold text-lg mb-4">
            Subscribe to our newsletter
          </h1>
          <p className="text-gray-400 mb-4">
            The latest news, articles, and resources — sent to your inbox
            weekly.
          </p>
          <div className="flex  gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-gray-700 rounded-l p-2 bg-gray-800 w-full focus:outline-none md:w-auto"
            />
            <button className="bg-blue-600 text-white px-4 rounded hover:bg-blue-700 transition cursor-pointer">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <hr className="text-gray-400 mt-10 w-3/4 mx-auto" />
      <div className="text-gray-500 text-center py-4 border-t border-gray-700">
        © 2024 GreatStack. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
