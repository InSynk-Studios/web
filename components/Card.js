import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import scoping from "../assets/scoping.svg";
import engineering from "../assets/engineering.svg";
import mvp from "../assets/mvp.svg";
import ux from "../assets/ux.svg";

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
    svg: scoping,
    number: "01.",
    color: CardColors[0],
    title: "Product Scoping",
    url: "/thank-you",
    description:
      "We help you brainstorm user stories and feature sets required for your MVP.",
  },
  {
    id: 2,
    svg: ux,
    number: "02.",
    color: CardColors[1],
    title: "UI/UX",
    url: "/service-ui-ux",
    description:
      "We help you with creating the best design and user experience for your product.",
  },
  {
    id: 3,
    svg: mvp,
    number: "03.",
    color: CardColors[2],
    title: "MVP Development",
    description:
      "We help you design, develop and launch a scalable MVP that is bound to succeed.",
  },
  {
    id: 4,
    svg: engineering,
    number: "04.",
    color: CardColors[3],
    title: "Development Partnership",
    description:
      "We help you design, develop and scale your Product from MVP to PMF.",
  },
];

const CardListItem = (props) => {
  // const router = useRouter();

  // const CardLink = () => {
  //   router.push(props.content.link);
  // };

  return (
    <div
      className={`relative transition-all h-80 mx-0 lg:h-6/6 rounded-3xl text-black group p-8 ${props.content.color}`}
    >
      <div className="w-fit mb-10 lg:mb-20">
        <div className="inline-block w-10 h-10 lg:w-14 lg:h-14 relative">
          <Image src={props.content.svg} alt={props.content.title} />
        </div>
      </div>
      <div>
        <div className="transform translate-y-24 lg:translate-y-40 group-hover:translate-y-5 lg:group-hover:translate-y-16 duration-500">
          <p className="text-xl">{props.content.number}</p>
          <p className="text-xl lg:text-3xl font-semibold pr-3">
            {props.content.title}
          </p>
        </div>

        <div className="transform translate-y-16 lg:translate-y-32 opacity-0 group-hover:opacity-100 group-hover:translate-y-6 lg:group-hover:translate-y-16 duration-500">
          <div className="mt-2 lg:mt-5">
            <div className="divide-y-2 divide-black">
              <div className="flex float-right -mt-16 h-10 w-10 lg:h-12 lg:w-12 cursor-pointer">
                <Link
                  href={{
                    pathname: props.content.url,
                  }}
                >
                  <img src="https://img.icons8.com/ios/50/undefined/circled-right-2.png" />
                </Link>
              </div>
              <p className="pt-2 lg:pt-5 text-sm lg:text-base leading-1">
                {props.content.description}
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
    <section className="my-40 font-inter-400 -mt-32 lg:-mt-0 text-white">
      <h1 className="text-4xl md:text-6xl font-semibold">
        See how can we help you
      </h1>
      <br />
      <p className="text-lg sm:text-xl font-normal text-gray-400">
        Let&rsquo;s keep it simple.
      </p>
      <p className="text-lg sm:text-xl pt-4 font-normal">
        We help you build your Minimum Viable Product, UI/UX
        <br />
        or do further development of your product.
      </p>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 pt-20 pb-10 lg:pt-22 lg:pb-20">
          {contents.map((content) => {
            return (
              <div key={content.id}>
                <div>
                  <a className="flex justify-center">
                    <CardListItem content={content} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* <p className="text-md sm:text-xl font-normal lg:-mt-10 text-gray-400">
          Or,
        </p>
        <p className="text-md sm:text-xl font-normal pt-4">
          You can let us help you with all of the above mentioned services
          <br />
          and you can call us your &rdquo;Design {"&"} Development
          Partner&rdquo;
        </p> */}
    </section>
  );
};

export default Card;
