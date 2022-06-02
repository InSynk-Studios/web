import { Fragment } from "react";
import { Svg1, Svg2, Svg3, Svg4 } from "./SVG/SVGs";

const CardColors = ["#cf9c3e", "#cf9c3e", "#cf9c3e", "#9067D4"];

const contents = [
  {
    id: 1,
    svg: <Svg1 />,
    number: "01.",
    color: CardColors[0],
    title: "Product Scoping",
    para: "We help you brainstorm all the possible user stories and feature sets valid for your MVP.",
  },
  {
    id: 2,
    svg: <Svg2 />,
    number: "02.",
    color: CardColors[1],
    title: "Ux/UI",
    para: "We will help you with the best design and user experience for your product",
  },
  {
    id: 3,
    svg: <Svg3 />,
    number: "03.",
    color: CardColors[2],
    title: "MVP Development",
    para: "We help you create scalable MVP which will act as a strong foundation for your product",
  },
  {
    id: 4,
    svg: <Svg4 />,
    number: "04.",
    color: CardColors[3],
    title: "Engineering Partnership",
    para: "We will help you with tailored fit Development Team which will help you scale your product",
  },
];

const CardListItem = (props) => {
  return (
    <div
      className={`relative group overflow-hidden p-6 w-[20rem] h-[28rem] rounded-3xl cursor-pointer bg-[${props.content.color}]`}
    >
      <div className="mb-5">{props.content.svg}</div>

      <div className=" mt-36">
        <div className="object-cover w-full h-full transform duration-700 backdrop-opacity-100" />
        <div className="absolute w-full h-full shadow-2xl opacity-20 transform duration-500 inset-y-full group-hover:-inset-y-0"></div>
        <div className="absolute w-full h-full transform duration-500 inset-y-[10rem] group-hover:-inset-y-0">
          <p className="text-black text-xl mt-32">{props.content.number}</p>

          <div className="divide-y-2 divide-black ">
            <div className="absolute flex m-12 -ml-1 -mt-1">
              <p className="capitalize font-bold text-4xl text-left text-black">
                {props.content.title}
              </p>
            </div>
            <div className="absolute mt-[10rem] p-5">
              <p className="font-sans text-left w-4/5 text-black">
                {props.content.para}
              </p>
            </div>
          </div>

          <div className="pl-[12rem] mt-2">
            <img src="https://img.icons8.com/ios/50/undefined/circled-right-2.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Card = () => {
  return (
    <Fragment>
      <div className="container mx-auto px-24 text-white">
        <h1 className="text-6xl font-semibold">See how can we help you</h1>
        <br />
        <p className="text-xl text-gray-400">Let{"'"}s keep it simple.</p>
        <p className="text-xl pt-4">
          We help you build your Minimum Viable Product or UX/UI
          <br />
          or with the further development of your product.
        </p>

        <div className="grid grid-cols-1 gap-[1rem] md:grid-cols-2 xl:grid-cols-4 pt-20 pb-10 lg:pt-22 lg:pb-20">
          {contents.map((content) => {
            return <CardListItem content={content} key={content.id} />;
          })}
        </div>
        <p className="text-xl -mt-12 text-gray-400">Or,</p>
        <p className="text-xl pt-4">
          You can let us help you with all of the above mentioned services
          <br />
          and you can call us your &rdquo;Design {"&"} Development
          Partner&rdquo;
        </p>
      </div>
    </Fragment>
  );
};

export default Card;
