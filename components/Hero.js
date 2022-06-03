import { Fragment } from "react";

function Hero() {
  return (
    <Fragment>
      <section className="text-white">
        <div className="mx-auto flex px-12 lg:px-32 mt-40 lg:mt-80">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0">
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
        </div>
      </section>
    </Fragment>
  );
}

export default Hero;
