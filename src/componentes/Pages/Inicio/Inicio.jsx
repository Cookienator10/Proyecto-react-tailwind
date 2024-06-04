import React, { useState } from 'react';
export const Inicio = () =>  {
  const [nombre, setNombre] = useState('');

  const handleInputChange = (event) => {
    setNombre(event.target.value);
  };

  const saludar = () => {
    alert(`Bienvenido ${nombre} (Realizado en clase)`);
  };

  return (
    <div>
      <label>
        Por favor, ingresa tu nombre completo:
        <input
          type="text"
          value={nombre}
          onChange={handleInputChange}
        />
      </label>
      <button onClick={saludar}>Saludar</button>
    </div>
  );
}

export default Inicio;

