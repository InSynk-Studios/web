export default function UxCard() {
  return (
    <section className="container px-6 py-4 mx-auto">
      <div className="grid gap-6 mb-8 md:grid-cols-2 lg:grid-cols-4 justify-center">
        {/* <!-- Card 1 --> */}
        <div className="flex items-center p-4 bg-white border-2 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800">
          <div className="p-3 mr-4 bg-blue-500 text-white rounded-full">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z"
              ></path>
            </svg>
          </div>
          <div>
            <p className="mb-2 text-sm font-medium text-white">Projects</p>
            <p className="text-sm font-normal text-white">
              Unlimted projects for you
            </p>
          </div>
        </div>

        {/* <!-- Card 2 --> */}
        <div className="flex items-center p-4 bg-white border-2 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800">
          <div className="p-3 mr-4 bg-blue-500 text-white rounded-full">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
              ></path>
            </svg>
          </div>
          <div>
            <p className="mb-2 text-sm font-medium text-white">Analytics</p>
            <p className="text-sm font-normal text-white">
              User and customer analytics
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
