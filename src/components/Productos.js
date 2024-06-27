import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Productos.css'; // Importa el archivo CSS específico

const Productos = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/productos')
      .then(response => {
        setProductos(response.data);
      })
      .catch(error => {
        console.error('Error al obtener los productos:', error);
      });
  }, []);

  return (
    <div className="productos-container">
      <h1>Menú</h1>
      <ul>
        {productos.map(producto => (
          <li key={producto.id}>
            <h3>{producto.nombre}</h3>
            <p>Precio: ${producto.precio}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Productos;

