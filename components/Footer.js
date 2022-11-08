import Image from "next/image";
import React from "react";
import Logo from "../assets/logo.svg";

export default function Footer() {
  return (
    <>
      {/* <hr className="text-[#6C6C6C] mx-5 my-12" /> */}
      <footer className="pb-7 mt-12 border-t border-t-[#6C6C6C] border-solid">
        <div className="max-w-screen-xl px-4 pt-8 mx-auto sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex justify-center text-teal-300 sm:justify-start">
              <Image src={Logo} alt="" />
            </div>

            <div className="flex flex-col gap-3">
              <p className="mt-4 font-inter-500 font-medium leading-7 text-xl text-left w-96 text-[#E2E2E2] lg:text-left lg:mt-0">
                GETINSYNK TECH PRIVATE LIMITED SOLUS Building, Office No. 1913
                Thane 400607, Maharashtra
              </p>
              <p className="font-inter-500 font-medium text-xl text-center text-white lg:text-left lg:mt-0">
                CIN: U72900MH2022PTC37695
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
