import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './VehicleList.css';

const VehicleList = () => {
  const [vehicles, setVehicles] = useState([]);
  const [newVehicle, setNewVehicle] = useState({
    soDangKiem: '',
    soDangKy: '',
    ngayDangKiem: '',
    ngayHetHan: '',
    trungTam: '',
    bienSoXe: ''
  });
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await axios.get('http://localhost:3001/vehicles');
        setVehicles(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchVehicles();
  }, []);

  const handleAddVehicle = async () => {
    try {
      const response = await axios.post('http://localhost:3001/vehicles', newVehicle);
      setVehicles([...vehicles, response.data]);
      setNewVehicle({
        soDangKiem: '',
        soDangKy: '',
        ngayDangKiem: '',
        ngayHetHan: '',
        trungTam: '',
        bienSoXe: ''
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditVehicle = async (index) => {
    try {
      const editedVehicle = vehicles[index];
      const response = await axios.put(
        `http://localhost:3001/vehicles/${editedVehicle.id}`,
        editedVehicle
      );
      const updatedVehicles = [...vehicles];
      updatedVehicles[index] = response.data;
      setVehicles(updatedVehicles);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteVehicle = async (index) => {
    try {
      const vehicleToDelete = vehicles[index];
      await axios.delete(`http://localhost:3001/vehicles/${vehicleToDelete.id}`);
      const updatedVehicles = vehicles.filter((_, i) => i !== index);
      setVehicles(updatedVehicles);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    setNewVehicle({
      ...newVehicle,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="container">
      <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
        {/* ... */}
      </div>
      <div className="content">
        {/* ... */}
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
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {vehicles.map((vehicle, index) => (
              <tr key={vehicle.id}>
                <td>{vehicle.soDangKiem}</td>
                <td>{vehicle.soDangKy}</td>
                <td>{vehicle.ngayDangKiem}</td>
                <td>{vehicle.ngayHetHan}</td>
                <td>{vehicle.trungTam}</td>
                <td>{vehicle.bienSoXe}</td>
                <td>
                  <button onClick={() => handleEditVehicle(index)}>Sửa</button>
                  <button onClick={() => handleDeleteVehicle(index)}>Xóa</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="add-form">
          <h3>Thêm phương tiện</h3>
          <div>
            <label>Số đăng kiểm:</label>
            <input
              type="text"
              name="soDangKiem"
              value={newVehicle.soDangKiem}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Số đăng ký:</label>
            <input
              type="text"
              name="soDangKy"
              value={newVehicle.soDangKy}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Ngày đăng kiểm:</label>
            <input
              type="text"
              name="ngayDangKiem"
              value={newVehicle.ngayDangKiem}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Ngày hết hạn:</label>
            <input
              type="text"
              name="ngayHetHan"
              value={newVehicle.ngayHetHan}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Trung tâm:</label>
            <input
              type="text"
              name="trungTam"
              value={newVehicle.trungTam}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Biển số xe:</label>
            <input
              type="text"
              name="bienSoXe"
              value={newVehicle.bienSoXe}
              onChange={handleInputChange}
            />
          </div>
          <button onClick={handleAddVehicle}>Thêm</button>
        </div>
      </div>
    </div>
  );
};

export default VehicleList;
