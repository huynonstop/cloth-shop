// import { useState, useEffect, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import MainLayout from './component/layout/MainLayout';
import Auth from './pages/auth/Auth';

function Shop() {
  return <div>Hi i'm shop</div>;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Auth />} />
      </Route>
    </Routes>
  );
}

export default App;
