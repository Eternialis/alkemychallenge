import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Buscador from './sources/Buscador';
import Home from './sources/Home';
import Login from './sources/Login';
import MenuContext from './sources/MenuContext';
import Navbar from './sources/Navbar';
import PlatoDetalle from './sources/PlatoDetalle';

const App = () => {

  return (
    <BrowserRouter>
      <MenuContext>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/buscador" element={<Buscador />} />
          <Route path="/plato/:id" element={<PlatoDetalle />} />
        </Routes>
      </MenuContext>
    </BrowserRouter>

  )
};

export default App