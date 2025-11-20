import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        // Change 50 to your desired scroll threshold
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount and unmount

  return (
    
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 
       ${scrolled ? "bg-gray-800 shadow-md " : "bg-transparent "}`}
    >
      <div className="container w-full mx-auto   flex justify-between items-center text-white  py-5 px-5 md:px-20 lg:px-32 ">
        {/* Images logo */}
        <div className="flex items-center gap-3 cursor-pointer">
          <img src="./Images/favicon.svg" alt="logo" className="w-8 h-8" />
          <h1 className="text-3xl font-bold text-white">Estate</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-7 text-white">
          {/* <li>
            <a href="#hero" className="hover:text-gray-400 cursor-pointer">
              Home
            </a>
          </li> */}

           <Link
            to="hero" 
            smooth={true}
            duration={500}
            className="hover:text-gray-400 cursor-pointer"
            
            >
              Home
          </Link>
          {/* <li>
              <a href="#about" className="hover:text-gray-400 cursor-pointer">
                About
              </a>
            </li> */}

          <Link
            to="about"
            smooth={true}
            duration={500}
            className="hover:text-gray-400 cursor-pointer"
          >
            About
          </Link>

          {/* <li>
              <a href="#project" className="hover:text-gray-400 cursor-pointer">
                Project
              </a>
            </li> */}

          <Link
            to="project"
            smooth={true}
            duration={500}
            className="hover:text-gray-400 cursor-pointer"
          >
            Project
          </Link>

          {/* <li>
              <a
                href="#testimonials"
                className="hover:text-gray-400 cursor-pointer"
              >
                Testimonials
              </a>
            </li> */}

          <Link
            to="testimonials"
            smooth={true}
            duration={500}
            className="hover:text-gray-400 cursor-pointer"
          >
            Testimonials
          </Link>

          {/* <li>
              <a
                href="#contactus"
                className="hover:text-gray-400 cursor-pointer"
              >
                Contact Us
              </a>
            </li> */}

          <Link
            to="contactus"
            smooth={true}
            duration={500}
            className="hover:text-gray-400 cursor-pointer"
          >
            Contact Us
          </Link>
        </ul>

        {/* Signup Button (Desktop) */}
        <button className="hidden md:block px-8 py-2 cursor-pointer rounded-full text-black bg-white   hover:bg-gray-200 ">
          Sign Up
        </button>

        {/* Mobile Menu Icon */}
        <button className="md:hidden w-8" onClick={() => setOpenMenu(true)}>
          <img
            src="https://real-estate-henna-nine.vercel.app/static/media/menu_icon.f6a63a18e3c68d807e50b1037f3e3555.svg"
            alt="menu"
          />
        </button>
      </div>

      {/* Mobile Menu side down */}

      <div
        className={`fixed top-0 left-0 w-full bg-white text-black z-30 transition-all duration-500 ease-in-out 
            ${
              openMenu
                ? "h-screen opacity-100"
                : "h-0 opacity-0 overflow-hidden"
            }`}
      >
        <div className="flex justify-end p-6">
          <img
            src="https://real-estate-henna-nine.vercel.app/static/media/cross_icon.9a64794069e04939df2002d90672164c.svg"
            alt="close"
            className="w-6 cursor-pointer"
            onClick={() => setOpenMenu(false)}
          />
        </div>
        <ul className="flex flex-col items-center gap-6 text-lg font-medium pb-8">
          <li>
            <a
              href="#"
              className="hover:text-gray-600"
              onClick={() => setOpenMenu(false)}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-gray-600"
              onClick={() => setOpenMenu(false)}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#project"
              className="hover:text-gray-600"
              onClick={() => setOpenMenu(false)}
            >
              Project
            </a>
          </li>
          <li>
            <a
              href="#testimonials"
              className="hover:text-gray-600"
              onClick={() => setOpenMenu(false)}
            >
              Testimonials
            </a>
          </li>
          <li>
            <a
              href="#contactus"
              className="hover:text-gray-600"
              onClick={() => setOpenMenu(false)}
            >
              Contact Us
            </a>
          </li>
          <button className="mt-4 px-8 py-2 rounded-full bg-blue-500 text-white font-semibold hover:bg-blue-600 transition">
            Sign Up
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
