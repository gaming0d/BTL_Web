import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const VehicleList = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const fetchVehicles = async () => {
      const response = await axios.get('http://localhost:3001/vehicles');
      setVehicles(response.data);
    };
    fetchVehicles();
  }, []);

  return (
    <div className="container">
      <h2 className="mt-4">Danh Sách Xe Ô Tô</h2>
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
      </table>
    </div>
  );
};

export default VehicleList;
