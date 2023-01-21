
import React from 'react';
 

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Layout from './pages/Layout';
import Contact from './pages/Contact';
 
export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} /> 
        <Route path="contact" element={<Contact />} /> 
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

 
