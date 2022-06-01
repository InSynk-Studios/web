import { useState, useEffect, Fragment } from "react";

function Hero() {
  const [animateBackground, setAnimateBackground] = useState(false);
  useEffect(() => {
    const listener = () => {
      if (window.scrollY > 50) {
        setAnimateBackground(true);
      } else setAnimateBackground(false);
    };
    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  return (
    <Fragment>
      <div
        className={`absolute top-[30rem] left-[42rem] w-72 h-72 bg-pink-800 rounded-full filter blur-lg animation-delay-4000 ${
          animateBackground && "animate-blob"
        }`}
      ></div>
      <div
        className={`absolute bottom-12 left-[75rem] w-[40rem] h-[40rem] bg-circle rounded-full filter blur-2xl opacity-75 animation-delay-1000 ${
          animateBackground && "animate-blob"
        }`}
      ></div>

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

      {/* <section>
        <div className="ml-32 mt-[20rem] text-white">
          <div>
            <h1 className="text-8xl font-semibold">
              We are a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-violet-400 to-violet-900">
                Web3
              </span>
              <br />
              Product Studio
            </h1>
            <h2 className="mt-12 text-2xl">
              We help you bring your new web3 product ideas to reality.
            </h2>
          </div>
        </div>
      </section> */}
    </Fragment>
  );
}

export default Hero;
