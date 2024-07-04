import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetails from '../components/ProductDetails';
import { fetchProductById } from '../services/productService';

const ProductPage: React.FC = () => {
  const { productId } = useParams<{ productId?: string }>(); // Make productId optional with `?`
  const [product, setProduct] = React.useState<any>(null);

  useEffect(() => {
    const loadProduct = async () => {
      if (!productId) return; // Handle undefined case

      const product = await fetchProductById(productId);
      setProduct(product);
    };

    loadProduct();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <p>Rating: {product.rating}</p>
      <p>Discount: {product.discount}%</p>
      <p>Availability: {product.availability ? 'In Stock' : 'Out of Stock'}</p>
    </div>
  );
};

export default ProductPage;
