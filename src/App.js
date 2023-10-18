import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard/Dashboard.jsx'; 
import Product from './pages/Product/Product.jsx';
import Income from './pages/Income/Income.jsx';
import Customers from './pages/Customers/Customers.jsx';
import Promote from './pages/Promote/Promote.jsx';
import Help from './pages/Help/Help.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/product" element={<Product />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/income" element={<Income />} />
          <Route path="/promote" element={<Promote />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
    
  );
};

export default App;