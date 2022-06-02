import { Fragment } from "react";

function Hero() {
  return (
    <Fragment>
      <section className="body-font text-white">
        <div className="container mx-auto flex px-32 mt-[20rem] md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font font-semibold text-4xl sm:text-8xl mb-4">
              We are a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-violet-400 to-violet-900">
                Web3
              </span>
              <br />
              Product Studio
            </h1>
            <p className="mb-8 leading-relaxed text-2xl">
              We help you bring your new web3 product ideas to reality.
            </p>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default Hero;
