import { Fragment } from "react";

const tables = [
  {
    id: 1,
    border: "border-r border-y",
  },
  {
    id: 2,
    border: "border-r border-b",
  },
];

const ClientList = (props) => {
  return (
    <Fragment>
      <div
        className={`flex flex-col items-center p-10 border-gray-600 ${props.table.border}`}
      >
        <div className="w-32 h-10 rounded-2xl bg-neutral-800"></div>
      </div>
    </Fragment>
  );
};

const ClientRow = () => {
  return (
    <div>
      {tables.map((table) => (
        <ClientList table={table} key={table.id} />
      ))}
    </div>
  );
};

export default ClientRow;
