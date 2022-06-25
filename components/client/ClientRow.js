import Image from "next/image";
import { Fragment } from "react";

const ClientCard = (props) => {
  return (
    <Fragment>
      {/* Using custom `style` in the following to use marginLeft and marginTop with "-1px"
      so that the borders overlap and do not append with each other. */}
      <div
        style={{ marginTop: "-1px", marginLeft: "-1px" }}
        className={`flex flex-col items-center px-10 py-4 border border-gray-600 ${props.className}`}
      >
        <a
          href={props.client.url}
          target="_blank"
          rel="noreferrer"
          className="w-20 md:w-28 hover:opacity-60 transition ease-in-out duration-200"
        >
          <Image src={props.client.image} alt={props.client.name} />
        </a>
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
