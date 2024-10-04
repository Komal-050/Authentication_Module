import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { Input } from './common/Input'; 

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find((user) => user.email === email && user.password === password);

    if (email === '' || password === '') {
      setError('All fields are required.');
      return;
    }

    if (!user) {
      setError('Invalid credentials');
      return;
    }

    localStorage.setItem('authenticated', true);
    localStorage.setItem('user', JSON.stringify(user));
    navigate('/home');
  };

  return (
    <div 
    className="login-page" 
    style={{ backgroundImage: `url(/images/background.jpg)` }}
    >
      <div className="container mt-4">
        <h2>Login</h2>
        {error && <div className="alert alert-danger">{error}</div>}

        <Input
          label="Email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="Password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn btn-primary" onClick={handleLogin}>
          Login
        </button>

        <p className="not-registered-text">
          Not registered yet? <a href="/register">Register Now</a>
        </p>

      </div>
    </div>
  );
}

export default Login;


