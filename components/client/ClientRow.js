import { Fragment } from "react";

const ClientCard = (props) => {
  return (
    <Fragment>
      {/* Using custom `style` in the following to use marginLeft and marginTop with "-1px"
      so that the borders overlap and do not append with each other. */}
      <div
        style={{ marginTop: "-1px", marginLeft: "-1px" }}
        className={`flex flex-col items-center p-10 border border-gray-600 ${props.className}`}
      >
        <div className="w-32 h-10 rounded-2xl bg-neutral-800 text-white "></div>
      </div>
    </Fragment>
  );
};

const ClientRow = ({ clients, className }) => {
  return (
    <div
      className={`flex flex-wrap justify-center border-gray-600 ${className}`}
    >
      {clients.map((client) => (
        <ClientCard
          className="w-full md:w-1/2 lg:w-1/4"
          client={client}
          key={client.id}
        />
      ))}
    </div>
  );
};

export default ClientRow;
