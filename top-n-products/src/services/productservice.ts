import axios from 'axios';

const API_BASE_URL = 'http://your-test-server.com/api';

const fetchProducts = async (company: string, category: string) => {
  const response = await axios.get(`${API_BASE_URL}/products`, {
    params: { company, category },
    timeout: 5000,
  });
  return response.data;
};

export { fetchProducts };
