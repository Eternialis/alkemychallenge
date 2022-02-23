import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Buscador from './sources/Buscador';
import Home from './sources/Home';
import Login from './sources/Login';
import MenuContext from './sources/MenuContext';
import Navbar from './sources/Navbar';
import PlatoDetalle from './sources/PlatoDetalle';
import RequireAuth from './sources/RequireAuth';

const App = () => {

  return (
    <BrowserRouter>
      <MenuContext>
        <Navbar />
        <Routes>
          <Route path="/" element={<RequireAuth><Home /></RequireAuth>} />
          <Route path="/login" element={<Login />} />
          <Route path="/buscador" element={<RequireAuth><Buscador /></RequireAuth>} />
          <Route path="/plato/:id" element={<RequireAuth><PlatoDetalle /></RequireAuth>} />
        </Routes>
      </MenuContext>
    </BrowserRouter>

  )
};

export default App