// AllProductsPage.tsx

import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../services/productService'; // Ensure correct import path
import ProductList from '../components/ProductList'; // Example component, adjust as needed
import { Product } from '../types/Product'; // Ensure correct import path for Product type

const AllProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const company = 'AMZ'; // Replace with actual company name
  const category = 'Laptop'; // Replace with actual category
  const top = 10;
  const minPrice = 1;
  const maxPrice = 10000;
  const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ...'; // Replace with your actual access token

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const fetchedProducts = await fetchProducts(company, category, top, minPrice, maxPrice, accessToken);
        setProducts(fetchedProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchAllProducts();
  }, []); // Empty dependency array ensures it runs once on component mount

  return (
    <div>
      <h1>Top {top} {category}s sold on {company}</h1>
      <ProductList products={products} /> {/* Example usage, adjust as per your component structure */}
    </div>
  );
};

export default AllProductsPage;
