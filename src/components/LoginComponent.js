import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import 'antd/dist/antd.css';

const LoginComponent = () => {
  const [attempts, setAttempts] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const history = useHistory();

  const onFinish = (values) => {
    const { username, password } = values;

    if (username === 'azteca' && password === '12345') {
      history.push('/form');
    } else {
      setAttempts((prevAttempts) => prevAttempts + 1);
      console.log('Contraseña incorrecta');
      if (attempts >= 2) {
        setDisabled(true);
      }
    }
  };

  return (
    <Form
      name="login"
      onFinish={onFinish}
      style={{ maxWidth: '300px', margin: 'auto', paddingTop: '50px' }}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Por favor ingresa tu usuario!' }]}
      >
        <Input placeholder="Usuario" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Por favor ingresa tu contraseña!' }]}
      >
        <Input.Password placeholder="Contraseña" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" block disabled={disabled}>
          Iniciar Sesión
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginComponent;
