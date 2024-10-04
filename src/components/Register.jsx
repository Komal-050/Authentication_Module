import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from './common/Input';
import './Login.css';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = users.find((user) => user.email === email);

    if (existingUser) {
      setError('Email is already registered.');
      return;
    }

    if (name === '' || email === '' || password === '') {
      setError('All fields are required.');
      return;
    }

    const user = { name, email, password };
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));

    navigate('/login');
  };

  return (
    <div 
      className="login-page" 
      style={{ backgroundImage: `url(/images/background.jpg)` }}
    >
      <div className="container mt-4">
        <h2>Register</h2>
        {error && <div className="alert alert-danger">{error}</div>}

  
        <Input
          label="Name"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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

        <button className="btn btn-primary" onClick={handleRegister}>
          Register
        </button>

        <p className="already-registered-text">
          Already Registered? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
}

export default Register;

