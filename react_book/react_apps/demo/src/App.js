
import React from 'react';
 

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Layout from './pages/Layout';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Allusers from './pages/Allusers';
 
export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} /> 
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />  
        <Route path="signup" element={<Signup />} />  
        <Route path="users" element={<Allusers />} />  
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

 
