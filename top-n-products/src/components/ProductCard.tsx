// src/components/ProductCard.tsx
import React from 'react';
import { Product as ProductType } from '../types/Product';

interface Props {
  product: ProductType;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <div className="border p-4">
      <h2 className="text-xl font-bold">{product.productName}</h2> {/* Adjust as needed */}
      <p>Price: ${product.price}</p>
      <p>Rating: {product.rating}</p>
      <p>Discount: {product.discount}%</p>
    </div>
  );
};

export default ProductCard;
