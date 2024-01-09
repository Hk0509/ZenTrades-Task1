import React from "react";

// TableContainer component
const TableContainer = ({ data }) => {
  // Sort the products based on popularity in descending order
  const sortedProducts = Object.values(data.products).sort((a, b) => b.popularity - a.popularity);

  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Sub Category</th>
          <th>Title</th>
          <th>Price</th>
          <th>Popularity</th>
        </tr>
      </thead>
      <tbody>
        {sortedProducts.map((product, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{product.subcategory}</td>
            <td>{product.title}</td>
            <td>{product.price}</td>
            <td>{product.popularity}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableContainer;
