import { Fragment } from "react";
import abstractEllipse from "../../assets/abstract/ellipse.svg";
import Image from "next/image";
import Typewriter from "typewriter-effect";

function HeroSection() {
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
          <h1 className="font-inter-600 text-6xl sm:text-8xl mb-4 xl:max-w-8/12 xl:h-52">
            <Typewriter
              options={{ deleteSpeed: "natural", autoStart: true }}
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    `We build <br><span class='text-highlighted'>MVPs</span>`
                  )
                  .pauseFor(2000)
                  .deleteChars(4)
                  .typeString("<span class='text-highlighted'>Dapps</span>")
                  .pauseFor(2000)
                  .deleteChars(5)
                  .typeString("Product ideas")
                  .changeDeleteSpeed(2)
                  .pauseFor(2000)
                  .deleteChars(20)
                  .typeString(
                    "are a <span class='text-highlighted'>Web3</span> Product Studio!"
                  )
                  .start();
              }}
            />
          </h1>
          <p className="lg:mb-8 leading-relaxed text-md sm:text-xl font-inter-400">
            Helping Ventures and Builders bring their Product ideas to reality!
          </p>
        </div>
      </section>
    </Fragment>
  );
}

export default HeroSection;
