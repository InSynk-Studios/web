// www.insynkstudios.com/service-ui-ux

import UxTimeline from "../../components/UxTimeline";
import Background from "../../components/ui/Background";
import UxCard from "../../components/UxCard";

export default function UI() {
  return (
    <Background>
      <section className="mt-60 lg:mt-80">
        <div className="lg:flex-grow flex flex-col md:items-start md:text-left mb-16 md:mb-0 text-white">
          <h1 className="font-inter-600 text-6xl sm:text-8xl mb-12">
            UI/
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-violet-400 to-violet-900">
              UX
            </span>
          </h1>
          <p className="mb-80 lg:mb-60 leading-relaxed text-md sm:text-xl font-inter-400">
            We help you bring your new web3 product ideas to reality.
          </p>
        </div>
        <div>
          <UxTimeline />
        </div>
        <div className="relative mt-40">
          <UxCard />
        </div>
      </section>
    </Background>
  );
}
