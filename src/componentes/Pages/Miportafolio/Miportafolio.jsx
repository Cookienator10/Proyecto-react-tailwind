import React, { useState } from 'react';

export const Miportafolio = () => {
  // Definir el estado para el nombre y la descripción de la tarea
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');

  // Función para manejar el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes realizar cualquier acción con los datos de la tarea, como enviarlos a un servidor o almacenarlos localmente
    console.log("Nombre de la tarea:", nombre);
    console.log("Descripción de la tarea:", descripcion);
    // Limpiar los campos después del envío
    setNombre('');
    setDescripcion('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre de la tarea:
        <input
          type="text"
          value={nombre}
          onChange={(event) => setNombre(event.target.value)}
        />
      </label>
      <br />
      <label>
        Descripción de la tarea:
        <input
          type="text"
          value={descripcion}
          onChange={(event) => setDescripcion(event.target.value)}
        />
      </label>
      <br />
      <button type="submit">Guardar Tarea</button>
    </form>
  );
}

export default Miportafolio;
