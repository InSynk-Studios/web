import { Fragment } from "react";

function Form() {
  const preventClick = (event) => {
    event.preventDefault();
  };

  return (
    <Fragment>
      <section
        className="py-16 px-4 lg:px-24 overflow-hidden relative z-10 font-inter-400"
        data-aos="fade-up"
        id="contact"
      >
        <div className="container">
          <div className="flex flex-col lg:flex-row lg:items-center text-slate-900 dark:text-gray-200 lg:justify-end">
            <div
              className="w-full lg:w-2/3 xl:w-6/12"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="2000"
            >
              <div className="bg-gray-100 dark:bg-transparent relative rounded-lg p-8 sm:p-12 shadow-lg">
                <div className="max-w-[570px] mb-12 lg:mb-0">
                  <h1 className="text-6xl font-semibold text-white">
                    Let&rsquo;s chat about your project
                  </h1>
                  <p className="text-xl pt-5 text-gray-400">
                    You can reach us anytime via{" "}
                    <span className="text-white">hello@insynkstudios.com</span>
                  </p>
                </div>
                <form>
                  <div className="mb-6 mt-12">
                    <h2 className="pb-5">Name</h2>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="
                            w-full
                            rounded-lg
                            p-3
                            text-gray-800
                            dark:text-gray-50
                            border-2
                            bg-transparent 
                            border-gray-500
                            dark:border-[#6C6C6C]
                            outline-none
                            focus-visible:shadow-none
                            focus:border-blue-200
                            "
                      name="full_name"
                      id="full_name"
                    />
                  </div>
                  <div className="mb-6">
                    <h2 className="pb-5">Email</h2>
                    <input
                      type="email"
                      placeholder="you@company.com"
                      className="
                            w-full
                            rounded-lg
                            p-3
                            text-gray-800
                            dark:text-gray-50
                            border-2
                            bg-transparent 
                            border-gray-500
                            dark:border-[#6C6C6C]
                            outline-none
                            focus-visible:shadow-none
                            focus:border-blue-200
                            "
                      name="email"
                      id="email"
                    />
                  </div>

                  <div className="mb-6">
                    <h2 className="pb-5">How can we help?</h2>
                    <textarea
                      rows="6"
                      placeholder="Tell us a little about your project..."
                      className="w-full resize-none
                      rounded-lg
                            p-3
                            text-gray-800
                            dark:text-gray-50
                            border-2
                            bg-transparent 
                            border-gray-500
                            dark:border-[#6C6C6C]
                            outline-none
                            focus-visible:shadow-none
                            focus:border-blue-200
                            "
                      name="message"
                      id="message"
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="
                            w-full
                            text-black
                            hover:text-black
                            bg-white 
                            rounded-lg
                            border border-primary
                            dark:border-[#6C6C6C]
                            p-3
                            transition
                            ease-in-out
                            duration-500
                            hover:bg-gray-400
                            "
                      onClick={preventClick}
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default Form;
