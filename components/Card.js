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
    title: "Ux/UI",
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
      className={`relative group overflow-hidden p-5 h-80 w-56 lg:w-12/12 lg:h-6/6 rounded-3xl cursor-pointer ${props.content.color}`}
    >
      <div className="w-fit">{props.content.svg}</div>

      <div className="absolute transform w-4/5 lg:w-5/6 duration-500 inset-y-24 group-hover:-inset-y-0 lg:inset-y-44 lg:group-hover:-inset-y-0">
        <p className="text-black text-xl mt-32">{props.content.number}</p>

        <div className="divide-y-2 divide-black">
          <div className="absolute mr-20">
            <p className="font-semibold inline-block text-xl sm:text-3xl text-left text-black">
              {props.content.title}
            </p>
          </div>
          <div className="absolute mt-20 lg:mt-40 lg:pt-4">
            <p className="text-left text-sm lg:text-lg lg:leading-6 text-black">
              {props.content.para}
            </p>
          </div>
        </div>

        <div className="absolute left-32 h-10 w-10 lg:h-32 lg:w-32 lg:left-52">
          {/* Right arrow icon */}
          <img src="https://img.icons8.com/ios/50/undefined/circled-right-2.png" />
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
