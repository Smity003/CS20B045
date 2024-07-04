// src/components/Product.tsx (or Product.tsx after renaming)
import React from 'react';
import { Product as ProductType } from '../types/Product';

interface Props {
  product: ProductType;
}

const Product: React.FC<Props> = ({ product }) => {
  return (
    <div className="product-card">
      <h2>{product.productName}</h2>
      <p>Price: ${product.price}</p>
      <p>Rating: {product.rating}</p>
      <p>Discount: {product.discount}%</p>
      <p>Availability: {product.availability}</p>
    </div>
  );
};

export default Product;
