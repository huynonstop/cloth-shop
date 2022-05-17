import { useState, useEffect, useCallback } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from './pages/home/Home';
import MainLayout from './component/layout/MainLayout';
import SignIn from './pages/signin/SignIn';

const Shop = () => {
  return <div>Hi i'm shop</div>
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />}></Route>
        <Route path='sign-in' element={<SignIn />}></Route>
      </Route>
    </Routes>
  );
}

export default App
