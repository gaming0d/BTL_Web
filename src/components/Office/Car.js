
import BaseLayout from './Base';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Car = ({ customers }) => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/cars/')
        .then((response) => response.json())
        .then((data) => setCars(data))
        .catch((error) => console.log(error));
    }, []);

  return (
    <BaseLayout>
      <div className="container">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h6 className="panel-title">Cars</h6>
          </div>
          <table className="table table-hover" id="dev-table">
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
            {cars.map((car) => (
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
      </div>
    </BaseLayout>
  );
};

export default Car;