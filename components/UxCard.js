export default function UxCard() {
  return (
    <div className="py-16 backdrop-filter backdrop-blur-lg overflow-hidden">
      <div className="container m-auto px-6 space-y-8 text-white md:px-12">
        <div>
          <h2 className="mt-4 text-4xl text-white font-bold md:text-6xl">
            Key benefits✨
          </h2>
        </div>
        <div className="mt-16 grid border divide-x divide-y rounded-xl overflow-hidden sm:grid-cols-2 lg:divide-y-0 lg:grid-cols-2 xl:grid-cols-2">
          <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
            <div className="relative p-8 space-y-8">
              <img
                src="https://tailus.io/sources/blocks/stacked/preview/images/avatars/package-delivery.png"
                class="w-10"
                width="512"
                height="512"
                alt="burger illustration"
              />

              <div className="space-y-2">
                <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-blue-600">
                  First benefit
                </h5>
                <p className="text-sm text-gray-600">
                  Neque Dolor, fugiat non cum doloribus aperiam voluptates
                  nostrum. Neque Dolor, fugiat non cum doloribus aperiam
                  voluptates nostrum. Neque Dolor, fugiat non cum doloribus
                  aperiam voluptates nostrum.
                </p>
              </div>
            </div>
          </div>
          <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
            <div className="relative p-8 space-y-8">
              <img
                src="https://tailus.io/sources/blocks/stacked/preview/images/avatars/trowel.png"
                className="w-10"
                width="512"
                height="512"
                alt="burger illustration"
              />

              <div className="space-y-2">
                <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-blue-600">
                  Second benefit
                </h5>
                <p className="text-sm text-gray-600">
                  Neque Dolor, fugiat non cum doloribus aperiam voluptates
                  nostrum. Neque Dolor, fugiat non cum doloribus aperiam
                  voluptates nostrum. Neque Dolor, fugiat non cum doloribus
                  aperiam voluptates nostrum. Neque Dolor, fugiat non cum
                  doloribus aperiam voluptates nostrum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
