import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../services/productService';
import ProductCard from './ProductCard';
import { Product } from '../types/Product';

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState('Laptop');
  const [company, setCompany] = useState('AMZ');
  const [top, setTop] = useState(10);
  const [minPrice, setMinPrice] = useState(1);
  const [maxPrice, setMaxPrice] = useState(10000);

  useEffect(() => {
    const loadProducts = async () => {
      const products = await fetchProducts(company, category, top, minPrice, maxPrice);
      setProducts(products);
    };

    loadProducts();
  }, [category, company, top, minPrice, maxPrice]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
