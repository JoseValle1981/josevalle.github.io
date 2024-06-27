import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'; // Importa Routes y Route
import './App.css';
import Header from './components/Header';
import Productos from './components/Productos';
import Reservacion from './components/Reservacion';
import AgregarProducto from './components/AgregarProducto';
import VerReservaciones from './components/VerReservaciones';

function App() {
  return (
    <div className="App">
      <Header />
      <nav>
        <Link to="/">Menú</Link> | <Link to="/reservar">Reservar</Link> | <Link to="/agregar-producto">Modificar-Menú</Link> | <Link to="/reservaciones">Ver Reservaciones</Link>
      </nav>
      <Routes> {/* Cambia Switch por Routes */}
        <Route exact path="/" element={<Productos />} /> {/* Cambia component por element y usa JSX */}
        <Route path="/reservar" element={<Reservacion />} />
        <Route path="/agregar-producto" element={<AgregarProducto />} />
        <Route path="/reservaciones" element={<VerReservaciones />} />
      </Routes>
    </div>
  );
}

export default App;

