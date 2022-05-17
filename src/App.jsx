// import { useState, useEffect, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import MainLayout from './component/layout/MainLayout';
import Auth from './pages/auth/Auth';
import Shop from './pages/shop/Shop';
import Checkout from './pages/checkout/Checkout';


function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Auth />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
