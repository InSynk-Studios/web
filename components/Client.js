import ClientRow from "./client/ClientRow";

function Client() {
  const clients = [
    {
      id: 1,
      name: "Test",
      url: "",
      image: "",
    },
  ];

  return (
    <section className="my-40 text-white">
      <div className="max-w-screen-xl mx-auto">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-inter-400 font-semibold tracking-tight">
            Our clients love us
          </h2>
        </div>

        <ClientRow className="mt-16" clients={clients} />
      </div>
    </section>
  );
}

export default Client;
