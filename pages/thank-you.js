import Link from "next/link";

function ThankYou() {
  return (
    <div className="flex flex-col text-white items-center justify-center h-screen">
      <h1 className="text-6xl font-bold text-center">
        Thank you for your interest!
      </h1>
      <p className="text-center mt-10">
        We will get back to you as soon as possible.
      </p>
      <Link href="/">
        <button
          type="submit"
          className="flex items-center mt-10 text-black hover:text-white bg-white rounded-lg border dark:border-white p-3 transition ease-in-out duration-200 hover:bg-transparent"
        >
          Go to Previous page
        </button>
      </Link>
    </div>
  );
}

export default ThankYou;
