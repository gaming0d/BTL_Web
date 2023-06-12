import React, { useState } from 'react';
import axios from 'axios';
import BaseLayout from './Base';

const CarForm = () => {
  const [carDetails, setCarDetails] = useState({
    registration_number: "",
    registration_date: "",
    license_plate: "",
    registered_location: "",
    manufacturer: "",
    model: "",
    version: "",
    engine_capacity: "",
    power: "",
    torque: "",
    transmission: "",
    seating_capacity: "",
    length: "",
    width: "",
    height: "",
    weight: "",
    fuel_consumption: "",
    suspension: "",
    braking_system: "",
    purpose: "personal",
    owner: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.post('http://localhost:8000/cars/', carDetails, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
      // Reset the form or show a success message
    } catch (error) {
        console.error(error);
        if (error.response) {
            console.log('Error response:', error.response.data);
            console.log('Error status:', error.response.status);
            console.log('Error headers:', error.response.headers);

            // Access the specific error messages
            const errors = error.response.data;
            console.log('Registration Number Error:', errors.registration_number);
            console.log('Power Error:', errors.power);
            console.log('Torque Error:', errors.torque);
            // ... and so on
        }
      }
  };

  const handleChange = (e) => {
    setCarDetails({ ...carDetails, [e.target.name]: e.target.value });
  };

  return (
    <BaseLayout>
        <div className="container">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h6 className="panel-title">Cars</h6>
          </div>
          <form onSubmit={handleSubmit}>
      <label>
        Registration Number:
        <input type="text" name="registration_number" value={carDetails.registration_number} onChange={handleChange} />
      </label>
      <label>
        Registration Date:
        <input type="date" name="registration_date" value={carDetails.registration_date} onChange={handleChange} />
      </label>
      <label>
        License Plate:
        <input type="text" name="license_plate" value={carDetails.license_plate} onChange={handleChange} />
      </label>
      <label>
        Registered Location:
        <input type="text" name="registered_location" value={carDetails.registered_location} onChange={handleChange} />
      </label>
      <label>
        Manufacturer:
        <input type="text" name="manufacturer" value={carDetails.manufacturer} onChange={handleChange} />
      </label>
      <label>
        Model:
        <input type="text" name="model" value={carDetails.model} onChange={handleChange} />
      </label>
      <label>
        Version:
        <input type="text" name="version" value={carDetails.version} onChange={handleChange} />
      </label>
      <label>
        Engine Capacity:
        <input type="number" name="engine_capacity" value={carDetails.engine_capacity} onChange={handleChange} />
      </label>
      <label>
        Power:
        <input type="number" name="power" value={carDetails.power} onChange={handleChange} />
      </label>
      <label>
        Torque:
        <input type="number" name="torque" value={carDetails.torque} onChange={handleChange} />
      </label>
      <label>
        Transmission:
        <input type="text" name="transmission" value={carDetails.transmission} onChange={handleChange} />
      </label>
      <label>
        Seating Capacity:
        <input type="number" name="seating_capacity" value={carDetails.seating_capacity} onChange={handleChange} />
      </label>
      <label>
        Length:
        <input type="number" name="length" value={carDetails.length} onChange={handleChange} />
      </label>
      <label>
        Width:
        <input type="number" name="width" value={carDetails.width} onChange={handleChange} />
      </label>
      <label>
        Height:
        <input type="number" name="height" value={carDetails.height} onChange={handleChange} />
      </label>
      <label>
        Weight:
        <input type="number" name="weight" value={carDetails.weight} onChange={handleChange} />
      </label>
      <label>
        Fuel Consumption:
        <input type="number" name="fuel_consumption" value={carDetails.fuel_consumption} onChange={handleChange} />
      </label>
      <label>
        Suspension:
        <input type="text" name="suspension" value={carDetails.suspension} onChange={handleChange} />
      </label>
      <label>
        Braking System:
        <input type="text" name="braking_system" value={carDetails.braking_system} onChange={handleChange} />
      </label>
      <label>
        Purpose:
        <select name="purpose" value={carDetails.purpose} onChange={handleChange}>
          <option value="personal">Đi lại cá nhân</option>
          <option value="passenger_service">Dịch vụ trở khách</option>
          <option value="transportation_service">Dịch vụ vận tải</option>
        </select>
      </label>
      <label>
        Owner:
        <input type="text" name="owner" value={carDetails.owner} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
        </div>
      </div>
    </BaseLayout>
  );
};

export default CarForm;
