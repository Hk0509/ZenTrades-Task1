import React from "react";
import { useTable } from "react-table";

// TableContainer component
const TableContainer = ({ columns, data }) => {
  const {
    getTableProps, // Table props from react-table
    getTableBodyProps, // Table body props from react-table
    headerGroups, 
    rows, // Rows for the table based on the data passed
    prepareRow 
  } = useTable({
    columns,
    data
  });

  return (
    <table {...getTableProps()}>
      {/* Table Header */}
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      {/* Table Body */}
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => (
                <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default TableContainer;
