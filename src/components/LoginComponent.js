import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const LoginComponent = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const history = useHistory();

  const handleLogin = () => {
    if (username === 'azteca' && password === '12345') {
      history.push('/form');
    } else {
      setAttempts(attempts + 1);
      console.log('contraseña incorrecta');
      if (attempts >= 2) {
        setDisabled(true);
      }
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin} disabled={disabled}>
        Enviar
      </button>
    </div>
  );
};

export default LoginComponent;
