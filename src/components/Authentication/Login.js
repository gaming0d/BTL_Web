import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [selectedOption, setSelectedOption] = useState('center');

  const handleLogin = (e) => {
    e.preventDefault();
    // Xử lý logic đăng nhập tại đây
    console.log(`Username: ${username}`);
    console.log(`Password: ${password}`);
    console.log(`Selected Option: ${selectedOption}`);
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
