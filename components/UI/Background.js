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
        className={`absolute bottom-12 left-[80rem] w-[40rem] h-[40rem] bg-circle rounded-full filter blur-2xl opacity-75 animation-delay-1000 ${
          animateBackground && "animate-blob"
        }`}
      ></div>
      <section>{props.children}</section>
    </Fragment>
  );
}

export default Background;
