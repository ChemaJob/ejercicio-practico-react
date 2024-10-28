import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import 'antd/dist/antd.css';

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
      message.error('Usuario no encontrado');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', paddingTop: '50px' }}>
      <h2>Formulario</h2>
      <Form layout="vertical">
        <Form.Item label="ID Usuario">
          <Input
            placeholder="ID Usuario"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" onClick={handleFetchUserData} block>
            Buscar
          </Button>
        </Form.Item>

        <Form.Item label="ID Usuario">
          <Input value={userId} readOnly />
        </Form.Item>

        <Form.Item label="Nombre">
          <Input value={userData.nombre || ''} disabled />
        </Form.Item>

        <Form.Item label="Apellido Paterno">
          <Input value={userData.apellidoPaterno || ''} disabled />
        </Form.Item>

        <Form.Item label="Apellido Materno">
          <Input value={userData.apellidoMaterno || ''} disabled />
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormComponent;
