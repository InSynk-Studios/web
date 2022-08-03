import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import logo from "../../assets/logo.svg";

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

  return (
    <header
      className={`w-full top-0 backdrop-filter backdrop-blur-lg fixed z-10 trasition ease-in-out duration-500 ${
        animateHeader && "bg-black/30"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`flex max-w-screen-xl ${
            animateHeader ? "py-5" : "py-10"
          } mx-auto items-center justify-between px-8 sm:px-8 md:px-8 lg:px-0 xl:px-0 trasition ease-in-out duration-500`}
        >
          <Link href="/">
            {/* change lg:w-56 -> lg:w-40 to remove unwanted padding */}
            <div className="flex w-32 lg:w-40 cursor-pointer relative">
              <Image src={logo} alt="insynk-logo" />
            </div>
          </Link>
          {/* TODO: Uncomment as we add more pages to the site */}
          <nav>
            <ul className="flex items-center justify-start">
              {menuItems?.map((item) => (
                <li key={item?.title}>
                  <Link href={item?.url}>
                    <a className="px-2 lg:px-6 py-6 text-sm md:text-base border-b-2 border-transparent hover:border-indigo-400 leading-5 md:px-3 text-white hover:text-indigo-500">
                      {item?.title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
