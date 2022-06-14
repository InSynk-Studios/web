import Link from "next/link";

function thanks() {
  return (
    <div className="flex flex-col text-white items-center justify-center h-screen">
      <h1 className="text-3xl font-bold text-center">
        Thank you for your interest!
      </h1>
      <p className="text-center">
        We will get back to you as soon as possible.
      </p>
      <Link href="/">
        <button className="border border-teal-500 text-teal-500 rounded-sm font-bold py-4 px-6 mt-8 flex items-center hover:bg-teal-500 hover:text-white">
          <svg
            className="h-5 w-5 mr-2 fill-current"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="-49 141 512 512"
            xmlSpace="preserve"
          >
            <path
              id="XMLID_10_"
              d="M438,372H36.355l72.822-72.822c9.763-9.763,9.763-25.592,0-35.355c-9.763-9.764-25.593-9.762-35.355,0 l-115.5,115.5C-46.366,384.01-49,390.369-49,397s2.634,12.989,7.322,17.678l115.5,115.5c9.763,9.762,25.593,9.763,35.355,0 c9.763-9.763,9.763-25.592,0-35.355L36.355,422H438c13.808,0,25-11.193,25-25S451.808,372,438,372z"
            ></path>
          </svg>
          Previous page
        </button>
      </Link>
    </div>
  );
}

export default thanks;
