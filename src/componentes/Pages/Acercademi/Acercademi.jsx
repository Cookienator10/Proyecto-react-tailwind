import React, { useState } from 'react';

export const Acercademi = () => {

const [nombre, setNombre] = useState('');
  const [usuario, setUsuario] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [id, setId] = useState('');
  const [personas, setPersonas] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Verificar si el usuario ya existe en el array de personas
    const existeUsuario = personas.some(persona => persona.usuario === usuario);

    if (existeUsuario) {
      alert('El usuario ya existe en la base de datos.');
    } else {
      // Si el usuario no existe, agregarlo al array de personas
      const nuevaPersona = { nombre, usuario, correo, telefono, id };
      setPersonas([...personas, nuevaPersona]);
      // Limpiar los campos del formulario después de agregar la persona
      setNombre('');
      setUsuario('');
      setCorreo('');
      setTelefono('');
      setId('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      </label>
      <label>
        Usuario:
        <input type="text" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
      </label>
      <label>
        Correo:
        <input type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} />
      </label>
      <label>
        Teléfono:
        <input type="tel" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
      </label>
      <label>
        ID:
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      </label>
      <button type="submit">Registrar</button>
    </form>
  );
}

export default Acercademi;
