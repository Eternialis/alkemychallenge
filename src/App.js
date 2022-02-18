import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Buscador from './sources/Buscador';
import Home from './sources/Home';
import Login from './sources/Login';
import Navbar from './sources/Navbar';
import PlatoDetalle from './sources/PlatoDetalle';

const App = () => {

  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/buscador" element={<Buscador />} />
        <Route path="/plato" element={<PlatoDetalle />} />
      </Routes>
    </BrowserRouter>

  )
};

export default App