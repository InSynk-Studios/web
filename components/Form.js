import { Fragment, useRef, useState, useEffect } from "react";
import { useRouter } from "next/router";
import linkedinsvg from "../assets/socials/linkedin.svg";
import twittersvg from "../assets/socials/twitter.svg";
import instagramsvg from "../assets/socials/instagram.svg";
import Image from "next/image";

const isEmpty = (value) => value.trim() === "";

function Form() {
  const router = useRouter();
  const [didSubmit, setDidSubmit] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    email: true,
    message: true,
  });

  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const messageInputRef = useRef();

  // Checking if the form is valid
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
      email: enteredEmailIsValid,
      message: enteredMessageIsValid,
    });

    // Combining all the validations
    const formIsValid =
      enteredNameIsValid && enteredEmailIsValid && enteredMessageIsValid;

    // If form inputs are invalid then return nothing
    if (!formIsValid) {
      return;
    }

    // Submit form data
    setIsSubmitting(true);
    fetch("https://formsubmit.co/ajax/support@insynkstudios.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: enteredName,
        email: enteredEmail,
        message: enteredMessage,
      }),
    }).then((response) => {
      console.log(response.json());
    });
    setIsSubmitting(false);
    setDidSubmit(true);
  };

  // Checking if form is submitted then redirect to the thank-you page
  useEffect(() => {
    if (didSubmit) {
      router.push("/thank-you");
    }
  }, [didSubmit, router]);

  return (
    <Fragment>
      <section className="overflow-hidden relative font-inter-400" id="contact">
        <div className="container">
          <div className="flow-root">
            <div className="float-left lg:absolute bottom-11 text-white text-xl">
              Reach us out at :
              <br />
              <a
                href="aman@insynkstudios.com"
                target="_blank"
                rel="noreferrer"
                className="hover:underline text-violet-500"
              >
                aman@insynkstudios.com
              </a>
              <br />
              <a
                href="vishnu@insynkstudios.com"
                target="_blank"
                rel="noreferrer"
                className="hover:underline text-violet-500"
              >
                vishnu@insynkstudios.com
              </a>
              <p className="py-6">
                Call us at :
                <br />
                <span className="text-violet-500">+91 86965 65066</span>
                <br />
                <span className="text-violet-500">+91 8009342234</span>
              </p>
              <p>
                Our socials :
                <br />
                <a
                  href="https://www.linkedin.com/company/0xinsynkstudios"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image src={linkedinsvg} alt="linkedin" />
                </a>
                <a
                  href="https://twitter.com/0xinsynkstudios"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image src={twittersvg} alt="twitter" />
                </a>
                <a
                  href="https://www.instagram.com/0xinsynkstudios/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image src={instagramsvg} alt="instagram" />
                </a>
              </p>
            </div>

            <div className="float-right relative lg:left-10 rounded-lg py-8 sm:p-12 shadow-lg">
              <div className="max-w-xl mb-12 lg:mb-0">
                <h1 className="text-4xl md:text-6xl font-semibold text-white">
                  Let&rsquo;s chat about your project
                </h1>
              </div>

              <form role="form" onSubmit={confirmHandler}>
                <input type="hidden" name="_captcha" value="false" />

                <div
                  className={`${"mb-6 mt-12"} ${
                    formInputValidity.name ? "" : "border-red-500"
                  }`}
                >
                  <div className="pb-3 text-white">
                    <label htmlFor="name">Name</label>
                  </div>
                  <input type="text" name="_honey" className="hidden" />
                  <input
                    type="text"
                    placeholder="Your Name"
                    name="name"
                    className={`${"w-full rounded-lg p-3 text-gray-50 bg-transparent border-2 border-grey-200 outline-none focus-visible:shadow-none focus:border-blue-200"}
                      ${!formInputValidity.name && "border-red-500"}`}
                    ref={nameInputRef}
                    id="name"
                  />
                </div>
                <div
                  className={`${"mb-6"} ${
                    formInputValidity.email ? "" : "border-red-500"
                  }`}
                >
                  <div className="pb-3 text-white">
                    <label htmlFor="address">Email</label>
                  </div>
                  <input
                    type="email"
                    placeholder="you@company.com"
                    id="email"
                    name="email"
                    ref={emailInputRef}
                    className={`${"w-full rounded-lg p-3 text-gray-50 bg-transparent border-2 border-grey-200 outline-none focus-visible:shadow-none focus:border-blue-200"}
                      ${!formInputValidity.email && "border-red-500"}`}
                    required
                  />
                </div>

                <div
                  className={`${"mb-6"} ${
                    formInputValidity.message ? "" : "border-red-500"
                  }`}
                >
                  <div className="pb-3 text-white">
                    <label htmlFor="message">How can we help?</label>
                  </div>
                  <textarea
                    rows="6"
                    placeholder="Tell us a little about your project..."
                    id="message"
                    name="message"
                    className={`${"w-full resize-none rounded-lg p-3 text-gray-50 bg-transparent border-2 border-grey-200 outline-none focus-visible:shadow-none focus:border-blue-200"}
                      ${!formInputValidity.message && "border-red-500"}`}
                    ref={messageInputRef}
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full text-black hover:text-white bg-white rounded-lg border border-white p-3 transition ease-in-out duration-200 hover:bg-transparent"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {!isSubmitting && didSubmit}
    </Fragment>
  );
}

export default Form;
