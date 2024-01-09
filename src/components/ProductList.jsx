// Import necessary libraries
import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import TableContainer from './TableContainer';

// Fetching data from api
const fetchData = async () => {
  const response = await axios.get('https://s3.amazonaws.com/open-to-cors/assignment.json'); 
  return response.data;
};

// ProductList component
const ProductList = () => {
  // Handling data
  const { data, error, isLoading } = useQuery('products', fetchData);

  // Handling loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Handling error 
  if (error) {
    return <div>Error: {error.message}</div>;
  }

//   const columns = [
//     { id: '1', label: 'Id' },
//     { id: '2', label: 'Sub Category' },
//     { id: '3', label: 'Title' },
//     { id: '4', label: 'Price' },
//     { id: '5', label: 'Popularity' },
//   ]
  //Display 
  return (
    <div>
      <h1>Product List</h1>
      {data && data.count > 0 && (
        // <ul>
        //   {Object.keys(data.products).map((productId) => {
        //     const product = data.products[productId];
        //     return (
        //       <li key={productId}>
        //         <strong>{product.title}</strong> - {product.price} - Popularity: {product.popularity}
        //       </li>
        //     );
        //   })}
        // </ul>
        <TableContainer data = {data}/>
      )}
    </div>
  );
};

export default ProductList;