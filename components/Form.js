import { Fragment, useRef, useState } from "react";

const isEmpty = (value) => value.trim() === "";

function Form(props) {
  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    email: true,
    message: true,
  });

  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const messageInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredMessage = messageInputRef.current.value;

    // Validating input entered by user
    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredEmailIsValid = !isEmpty(enteredEmail);
    const enteredMessageIsValid = !isEmpty(enteredMessage);

    setFormInputValidity({
      name: enteredNameIsValid,
      address: enteredEmailIsValid,
      city: enteredMessageIsValid,
    });

    // assigning the value of formInputValidity to formIsValid
    const formIsValid =
      enteredNameIsValid && enteredEmailIsValid && enteredMessageIsValid;

    // If form inputs are invalid then return nothing
    if (!formIsValid) {
      return;
    }

    // Submit Form data to server
    // ToDo : connet to api server to send data
    props.onSubmit({
      name: enteredName,
      email: enteredEmail,
      message: enteredMessage,
    });
  };

  return (
    <Fragment>
      <section
        className="overflow-hidden relative z-10 font-inter-400"
        id="contact"
      >
        <div className="container">
          <div className="flex flex-col lg:flex-row lg:items-center text-slate-900 dark:text-gray-200 lg:justify-end">
            <div className="w-full lg:w-2/3 xl:w-6/12">
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

                <form onSubmit={confirmHandler}>
                  <div
                    className={`${"mb-6 mt-12"} ${
                      formInputValidity.name ? "" : "border-red-500"
                    }`}
                  >
                    <lable htmlFor="name" className="pb-12">
                      Name
                    </lable>
                    <input
                      type="text"
                      placeholder="Your Name"
                      id="name"
                      ref={nameInputRef}
                      className={`${"w-full rounded-lg p-3 text-gray-800 dark:text-gray-50 bg-transparent border-2 border-gray-500  dark:border-grey-200 outline-none focus-visible:shadow-none focus:border-blue-200"}
                      ${!formInputValidity.name && "dark:border-red-500"}`}
                    />
                  </div>
                  <div
                    className={`${"mb-6"} ${
                      formInputValidity.email ? "" : "border-red-500"
                    }`}
                  >
                    <label htmlFor="address" className="pb-5">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="you@company.com"
                      id="email"
                      ref={emailInputRef}
                      className={`${"w-full rounded-lg p-3 text-gray-800 dark:text-gray-50 bg-transparent border-2 border-gray-500  dark:border-grey-200 outline-none focus-visible:shadow-none focus:border-blue-200"}
                      ${!formInputValidity.email && "dark:border-red-500"}`}
                    />
                  </div>

                  <div
                    className={`${"mb-6"} ${
                      formInputValidity.message ? "" : "border-red-500"
                    }`}
                  >
                    <label htmlFor="message" className="pb-5">
                      How can we help?
                    </label>
                    <textarea
                      rows="6"
                      placeholder="Tell us a little about your project..."
                      id="message"
                      ref={messageInputRef}
                      className={`${"w-full resize-none rounded-lg p-3 text-gray-800 dark:text-gray-50 bg-transparent border-2 border-gray-500  dark:border-grey-200 outline-none focus-visible:shadow-none focus:border-blue-200"}
                      ${!formInputValidity.email && "dark:border-red-500"}`}
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
