import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ExpiringVehicles = () => {
  const [expiringVehicles, setExpiringVehicles] = useState([]);

  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const fetchExpiringVehicles = async () => {
      const response = await axios.get('http://localhost:3001/vehicles/expiring');
      setExpiringVehicles(response.data);
    };
    fetchExpiringVehicles();
  }, []);

  return (
    <div className="container">
      <h2 className="mt-4">Xe Sắp Hết Hạn</h2>
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
          {expiringVehicles.map((vehicle) => (
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

export default ExpiringVehicles;
