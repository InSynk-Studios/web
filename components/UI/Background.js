import { Fragment } from "react";

function Background(props) {
  return (
    <Fragment>
      <main className="container max-w-7xl mx-auto px-8">{props.children}</main>
    </Fragment>
  );
}

export default Background;
