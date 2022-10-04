import Image from "next/image";
import { Fragment, useEffect } from "react";
import abstractPattern from "../assets/abstract/pattern-1.svg";
import abstractEllipseCut from "../assets/abstract/ellipse-cut.svg";

function Background(props) {
  return (
    <Fragment>
      <main className="relative">
        <div
          style={{ left: "0%", top: "-15%" }}
          className="absolute w-3/5 -z-20"
        >
          <Image src={abstractPattern} alt="pattern" />
        </div>
        <div className="container max-w-7xl mx-auto px-8 sm:px-8 md:px-8 lg:px-0 xl:px-0">
          {props.children}
        </div>
        <div
          style={{ left: "0%", bottom: "0%" }}
          className="absolute w-3/5 -z-20 hidden xl:block"
        >
          <Image src={abstractEllipseCut} height="700" alt="pattern" />
        </div>
      </main>
    </Fragment>
  );
}

export default Background;
