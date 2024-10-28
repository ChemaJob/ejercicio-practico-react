import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import 'antd/dist/antd.css';
import simulateApiCall from './Simulation';

const FormComponent = () => {
  const [userId, setUserId] = useState('');
  const [displayedUserId, setDisplayedUserId] = useState('');
  const [userData, setUserData] = useState({});
  const [searchStatus, setSearchStatus] = useState('');

  const handleFetchUserData = async () => {
    try {
      const data = await simulateApiCall(userId);
      setUserData(data);
      setSearchStatus('success');
      setDisplayedUserId(userId);
      message.success('Usuario encontrado');
    } catch (error) {
      setUserData({});
      setSearchStatus('error');
      setDisplayedUserId(userId);
      message.error('Usuario no encontrado, intenta con 12345 o 54321');
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

        <Form.Item label="ID Usuario" hasFeedback validateStatus={searchStatus}>
          <Input value={displayedUserId} readOnly /> {}
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
