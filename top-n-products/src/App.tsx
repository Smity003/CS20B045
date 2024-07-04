import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllProductsPage from './pages/AllProductsPage';
import ProductPage from './pages/ProductPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AllProductsPage />} />
        <Route path="/product/:productId" element={<ProductPage />} />
      </Routes>
    </Router>
  );
};

export default App;
