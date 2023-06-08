// App.js
import React from 'react';
import './App.css';
import GhiNhanKetQua from './components/GhiNhanKetQua';
import ThongKeDangKiem from './components/ThongKeDangKiem';

function App() {
  return (
    <div className="App">
      <h1>Ứng dụng Trung tâm đăng kiểm</h1>
      <GhiNhanKetQua />
      <ThongKeDangKiem />
    </div>
  );
}

export default App;
