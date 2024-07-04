import axios from 'axios';
import { Product } from '../types/Product';

const API_BASE_URL = 'http://20.244.56.144/test';

const fetchProducts = async (company: string, category: string, top: number, minPrice: number, maxPrice: number): Promise<Product[]> => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/companies/${company}/categories/${category}/products`, {
        params: { top, minPrice, maxPrice },
        timeout: 5000,
      }
    );

    return response.data.map((product: any, index: number) => ({
      id: `${company}-${category}-${product.productName}-${index}`, // Generate a unique ID
      name: product.productName,
      price: product.price,
      rating: product.rating,
      discount: product.discount,
      availability: product.availability === 'yes',
      image: 'https://via.placeholder.com/150', // Placeholder image
    }));
  } catch (error: unknown) { // Use unknown type
    if (error instanceof Error) {
      console.error(`Error fetching products: ${error.message}`);
    } else {
      console.error(`Unknown error fetching products: ${error}`);
    }
    return [];
  }
};

const fetchProductById = async (productId: string): Promise<Product | null> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products/${productId}`);

    const product: Product = {
      id: response.data.id, // Assuming response contains product ID
      name: response.data.name,
      price: response.data.price,
      rating: response.data.rating,
      discount: response.data.discount,
      availability: response.data.availability === 'yes',
      image: 'https://via.placeholder.com/150', // Placeholder image
    };

    return product;
  } catch (error: unknown) { // Use unknown type
    if (error instanceof Error) {
      console.error(`Error fetching product by ID: ${error.message}`);
    } else {
      console.error(`Unknown error fetching product by ID: ${error}`);
    }
    return null;
  }
};

export { fetchProducts, fetchProductById };
