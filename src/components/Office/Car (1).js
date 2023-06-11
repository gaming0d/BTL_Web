import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BaseLayout from './Base';

const Car = ({ customers }) => {
    const [cars, setCars] = useState([]);
    const [editedCar, setEditedCar] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/cars/')
        .then((response) => response.json())
        .then((data) => setCars(data))
        .catch((error) => console.log(error));
    }, []);

    const handleEdit = (car) => {
    setEditedCar(car);
  };

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    setCars((prevCars) => {
      const updatedCars = prevCars.map((car, carIndex) => {
        if (carIndex === index) {
          return { ...car, [name]: value };
        }
        return car;
      });
      return updatedCars;
    });
  };
  
  const handleSave = async (registrationNumber) => {
    const carToUpdate = cars.find((car) => car.registration_number === registrationNumber);
  
    if (!carToUpdate) {
      console.error(`Car with registration number ${registrationNumber} not found.`);
      return;
    }
  
    const updatedCar = { ...carToUpdate, ...editedCar };
  
    try {
      await axios.put(`http://localhost:8000/cars/${registrationNumber}/`, updatedCar);
      setCars((prevCars) => prevCars.map((car) => (car.registration_number === registrationNumber ? updatedCar : car)));
      setEditedCar(null);
      // Refresh the car list or show a success message
    } catch (error) {
      console.error(error);
      // Handle the error
    }
  };
  
      
    const handleDelete = async (registrationNumber) => {
        try {
        await axios.delete(`http://localhost:8000/cars/${registrationNumber}`);
        // Refresh the car list or show a success message
        } catch (error) {
        console.error(error);
        // Handle the error
        }
    };
  
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
                <th>Actions</th>
              </tr>
            </thead>
            
            <tbody>
  {cars.map((car, index) => (
    <tr key={car.registration_number}>
      {Object.entries(car).map(([key, value]) => (
        <td key={key}>
          {editedCar === index ? (
            <input
              type="text"
              name={key}
              value={value}
              onChange={(e) => handleInputChange(e, index)}
            />
          ) : (
            <span>{value}</span>
          )}
        </td>
      ))}
      <td>
        {editedCar === index ? (
          <button className="btn btn-primary" onClick={() => handleSave(car.registration_number)}>
            Save
          </button>
        ) : (
          <button className="btn btn-primary" onClick={() => handleEdit(index)}>
            Edit
          </button>
        )}
        <button className="btn btn-danger" onClick={() => handleDelete(car.registration_number)}>
          Delete
        </button>
      </td>
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