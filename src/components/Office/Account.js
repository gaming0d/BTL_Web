import React, { useState } from 'react';
import './carForm.css';
import BaseLayout from './Base';

const Account = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:8000/api/inspection-center/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Account created successfully!');
        // Handle any further actions after successful account creation
      } else if (response.status === 409) {
        setMessage('Username is already taken.');
        // Handle username taken scenario
      } else {
        setMessage('Invalid account.');
        // Handle invalid account scenario
      }
    } catch (error) {
      console.error('Error creating account:', error);
      // Handle error scenarios
    }
  };

  return (
    <BaseLayout>
      <div className="container">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h6 className="panel-title">Car Form</h6>
          </div>
          <form onSubmit={handleSubmit} className="car-Form">
            <label>
              Username:
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <button type="submit">Register</button>
          </form>
          {message && <p>{message}</p>}
        </div>
      </div>
    </BaseLayout>
  );
};

export default Account;
