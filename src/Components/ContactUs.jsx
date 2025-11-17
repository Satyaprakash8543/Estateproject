import React from "react";

const ContactUs = () => {
  return (
    <>
      <div
        className=" py-24 place-items-center container md:mx-auto  lg:px-32 overflow-hidden "
        id="contactus"
      >
        <h1 className="text-3xl sm:text-4xl">
          <span className="font-bold">Contact</span>
          <span className="underline decoration">With Us</span>
        </h1>
        <p className="text-gray-600">Ready to Make a Move? Let's Build Your </p>
        <p className="text-gray-600">Future Together</p>

        {/* form section? */}
        <div className="p-3 mx-auto container">
          <form className="max-w-2xl mx-auto text-center sm:flex-row  text-gray-600 pt-8 py-24 mt-10 ">
            <div className="flex flex-wrap ">
              <div className=" w-full mx-auto text-left md:w-1/2">
                Your Name
                <input
                  className="w-full  border border-gray-300 rounded py-3 px-4 mt-2"
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                />
              </div>
              <div className="w-full text-left md:w-1/2 md:pl-4">
                Your Email
                <input
                  className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                />
              </div>
            </div>
            <div className="my-6 text-left">
              Message
              <textarea
                className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none"
                name="message"
                placeholder="Message"
              />
            </div>
            <button className="bg-blue-500 place-items-center text-white px-12 py-2 mb-10 rounded cursor-pointer">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
