import './App.css';
import React from 'react';
import Navbar from './navbar_folder/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
// import { Container, Row, Col, Button } from 'react-bootstrap'; // Import Bootstrap components as needed

import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Content from './pages/Content';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />          
          <Route path="/content" element={<Content />} />
          <Route path="/service" element={<Service />} />   
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
