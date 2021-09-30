import React from "react";
import TableBody from "./tableBody";

const Table = ({ columns, data }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          {columns.map(
            (column: {
              path: any;
              key: any;
              label:
                | boolean
                | React.ReactChild
                | React.ReactFragment
                | React.ReactPortal
                | null
                | undefined;
            }) => (
              <th className="clickable" key={column.path || column.key}>
                {column.label}
              </th>
            )
          )}
        </tr>
      </thead>
      <TableBody columns={columns} data={data} />
    </table>
  );
};

export default Table;
