import React, { useState } from 'react';
import axios from 'axios';

const Reservacion = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [personas, setPersonas] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:3001/reservaciones', {
      nombre,
      email,
      telefono,
      fecha,
      hora,
      personas
    })
    .then(response => {
      alert('Reservación realizada con éxito!');
      setNombre('');
      setEmail('');
      setTelefono('');
      setFecha('');
      setHora('');
      setPersonas(1);
    })
    .catch(error => {
      console.error('Error al realizar la reservación:', error);
    });
  };

  return (
    <div>
      <h1>Reservar una Mesa</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Teléfono:</label>
          <input type="tel" value={telefono} onChange={(e) => setTelefono(e.target.value)} required />
        </div>
        <div>
          <label>Fecha:</label>
          <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} required />
        </div>
        <div>
          <label>Hora:</label>
          <input type="time" value={hora} onChange={(e) => setHora(e.target.value)} required />
        </div>
        <div>
          <label>Número de personas:</label>
          <input type="number" value={personas} onChange={(e) => setPersonas(e.target.value)} min="1" required />
        </div>
        <button type="submit">Reservar</button>
      </form>
    </div>
  );
};

export default Reservacion;
