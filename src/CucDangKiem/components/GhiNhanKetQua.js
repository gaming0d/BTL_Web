import React, { useState } from 'react';
import './GhiNhanKetQua.css';

const GhiNhanKetQua = () => {
  const [ketQua, setKetQua] = useState('');
  const [chungNhan, setChungNhan] = useState(false);

  const handleGhiNhan = () => {
    // Xử lý logic ghi nhận kết quả đăng kiểm và cấp chứng nhận
  };

  return (
    <div className="GhiNhanKetQua">
      <h2>Ghi nhận kết quả đăng kiểm</h2>
      <input
        type="text"
        value={ketQua}
        onChange={(e) => setKetQua(e.target.value)}
        placeholder="Kết quả đăng kiểm"
      />
      <label>
        <input
          type="checkbox"
          checked={chungNhan}
          onChange={(e) => setChungNhan(e.target.checked)}
        />
        Cấp giấy chứng nhận
      </label>
      <button onClick={handleGhiNhan}>Ghi nhận</button>
    </div>
  );
};

export default GhiNhanKetQua;
