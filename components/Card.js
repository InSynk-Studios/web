import { Fragment } from "react";
import { Scoping, Engineering, Mvp, Ux } from "./svg/SVGs";

// Card background colors
const CardColors = [
  "bg-customBlue",
  "bg-white",
  "bg-customOrange",
  "bg-customPurple",
];

const contents = [
  {
    id: 1,
    svg: <Scoping />,
    number: "01.",
    color: CardColors[0],
    title: "Product Scoping",
    para: "We help you brainstorm all the possible user stories and feature sets valid for your MVP.",
  },
  {
    id: 2,
    svg: <Ux />,
    number: "02.",
    color: CardColors[1],
    title: "UI/UX",
    para: "We will help you with the best design and user experience for your product.",
  },
  {
    id: 3,
    svg: <Mvp />,
    number: "03.",
    color: CardColors[2],
    title: "MVP Development",
    para: "We help you create scalable MVP which will act as a strong foundation for your product.",
  },
  {
    id: 4,
    svg: <Engineering />,
    number: "04.",
    color: CardColors[3],
    title: "Engineering Partnership",
    para: "We will help you with tailored fit Development Team which will help you scale your product.",
  },
];

const CardListItem = (props) => {
  return (
    <div
      className={`relative block transition-all h-80 w-56 lg:w-12/12 lg:h-6/6 rounded-3xl cursor-pointer text-black group p-8 ${props.content.color}`}
    >
      <div className="w-fit mb-10 lg:mb-20">{props.content.svg}</div>
       <div className="flex flex-1 flex-col justify-between">
      <div className="transform translate-y-24 lg:translate-y-40 group-hover:translate-y-5 lg:group-hover:translate-y-16 duration-500">
        <p className="text-xl">{props.content.number}</p>
        <p className="text-xl lg:text-3xl font-semibold pr-3">
          {props.content.title}
        </p>
      </div>

      <div className="transform translate-y-16 lg:translate-y-32 opacity-0 group-hover:opacity-100 group-hover:translate-y-6 lg:group-hover:translate-y-16 duration-500">
        <div className="mt-2 lg:mt-5">
          <div className="divide-y-2 divide-black">
            <div className="flex float-right -mt-16 h-10 w-10 lg:h-12 lg:w-12">
              <img src="https://img.icons8.com/ios/50/undefined/circled-right-2.png" />
            </div>
            <p className="pt-2 lg:pt-5 text-sm lg:text-base leading-1">
              {props.content.para}
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

const Card = () => {
  return (
    <Fragment>
      <section className="my-40 font-inter-400 -mt-32 lg:-mt-0 text-white">
        <h1 className="text-4xl sm:text-6xl font-semibold">
          See how can we help you
        </h1>
        <br />
        <p className="text-lg sm:text-xl font-normal text-gray-400">
          Let&rsquo;s keep it simple.
        </p>
        <p className="text-lg sm:text-xl pt-4 font-normal">
          We help you build your Minimum Viable Product or UX/UI
          <br />
          or with the further development of your product.
        </p>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 pt-20 pb-10 lg:pt-22 lg:pb-20">
            {contents.map((content) => {
              return (
                <div className="flex justify-center" key={content.id}>
                  <CardListItem content={content} />
                </div>
              );
            })}
          </div>
        </div>
        <p className="text-md sm:text-xl font-normal lg:-mt-10 text-gray-400">
          Or,
        </p>
        <p className="text-md sm:text-xl font-normal pt-4">
          You can let us help you with all of the above mentioned services
          <br />
          and you can call us your &rdquo;Design {"&"} Development
          Partner&rdquo;
        </p>
      </section>
    </Fragment>
  );
};

export default Card;
