import { Fragment } from "react";
import abstractEllipse from "../assets/abstract/ellipse.svg";
import Image from "next/image";

function Hero() {
  return (
    <Fragment>
      <section className="relative my-60 lg:my-80">
        <div
          style={{ right: "-45%", top: "0%" }}
          className="absolute w-3/5 -z-20 hidden xl:block"
        >
          <Image src={abstractEllipse} alt="ellipse" />
        </div>
        <div className="lg:flex-grow flex flex-col md:items-start md:text-left mb-16 md:mb-0 text-white">
          <h1 className="font-inter-600 text-6xl sm:text-8xl mb-4">
            We are a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-violet-400 to-violet-900">
              Web3
            </span>
            <br />
            Product Studio
          </h1>
          <p className="lg:mb-8 leading-relaxed text-md sm:text-xl font-inter-400">
            We help you bring your new web3 product ideas to reality.
          </p>
        </div>
      </section>
    </Fragment>
  );
}

export default Hero;
