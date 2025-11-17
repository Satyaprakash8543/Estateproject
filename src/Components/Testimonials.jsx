import React from "react";

const Testimonials = () => {
  return (
    <div className="container  py-24 overflow-hidden" id="testimonials">
      <div className="text-center ">
        <h1 className="text-3xl">
          <span className="font-bold">Customers</span>
          <span className="underline decoration">Testimonials</span>
        </h1>

        <div className="p-2 text-gray-600">
          <p>Real Stories from Those Who Found Home</p>
          <p>with Us</p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-8 mt-10 ">
        {/* first Card */}
        <div className=" w-80 h-100 max-w-sm mx-auto bg-white border border-gray-200 rounded-xl shadow-md px-8 py-12 ">
          <div className=" flex justify-center">
            <img src="https://real-estate-henna-nine.vercel.app/static/media/profile_img_1.a18bc8661c9f5aab7cd1.png" />
          </div>
          <div className="text-center my-2">
            <h1 className="text-xl text-gray-700 font-medium">
              Donald Jackman
            </h1>
            <p className="text-gray-500">Marketing Manager</p>
          </div>
          <div className="flex justify-center gap-2 my-3">
            <img src="https://real-estate-henna-nine.vercel.app/static/media/star_icon.9cbf6c7d0e41a31015e034d67d4f865f.svg" />
            <img src="https://real-estate-henna-nine.vercel.app/static/media/star_icon.9cbf6c7d0e41a31015e034d67d4f865f.svg" />
            <img src="https://real-estate-henna-nine.vercel.app/static/media/star_icon.9cbf6c7d0e41a31015e034d67d4f865f.svg" />
            <img src="https://real-estate-henna-nine.vercel.app/static/media/star_icon.9cbf6c7d0e41a31015e034d67d4f865f.svg" />
            <img src="https://real-estate-henna-nine.vercel.app/static/media/star_icon.9cbf6c7d0e41a31015e034d67d4f865f.svg" />
          </div>
          <div className="text-gray-600 text-center mt-2">
            <p>
              From the very first meeting, they understood my vision and helped
              me find the perfect property. Their attention to detail and
              commitment to client satisfaction is unmatched.
            </p>
          </div>
        </div>
        {/* Second Card  */}
        <div className=" w-80 h-100 max-w-sm mx-auto bg-white border border-gray-200 rounded-xl shadow-md px-8 py-12 ">
          <div className=" flex justify-center">
            <img src="https://real-estate-henna-nine.vercel.app/static/media/profile_img_2.87edc37f1a8184bed8e4.png" />
          </div>
          <div className="text-center my-2">
            <h1 className="text-xl text-gray-700 font-medium">
              Richard Nelson
            </h1>
            <p className="text-gray-500">UI/UX Designer</p>
          </div>
          <div className="flex justify-center gap-2 my-3">
            <img src="https://real-estate-henna-nine.vercel.app/static/media/star_icon.9cbf6c7d0e41a31015e034d67d4f865f.svg" />
            <img src="https://real-estate-henna-nine.vercel.app/static/media/star_icon.9cbf6c7d0e41a31015e034d67d4f865f.svg" />
            <img src="https://real-estate-henna-nine.vercel.app/static/media/star_icon.9cbf6c7d0e41a31015e034d67d4f865f.svg" />
            <img src="https://real-estate-henna-nine.vercel.app/static/media/star_icon.9cbf6c7d0e41a31015e034d67d4f865f.svg" />
            <img src="https://real-estate-henna-nine.vercel.app/static/media/star_icon.9cbf6c7d0e41a31015e034d67d4f865f.svg" />
          </div>
          <div className="text-gray-600 text-center mt-2">
            <p>
              From the very first meeting, they understood my vision and helped
              me find the perfect property. Their attention to detail and
              commitment to client satisfaction is unmatched.
            </p>
          </div>
        </div>

        {/* Third Card  */}
        <div className=" w-80 h-100 max-w-sm mx-auto bg-white border border-gray-200 rounded-xl shadow-md px-8 py-12 ">
          <div className=" flex justify-center">
            <img src="https://real-estate-henna-nine.vercel.app/static/media/profile_img_3.b4f92203c8af0994fd4a.png" />
          </div>
          <div className="text-center my-2">
            <h1 className="text-xl text-gray-700 font-medium">
              James Washington
            </h1>
            <p className="text-gray-500">Co-Founder</p>
          </div>
          <div className="flex justify-center gap-2 my-3">
            <img src="https://real-estate-henna-nine.vercel.app/static/media/star_icon.9cbf6c7d0e41a31015e034d67d4f865f.svg" />
            <img src="https://real-estate-henna-nine.vercel.app/static/media/star_icon.9cbf6c7d0e41a31015e034d67d4f865f.svg" />
            <img src="https://real-estate-henna-nine.vercel.app/static/media/star_icon.9cbf6c7d0e41a31015e034d67d4f865f.svg" />
            <img src="https://real-estate-henna-nine.vercel.app/static/media/star_icon.9cbf6c7d0e41a31015e034d67d4f865f.svg" />
            <img src="https://real-estate-henna-nine.vercel.app/static/media/star_icon.9cbf6c7d0e41a31015e034d67d4f865f.svg" />
          </div>
          <div className="text-gray-600 text-center mt-2">
            <p>
              From the very first meeting, they understood my vision and helped
              me find the perfect property. Their attention to detail and
              commitment to client satisfaction is unmatched.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
