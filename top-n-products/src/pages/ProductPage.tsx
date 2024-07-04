import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetails from '../components/ProductDetails'; // Adjust path as needed
import { fetchProductById } from '../services/productService'; // Ensure correct import path

const ProductPage: React.FC = () => {
  const { productId } = useParams<{ productId?: string }>(); // Make productId optional with `?`
  const [product, setProduct] = useState<any>(null); // Adjust type as per your product structure

  useEffect(() => {
    const loadProduct = async () => {
      if (productId) {
        const productData = await fetchProductById(productId);
        setProduct(productData);
      }
    };

    loadProduct();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Product Details</h1>
      <ProductDetails product={product} />
    </div>
  );
};

export default ProductPage;
