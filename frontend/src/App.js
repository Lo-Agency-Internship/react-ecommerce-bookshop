import React from "react";
import './index.css';
import MainLayout from './layouts/main';
import MainPage from './pages/main';
import ProductsPage from './pages/products';
import ProductPage from './pages/products/_id';
import { Route, Routes } from 'react-router-dom';
import {ApiProvider} from "./context/api";

function App() {
  return (
    <ApiProvider>
      <MainLayout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/products/:id" element={<ProductPage/>} />
          <Route path="/products" element={<ProductsPage/>} />
        </Routes>
      </MainLayout>
    </ApiProvider>
  )

  
}

export default App;
