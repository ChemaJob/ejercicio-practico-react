import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Input, Button, Alert } from 'antd';
import '../styles.css';
import 'antd/dist/antd.css';

const LoginComponent = () => {
  const [attempts, setAttempts] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const [remainingAttempts, setRemainingAttempts] = useState(2); // 2 intentos restantes
  const history = useHistory();

  const onFinish = (values) => {
    const { username, password } = values;

    if (username === 'azteca' && password === '12345') {
      history.push('/form');
    } else {
      setAttempts((prevAttempts) => prevAttempts + 1);
      setRemainingAttempts(2 - (attempts)); // Calcula intentos restantes
      setAlertVisible(true);
      console.log('Contraseña incorrecta');

      if (attempts >= 2) {
        setDisabled(true);
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-form-container">
        {alertVisible && (
          <Alert
            message={`Contraseña incorrecta. Te quedan ${remainingAttempts} intento(s).`}
            type="warning"
            showIcon
            closable
            onClose={() => setAlertVisible(false)} // Cerrar el alert
            style={{ marginBottom: '20px' }} // Espaciado inferior
          />
        )}
        <Form
          name="login"
          onFinish={onFinish}
          style={{ maxWidth: '300px', margin: 'auto', paddingTop: '50px' }}
        >
          <h2>Formulario</h2>
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
      </div>
    </div>
  );
};

export default LoginComponent;
