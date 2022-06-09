import { Fragment } from "react";

function Background(props) {
  return (
    <Fragment>
      <main className="container max-w-7xl mx-auto px-8 sm:px-8 md:px-8 lg:px-0 xl:px-0">{props.children}</main>
    </Fragment>
  );
}

export default Background;
