import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MenuContext from './components/MenuContext';
import RequireAuth from './components/RequireAuth';
import Loading from './components/Loading';
const Home = React.lazy(() => import('./components/Home'));
const Login = React.lazy(() => import('./components/Login'));
const Buscador = React.lazy(() => import('./components/Buscador'));
const PlatoDetalle = React.lazy(() => import('./components/PlatoDetalle'));


const App = () => {

  return (
    <BrowserRouter>
      <MenuContext>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <RequireAuth>
              <React.Suspense fallback={<Loading />}>
                <Home />
              </React.Suspense>
            </RequireAuth>} />
          <Route path="/login" element={
            <React.Suspense fallback={<Loading />}>
              <Login />
            </React.Suspense>
          } />
          <Route path="/buscador" element={
            <RequireAuth>
              <React.Suspense fallback={<Loading />}>
                <Buscador />
              </React.Suspense>
            </RequireAuth>} />
          <Route path="/plato/:id" element={
            <RequireAuth>
              <React.Suspense fallback={<Loading />}>
                <PlatoDetalle />
              </React.Suspense>
            </RequireAuth>} />
        </Routes>
      </MenuContext>
    </BrowserRouter>

  )
};

export default App