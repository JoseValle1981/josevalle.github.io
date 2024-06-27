// src/components/Header.js

import React from 'react';
import './Header.css';  // Importa el archivo CSS específico para el header

const Header = () => {
  return (
    <header className="header">
      <img src="/restaurant-logo.jpg" alt="Logo del Restaurante" className="logo" />
      <h1 className="nombre-restaurante">Restaurante Las Delicias</h1>
    </header>
  );
};

export default Header;
