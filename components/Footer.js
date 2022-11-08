import Image from "next/image";
import React from "react";
import Logo from "../assets/logo.svg";

/**
 * Function for a Footer
 * @returns The footer of the website
 */
export default function Footer() {
  return (
    <footer className="pb-7 mt-12 border-t border-t-[#6C6C6C] border-solid">
      <div className="max-w-screen-xl px-4 pt-8 mx-auto sm:px-6 lg:px-8 sm:flex sm:items-center sm:justify-between">
        <Image src={Logo} alt="" />

        <p className="mt-4 font-inter-500 font-medium leading-7 text-lg md:text-xl text-center lg:w-96 text-[#E2E2E2] lg:text-left lg:mt-0">
          GETINSYNK TECH PRIVATE LIMITED SOLUS Building, Office No. 1913 Thane
          400607, Maharashtra CIN: U72900MH2022PTC37695
        </p>
      </div>
    </footer>
  );
}
