import React, { useState } from 'react';
import './carForm.css';
import BaseLayout from './Base';
const Account = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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

      if (response.ok) {
        console.log('Account created successfully!');
        // Handle any further actions after successful account creation
      } else {
        console.log('Account creation failed!');
        // Handle error scenarios
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
    </div>
      </div>
    </BaseLayout>
  );
};

export default Account;