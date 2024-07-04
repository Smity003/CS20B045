// productService.ts

import axios from 'axios';

const API_BASE_URL = 'http://20.244.56.144/test';

/**
 * Fetches a list of products based on given parameters from the API using Axios.
 * @param company The name of the company from which to fetch products.
 * @param category The category of products to fetch.
 * @param top The number of top products to fetch.
 * @param minPrice The minimum price range for products.
 * @param maxPrice The maximum price range for products.
 * @param accessToken Optional access token for authentication.
 * @returns A promise that resolves to an array of product objects.
 */
const fetchProducts = async (
  company: string,
  category: string,
  top: number,
  minPrice: number,
  maxPrice: number,
  accessToken?: string
): Promise<any[]> => {
  const url = `${API_BASE_URL}/companies/${company}/categories/${category}/products`;

  try {
    const response = await axios.get(url, {
      params: {
        top,
        minPrice,
        maxPrice
      },
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(`Error fetching products: ${error.message}`);
    } else {
      console.error(`Error fetching products: ${error}`);
    }
    return [];
  }
};

/**
 * Fetches a single product by its ID from the API using Axios.
 * @param productId The unique identifier of the product to fetch.
 * @param accessToken Optional access token for authentication.
 * @returns A promise that resolves to the product object or null if not found.
 */
const fetchProductById = async (productId: string, accessToken?: string): Promise<any | null> => {
  const url = `${API_BASE_URL}/products/${productId}`;

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(`Error fetching product by ID: ${error.message}`);
    } else {
      console.error(`Error fetching product by ID: ${error}`);
    }
    return null;
  }
};

export { fetchProducts, fetchProductById };
