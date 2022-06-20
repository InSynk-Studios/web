import ClientRow from "./client/ClientRow";

function Client() {
  var row = [];
  for (var i = 0; i < 3; i++) {
    row.push(<ClientRow key={i} />);
  }

  return (
    <div className="my-40 text-white">
      <div className="max-w-screen-xl mx-auto">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-4xl font-inter-400 font-semibold tracking-tight sm:text-5xl">
            Our clients love us
          </h2>
        </div>

        <div className="grid grid-cols-2 mt-16 sm:grid-cols-2 lg:grid-cols-4">
          <div className="border-l border-gray-600">{row[0]}</div>
          {row}
        </div>
      </div>
    </div>
  );
}

export default Client;
