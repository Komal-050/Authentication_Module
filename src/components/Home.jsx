import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const users = JSON.parse(localStorage.getItem('user')) || []; 
  console.log(`Here is the users`, users)

  const handleLogout = () => {
    localStorage.removeItem('authenticated');
    localStorage.removeItem('user');
    navigate('/login');
  };

  useEffect(() => {
    if (users.length === 0) {
      setTimeout(() => {
        navigate('/login');
      }, 0);
    }
  }, [users, navigate]); 

  if (users.length === 0) {
    return null; 
  }

  return (
    <div className="container mt-4">
      <h2>Welcome, {users.name}</h2>
      <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Home;
