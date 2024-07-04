import axios from 'axios';

const API_URL = 'http://20.244.56.144/test';

export const fetchProducts = async (company: string, category: string, top: number, minPrice: number, maxPrice: number) => {
  const url = `${API_URL}/companies/${company}/categories/${category}/products?top=${top}&minPrice=${minPrice}&maxPrice=${maxPrice}`;
  const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzIwMTAwNzQzLCJpYXQiOjE3MjAxMDA0NDMsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImQ2YTgwYTgwLTc0OTgtNDA2Ni04ZmM0LTljMjhkMTIxOGYwNSIsInN1YiI6ImNzMjBiMDQ1QGlpdHRwLmFjLmluIn0sImNvbXBhbnlOYW1lIjoiRXhhbSBQcm9ibGVtIiwiY2xpZW50SUQiOiJkNmE4MGE4MC03NDk4LTQwNjYtOGZjNC05YzI4ZDEyMThmMDUiLCJjbGllbnRTZWNyZXQiOiJnV0dmeHZCeXp4c2tuSFVxIiwib3duZXJOYW1lIjoiU21pdCBZIiwib3duZXJFbWFpbCI6ImNzMjBiMDQ1QGlpdHRwLmFjLmluIiwicm9sbE5vIjoiQ1MyMEIwNDUifQ.933jVG5SqW27hNJ72Wq5N0oZm7vWNGTjoFNI2Gwf2U4'; // Replace with your actual token

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching products: ${error}`);
    return [];
  }
};

export const fetchProductById = async (productId: string) => {
  const url = `${API_URL}/products/${productId}`; // Adjust as per your API endpoint

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(`Error fetching product by ID: ${error}`);
    return null;
  }
};
