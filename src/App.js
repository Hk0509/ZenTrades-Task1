// Import necessary libraries
import React from 'react';
import './App.css'
import { QueryClient, QueryClientProvider } from 'react-query';
import ProductList from './components/ProductList';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ProductList />
    </QueryClientProvider>
  );
};

export default App;