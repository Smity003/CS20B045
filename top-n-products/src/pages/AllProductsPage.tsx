// src/pages/AllProductsPage.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductList from '../components/ProductList';
import { fetchProducts } from '../services/productService';
import { Product as ProductType } from '../types/Product';

const AllProductsPage: React.FC = () => {
  const { company, category } = useParams<{ company?: string; category?: string }>() || { company: '', category: '' }; // Make company and category optional

  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        if (company && category) {
          const fetchedProducts = await fetchProducts(company, category, 10, 1, 10000); // Example parameters
          setProducts(fetchedProducts);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    loadProducts();
  }, [company, category]);

  return (
    <div>
      <h1>Top 10 {category}s sold on {company}</h1>
      <ProductList products={products} />
    </div>
  );
};

export default AllProductsPage;
