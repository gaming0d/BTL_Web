import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './VehicleList.css'

const VehicleList = () => {
  const [vehicles, setVehicles] = useState([]);
  // Menu
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  //
  useEffect(() => {
    const fetchVehicles = async () => {
      const response = await axios.get('http://localhost:3001/vehicles');
      setVehicles(response.data);
    };
    fetchVehicles();
  }, []);

  return (
    <div className="container">
      <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="menu-title">Main</div>
        <button className="menu-button">Dashboard</button>
        <div className="menu-title">Table</div>
        <button className="menu-button">Giấy đăng kiểm</button>
        <button className="menu-button">Xe ô tô</button>
        <button className="menu-button">Thống kê</button>
      </div>
      <div className="content">
        <div className="table-header">Giấy đăng kiểm</div>
        <div className="search">
          <input type="text" placeholder="Tìm kiếm theo số đăng kiểm" />
        </div>
        <table className="data-table">
          <thead>
            <tr>
              <th>Số đăng kiểm</th>
              <th>Số đăng ký</th>
              <th>Ngày đăng kiểm</th>
              <th>Ngày hết hạn</th>
              <th>Trung tâm</th>
              <th>Biển số xe</th>
            </tr>
          </thead>
          <tbody>
            {/* Dữ liệu của bảng */}
          </tbody>
        </table>
      </div>
      <button className="toggle-menu-button" onClick={handleToggleMenu}>
        Toggle Menu
      </button>
      {/* <h2 className="mt-4">Danh Sách Xe Ô Tô</h2>
      <Link to="/upload-vehicle" className="btn btn-primary mb-3">
        Tải Lên Xe
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th>Biển Số</th>
            <th>Loại Xe</th>
            <th>Hãng Xe</th>
            <th>Ngày Đăng Kiểm</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((vehicle) => (
            <tr key={vehicle.id}>
              <td>{vehicle.plateNumber}</td>
              <td>{vehicle.type}</td>
              <td>{vehicle.brand}</td>
              <td>{vehicle.inspectionDate}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  );
};

export default VehicleList;
