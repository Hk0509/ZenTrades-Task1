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

  return (
    <div>
      <h1>Product List</h1>
      {data && data.count > 0 && (
        <TableContainer data = {data}/>
      )}
    </div>
  );
};

export default ProductList;