import Image from "next/image";
import { ArrowSquareOut } from "phosphor-react";
import { Fragment } from "react";
import GrailLogo from "../../assets/grail-logo.svg";

function GrailCTASection() {
  return (
    <Fragment>
      <section className="my-40 font-inter-400 -mt-32 lg:-mt-0 text-white">
        <div className="flex relative gap-6 p-6 border border-gray-400 rounded-xl">
          <div className="w-full h-full absolute bg-white top-0 left-0 rounded-xl opacity-10 -z-10"></div>
          <div className="w-4/12 uppercase text-4xl pr-20">
            See how our latest project is doing
            <a
              className="decoration-none"
              href="https://blog.polygon.technology/polygon-id-x-polygon-dao-integration-launches-to-create-new-zk-based-governance-frameworks/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="flex text-sm items-center mt-10 text-white hover:text-black bg-transparent hover:bg-white rounded-lg border border-white p-3 transition ease-in-out duration-200 hover:bg-transparent">
                Read more <ArrowSquareOut className="ml-2" size={16} />
              </button>
            </a>
          </div>
          <div className="w-7/12">
            <span className="w-32 mb-4 bg-white rounded-md p-2 flex text-center">
              <Image src={GrailLogo} alt="grail" />
            </span>
            <span className="text-gray-400">
              Being used by 800+ users, Grail is a sybil-resistant governance
              platform running Polygon DAO, and this is what Polygon has to say
              about it,
            </span>
            <span className="text-xl block italic font-bold mt-4">
              “Grail will be a modular open-source platform enabling DAOs and
              Web3 communities to enjoy gated spaces, a rich forum, and unique
              discoverability.”
            </span>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default GrailCTASection;
