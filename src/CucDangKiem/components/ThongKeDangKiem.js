
import React, { useState, useEffect } from 'react';
import './ThongKeDangKiem.css';

const ThongKeDangKiem = () => {
  const [danhSachDangKiem, setDanhSachDangKiem] = useState([]);
  const [danhSachHetHan, setDanhSachHetHan] = useState([]);

  useEffect(() => {
    // Lấy danh sách xe đã được đăng kiểm và danh sách xe sắp hết hạn từ API
    // ...

    const mockDanhSachDangKiem = [
      { id: 1, bienSo: '29C-12345', ngayDangKiem: '2023-01-01' },
      { id: 2, bienSo: '51G-67890', ngayDangKiem: '2023-02-15' },
      // ...
    ];

    const mockDanhSachHetHan = [
      { id: 3, bienSo: '47A-98765', ngayHetHan: '2023-06-30' },
      { id: 4, bienSo: '92B-54321', ngayHetHan: '2023-07-10' },
      // ...
    ];

    setDanhSachDangKiem(mockDanhSachDangKiem);
    setDanhSachHetHan(mockDanhSachHetHan);
  }, []);

  return (
    <div className="ThongKeDangKiem">
      <h2>Thống kê đăng kiểm</h2>
      <div>
        <h3>Danh sách xe đã đăng kiểm</h3>
        {danhSachDangKiem.map((xe) => (
          <p key={xe.id}>{xe.bienSo} - {xe.ngayDangKiem}</p>
        ))}
      </div>
      <div>
        <h3>Danh sách xe sắp hết hạn</h3>
        {danhSachHetHan.map((xe) => (
          <p key={xe.id}>{xe.bienSo} - {xe.ngayHetHan}</p>
        ))}
      </div>
    </div>
  );
};

export default ThongKeDangKiem;
