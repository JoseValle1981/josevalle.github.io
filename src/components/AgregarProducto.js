import React, { useState } from 'react';
import axios from 'axios';

const AgregarProducto = () => {
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:3001/productos', {
      nombre,
      precio: parseFloat(precio),
      descripcion
    })
    .then(response => {
      alert('Producto agregado con éxito!');
      setNombre('');
      setPrecio('');
      setDescripcion('');
    })
    .catch(error => {
      console.error('Error al agregar el producto:', error);
    });
  };

  return (
    <div>
      <h1>Agregar Producto</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
        </div>
        <div>
          <label>Precio:</label>
          <input type="number" step="0.01" value={precio} onChange={(e) => setPrecio(e.target.value)} required />
        </div>
        <div>
          <label>Descripción:</label>
          <textarea value={descripcion} onChange={(e) => setDescripcion(e.target.value)} required></textarea>
        </div>
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
};

export default AgregarProducto;
