import React, { useState } from 'react';

const mockUserData = {
  1: { nombre: 'Juan', apellidoPaterno: 'Perez', apellidoMaterno: 'Gomez' },
  2: { nombre: 'Maria', apellidoPaterno: 'Lopez', apellidoMaterno: 'Rodriguez' },
};

const FormComponent = () => {
  const [userId, setUserId] = useState('');
  const [userData, setUserData] = useState({});

  const handleFetchUserData = () => {
    const data = mockUserData[userId];
    if (data) {
      setUserData(data);
    } else {
      setUserData({});
      alert('Usuario no encontrado');
    }
  };

  return (
    <div>
      <h2>Formulario</h2>
      <input
        type="text"
        placeholder="ID Usuario"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <button onClick={handleFetchUserData}>Buscar</button>

      <div>
        <label>ID Usuario:</label>
        <input type="text" value={userId} readOnly />

        <label>Nombre:</label>
        <input type="text" value={userData.nombre || ''} readOnly />

        <label>Apellido Paterno:</label>
        <input type="text" value={userData.apellidoPaterno || ''} readOnly />

        <label>Apellido Materno:</label>
        <input type="text" value={userData.apellidoMaterno || ''} readOnly />
      </div>
    </div>
  );
};

export default FormComponent;
