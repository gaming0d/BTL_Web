import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CarList = () => {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchCarList();
  }, []);

  const fetchCarList = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/cars/');
      setCars(response.data);
      setFilteredCars(response.data);
    } catch (error) {
      console.error('Error fetching car list:', error);
    }
  };

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    const filteredCars = cars.filter((car) =>
      car.registration_number.toLowerCase().includes(searchTerm)
    );
    setFilteredCars(filteredCars);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by registration number..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <table>
        <thead>
          <tr>
            <th>Registration Number</th>
            <th>Registration Date</th>
            <th>License Plate</th>
            <th>Registered Location</th>
            <th>Manufacturer</th>
            <th>Model</th>
            <th>Version</th>
            <th>Engine Capacity</th>
            <th>Power</th>
            <th>Torque</th>
            <th>Transmission</th>
            <th>Seating Capacity</th>
            <th>Length</th>
            <th>Width</th>
            <th>Height</th>
            <th>Weight</th>
            <th>Fuel Consumption</th>
            <th>Suspension</th>
            <th>Braking System</th>
            <th>Purpose</th>
            <th>Owner</th>
          </tr>
        </thead>
        <tbody>
          {filteredCars.map((car) => (
            <tr key={car.registration_number}>
              <td>{car.registration_number}</td>
              <td>{car.registration_date}</td>
              <td>{car.license_plate}</td>
              <td>{car.registered_location}</td>
              <td>{car.manufacturer}</td>
              <td>{car.model}</td>
              <td>{car.version}</td>
              <td>{car.engine_capacity}</td>
              <td>{car.power}</td>
              <td>{car.torque}</td>
              <td>{car.transmission}</td>
              <td>{car.seating_capacity}</td>
              <td>{car.length}</td>
              <td>{car.width}</td>
              <td>{car.height}</td>
              <td>{car.weight}</td>
              <td>{car.fuel_consumption}</td>
              <td>{car.suspension}</td>
              <td>{car.braking_system}</td>
              <td>{car.purpose}</td>
              <td>{car.owner}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CarList;