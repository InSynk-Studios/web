import { Fragment } from "react";

const project = [
  {
    id: 1,
    title: "The Majestic and Wonderful Bahamas",
    href: "#",
    date: "2020",
    imageSrc:
      "https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    description:
      "The best kept secret of The Bahamas is the country’s sheer size and diversity. With 16 major islands, The Bahamas is an unmatched destination",
  },
  {
    id: 2,
    title: "Web3.0",
    href: "#",
    date: "2020",
    imageSrc:
      "https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    description:
      "The best kept secret of The Bahamas is the country’s sheer size and diversity. With 16 major islands, The Bahamas is an unmatched destination",
  },
  {
    id: 3,
    title: "blockchain",
    href: "#",
    date: "2020",
    imageSrc:
      "https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    description:
      "The best kept secret of The Bahamas is the country’s sheer size and diversity. With 16 major islands, The Bahamas is an unmatched destination",
  },
  {
    id: 4,
    title: "MVP",
    href: "#",
    date: "2020",
    imageSrc:
      "https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    description:
      "The best kept secret of The Bahamas is the country’s sheer size and diversity. With 16 major islands, The Bahamas is an unmatched destination",
  },
];

const build = () => {
  return (
    <Fragment>
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl">
        <div className="text-4xl lg:text-5xl sm:text-left md:text-left lg:text-left xl:text-left selection:bg-teal-300 selection:text-fuchsia-900">
          <h1 className="max-w-xl lg:max-w-7xl mx-auto py-10 px-4 sm:py-12 text-purple-500">
            Why we build !
          </h1>
        </div>

        <div className="mt-32 space-y-10">
          {project.map((projects) => (
            <div
              key={projects.id}
              className="relative flex flex-col md:flex-row md:space-x-5 rounded-xl shadow-lg p-3 max-w-lg md:max-w-3xl mx-auto border border-white bg-white"
            >
              <div className="w-full md:w-2/6 bg-white grid place-items-center">
                <img
                  src="https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="tailwind logo"
                  className="rounded-xl"
                />
              </div>
              <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
                <div className="flex justify-between item-center">
                  <div className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
                    {projects.date}
                  </div>
                </div>
                <h3 className="font-black text-gray-800 md:text-3xl text-xl">
                  {projects.title}
                </h3>
                <p className="md:text-lg text-gray-500 text-base">
                  {projects.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default build;
