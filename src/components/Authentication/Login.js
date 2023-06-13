import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

 import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [selectedOption, setSelectedOption] = useState('center');
  
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const handleLogin = (e) => {
    e.preventDefault();
    // Xử lý logic đăng nhập tại đây
    console.log(`Username: ${username}`);
    console.log(`Password: ${password}`);
    console.log(`Selected Option: ${selectedOption}`);

    // Determine the login URL based on the selected option
    let loginUrl;
    if (selectedOption === 'center') {
      loginUrl = 'http://127.0.0.1:8000/api/inspection-center/login/';
    } else if (selectedOption === 'cuc') {
      loginUrl = 'http://127.0.0.1:8000/api/vehicle-registration/login/';
    }

    // Make the login request here using fetch or any other HTTP library

    // Example using fetch:
    fetch(loginUrl, {
      method: 'POST',
      body: JSON.stringify({
        username: username,
        password: password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          if (selectedOption === 'center') {
            navigate('/center/dashboard');
          } else if (selectedOption === 'cuc') {
            navigate('/cuc/dashboard');
          }
        } else {
          throw new Error('Invalid credentials');
        }
      })
      .catch((error) => {
        console.error(error);
        if (error.message === 'Invalid credentials') {
          console.log('Username or password is invalid');
        } else {
          console.log('An error occurred during login');
        }
      });
  };

  return (
    <div className="container">
      <div className="login-container">
        <div className="login-header">
          <h2>Quản lý đăng kiểm</h2>
          <h3>Đăng nhập</h3>
        </div>
        <form className="login-form" onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="username">Tài khoản:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Mật khẩu:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="option">Chọn luồng:</label>
            <select
              id="option"
              name="option"
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
            >
              <option value="center">Trung tâm đăng kiểm</option>
              <option value="cuc">Cục đăng kiểm</option>
            </select>
          </div>
          <div className="form-group">
            <button type="submit">Đăng nhập</button>
          </div>
        </form>
        
      </div>
    </div>
  );
};

export default Login;