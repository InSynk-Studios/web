import { Fragment } from "react";

function Form() {
  return (
    <Fragment>
      <section
        className="py-20 px-4 lg:px-16 overflow-hidden relative z-10"
        data-aos="fade-up"
        id="contact"
      >
        <div className="container">
          <div className="flex flex-col lg:flex-row lg:items-center text-slate-900 dark:text-gray-200 lg:justify-between -mx-4">
            <div
              className="w-full lg:w-1/2 xl:w-6/12 px-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="max-w-[570px] mb-12 lg:mb-0">
                <h1 className="text-7xl text-white">
                  Let&rsquo;s{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-violet-400 to-violet-900">
                    chat
                  </span>{" "}
                  about
                  <br /> your project{" "}
                </h1>
                <p className="text-xl pt-5 text-gray-400">
                  You can reach us anytime via hello@insynkstudios.com
                </p>
              </div>
            </div>
            <div
              className="w-full lg:w-1/2 xl:w-5/12 px-4"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="2000"
            >
              <div className="bg-gray-100 dark:bg-transparent relative rounded-lg p-8 sm:p-12 shadow-lg">
                <form>
                  <div className="mb-6">
                    <h2 className="pb-5">Name</h2>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="
                            w-full
                            rounded
                            p-3
                            text-gray-800
                            dark:text-gray-50
                            border-2
                            bg-transparent 
                            border-gray-500
                            dark:border-slate-600
                            outline-none
                            focus-visible:shadow-none
                            focus:border-primary
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
                            rounded
                            p-3
                            text-gray-800
                            dark:text-gray-50
                            border-2
                            bg-transparent 
                            border-gray-500
                            dark:border-slate-600
                            outline-none
                            focus-visible:shadow-none
                            focus:border-primary
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
                      className="w-full
                      rounded
                            p-3
                            text-gray-800
                            dark:text-gray-50
                            border-2
                            bg-transparent 
                            border-gray-500
                            dark:border-slate-600
                            outline-none
                            focus-visible:shadow-none
                            focus:border-primary
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
                            rounded
                            border border-primary
                            dark:border-slate-600
                            p-3
                            transition
                            ease-in-out
                            duration-500
                            hover:bg-violet-300
                            "
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
