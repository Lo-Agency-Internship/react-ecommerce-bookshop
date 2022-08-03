import React from "react";
import './index.css';
import MainLayout from './layouts/main';
import MainPage from './pages/main';
import ProductsPage from './pages/products';
import ProductPage from './pages/products/_id';
import { Route, Routes } from 'react-router-dom';
import { ApiProvider } from "./context/api";
import PageNotFound from "./components/molecules/pageNotFound";

function App() {
  return (
    //userProvider
    <ApiProvider>
      <MainLayout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </MainLayout>
    </ApiProvider>
  )


}

export default App;
