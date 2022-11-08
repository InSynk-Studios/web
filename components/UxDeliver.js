const contents = [
  {
    id: 1,
    title: "Dummy1",
    description:
      "We help you brainstorm user stories and feature sets required for your MVP.",
  },
  {
    id: 2,
    title: "Dummy2",
    description:
      "We help you with creating the best design and user experience for your product.",
  },
  {
    id: 3,
    title: "Dummy3",
    description:
      "We help you design, develop and launch a scalable MVP that is bound to succeed.",
  },
  {
    id: 4,
    title: "Dummy4",
    description:
      "We help you design, develop and scale your Product from MVP to PMF.",
  },
];

function UxDeliverContent(props) {
  return (
    <div className="flex flex-wrap flex-row -mx-4 text-center">
      <div
        className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
        data-wow-duration="1s"
        style={{
          visibility: "visible",
          animationDuration: "1s",
          animationName: "fadeInUp",
        }}
      >
        {/* <!-- service block --> */}
        <div className="py-8 px-12 mb-12 rounded-xl bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
          <div className="inline-block text-gray-900 mb-4">
            {/* <!-- icon --> */}
          </div>
          <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
            {props.content.title}
          </h3>
          <p className="text-gray-500">{props.content.description}</p>
        </div>
        {/* <!-- end service block --> */}
      </div>
    </div>
  );
}

const UxDeliver = () => {
  return (
    <section
      id="services"
      className="section relative rounded-xl pt-20 pb-8 md:pt-16 md:pb-0 bg-blue-500"
    >
      <div className="container xl:max-w-6xl mx-auto px-4">
        {/* <!-- Heading start --> */}
        <header className="mx-auto mb-12">
          <h2 className="text-4xl text-white font-bold md:text-6xl mb-2">
            Detailed deliverables
          </h2>
        </header>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 pt-20 pb-10 lg:pt-22 lg:pb-20">
          {contents.map((content) => {
            return (
              <div key={content.id}>
                <div>
                  <a className="flex justify-center">
                    <UxDeliverContent content={content} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UxDeliver;
