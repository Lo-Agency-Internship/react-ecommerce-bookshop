import React from "react";
import './index.css';
import MainPage from './layouts/MainPage';
import SignIn from './layouts/SignIn';
import SignUp from './layouts/SignUp';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/" element={<MainPage />} />
    </Routes>
  )
}

export default App;
