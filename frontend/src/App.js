import React from "react";
import './index.css';
import MainPage from './layouts/mainPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  )

  
}

export default App;
