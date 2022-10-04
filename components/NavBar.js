import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import logo from "../assets/logo.svg";

export default function NavBar() {
  const [animateHeader, setAnimateHeader] = useState(false);

  const handleHeaderAnimation = () => {
    if (window.scrollY > 140) {
      setAnimateHeader(true);
    } else setAnimateHeader(false);
  };

  useEffect(() => {
    handleHeaderAnimation();
    const listener = () => {
      handleHeaderAnimation();
    };
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  const menuItems = [
    { title: "Work", url: "/work" },
    { title: "Blog", url: "/blog" },
    { title: "Why we Build!", url: "#" },
  ];

  // if (typeof window !== "undefined") {
  //   var mobileMenuButton = document.getElementById("mobileMenuButton");
  //   mobileMenuButton.onclick = function () {
  //     document
  //       .getElementById("sideMenuHideOnMobile")
  //       .classList.toggle("-translate-y-full");
  //     document.getElementById("sideMenuHideOnMobile").classList.toggle("mt-20");
  //     document
  //       .getElementById("sideMenuHideOnMobile")
  //       .classList.toggle("shadow");
  //     document
  //       .getElementById("mobileMenuButtonClose")
  //       .classList.toggle("hidden");
  //     document
  //       .getElementById("mobileMenuButtonOpen")
  //       .classList.toggle("hidden");
  //   };
  //   // Hide element when click outside nav
  //   var theElementContainer = document.getElementsByTagName("nav")[0];
  //   document.addEventListener("click", function (event) {
  //     if (!theElementContainer.contains(event.target)) {
  //       document
  //         .getElementById("sideMenuHideOnMobile")
  //         .classList.add("-translate-y-full");
  //       document
  //         .getElementById("sideMenuHideOnMobile")
  //         .classList.remove("mt-20");
  //       document
  //         .getElementById("sideMenuHideOnMobile")
  //         .classList.remove("shadow");
  //       document
  //         .getElementById("mobileMenuButtonOpen")
  //         .classList.remove("hidden");
  //       document
  //         .getElementById("mobileMenuButtonClose")
  //         .classList.add("hidden");
  //     }
  //   });
  // }

  return (
    <header
      className={`w-full top-0 fixed z-10 transition-opacity ease-in-out duration-500 ${
        animateHeader ? "bg-black bg-opacity-80" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`flex max-w-screen-xl py-7 mx-auto items-center justify-between px-8 sm:px-8 md:px-8 lg:px-0 xl:px-0 trasition ease-in-out duration-500`}
        >
          <Link href="/">
            {/* change lg:w-56 -> lg:w-40 to remove unwanted padding */}
            <div className="flex w-32 lg:w-40 cursor-pointer relative">
              <Image src={logo} alt="insynk-logo" />
            </div>
          </Link>
          <nav>
            <button
              id="mobileMenuButton"
              className="p-1 focus:outline-none md:hidden"
              title="Open side menu"
            >
              {/* SVG For "x" button */}
              <svg
                id="mobileMenuButtonClose"
                className="w-8 h-8 hidden"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              {/* SVG For "Menu burger" button */}
              <svg
                id="mobileMenuButtonOpen"
                className="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            {/* <div
              id="sideMenuHideOnMobile"
              className="flex px-12 lg:px-0 lg:flex-none items-center lg:mx-24 bg-white space-y-4 py-4 md:space-y-0 md:py-0 lg:py-0 lg:space-y-0 md:bg-transparent lg:bg-transparent rounded-lg absolute top-0 right-8 transition-all duration-500 transform translate-x-0 flex-col md:flex-row -translate-y-full md:translate-y-0 md:my-12 lg:my-12 md:items-center md:uppercase"
            >
              {menuItems?.map((item) => (
                <ul
                  className="h-12 border-b-2 md:border-none md:h-0 lg:border-none lg:h-0"
                  key={item?.title}
                >
                  <Link href={item?.url}>
                    <a className="mx-2 lg:m-0 lg:p-7 transition-all duration-500 font-inter-400 lg:border-b-2 lg:border-transparent hover:border-indigo-400 text-black md:text-white lg:text-white hover:text-indigo-500">
                      {item?.title}
                    </a>
                  </Link>
                </ul>
              ))}
            </div> */}
          </nav>
        </div>
      </div>
    </header>
  );
}
