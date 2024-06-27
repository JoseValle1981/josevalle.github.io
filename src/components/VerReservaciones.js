// src/components/VerReservaciones.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './VerReservaciones.css';

const VerReservaciones = () => {
  const [reservaciones, setReservaciones] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/reservaciones')
      .then(response => {
        setReservaciones(response.data);
      })
      .catch(error => {
        console.error('Error al obtener las reservaciones:', error);
      });
  }, []);

  return (
    <div className="ver-reservaciones">
      <h1>Reservaciones</h1>
      <ul>
        {reservaciones.map(reservacion => (
          <li key={reservacion.id}>
            <p><strong>Nombre:</strong> {reservacion.nombre}</p>
            <p><strong>Email:</strong> {reservacion.email}</p>
            <p><strong>Teléfono:</strong> {reservacion.telefono}</p>
            <p><strong>Fecha:</strong> {reservacion.fecha}</p>
            <p><strong>Hora:</strong> {reservacion.hora}</p>
            <p><strong>Personas:</strong> {reservacion.personas}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VerReservaciones;
