import { useState } from "react";

export default function UxTimeline() {
// const [isMobile, setIsMobile] = useState();

// const handleScreenSize = () => {
//   if (window.scrollY > 140) {
//     setIsMobile(true);
//   } else setIsMobile(false);
// };

  return (
    <div className="container">
      <div className="max-w-7xl mx-auto px-8 sm:px-8 md:px-8 lg:px-0 xl:px-0 text-white">
        <h1 className="font-inter-600 border-b-2 border-blue-900 w-full h-12 text-3xl sm:text-4xl my-12">
          How it works
        </h1>
      </div>
      <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 mt-16 text-blue-50">
        {/* <!-- left --> */}
        <div className="flex flex-row-reverse md:contents">
          <div className="bg-blue-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
            <h3 className="font-semibold text-lg mb-1">Lorem ipsum</h3>
            <p className="leading-tight text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
              quaerat?
            </p>
          </div>
          <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
            <div className="h-full w-6 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-400 pointer-events-none" />
              <div className="w-20 h-1 bg-blue-500 absolute -left-20 z-0" />
            </div>
            <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gray-500 shadow" />
          </div>
        </div>
        {/* <!-- right --> */}
        <div className="flex md:contents">
          <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
            <div className="h-full w-6 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-400 pointer-events-none" />
              <div className="w-20 h-1 bg-blue-500 absolute -right-20 z-0" />
            </div>
            <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gray-500 shadow" />
          </div>
          <div className="bg-blue-500 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
            <h3 className="font-semibold text-lg mb-1">Lorem ipsum</h3>
            <p className="leading-tight text-justify">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae,
              facilis.
            </p>
          </div>
        </div>
        {/* <!-- left --> */}
        <div className="flex flex-row-reverse md:contents">
          <div className="bg-blue-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
            <h3 className="font-semibold text-lg mb-1">Lorem ipsum</h3>
            <p className="leading-tight text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
              quaerat?
            </p>
          </div>
          <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
            <div className="h-full w-6 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-400 pointer-events-none" />
              <div className="w-20 h-1 bg-blue-500 absolute -left-20 z-0" />
            </div>
            <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gray-500 shadow" />
          </div>
        </div>
      </div>
    </div>
  );
}
