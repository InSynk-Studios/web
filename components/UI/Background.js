import { useState, useEffect, Fragment } from "react";

function Background(props) {
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
        className={`absolute bottom-5 lg:bottom-12 lg:left-3/4 w-40 h-40 lg:w-12/12 lg:h-8/8 bg-circle rounded-full filter blur-xl opacity-75 animation-delay-1000 ${
          animateBackground && "animate-blob"
        }`}
      ></div>
      <section className="container">{props.children}</section>
    </Fragment>
  );
}

export default Background;
