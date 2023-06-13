import React, { useState } from 'react';
import axios from 'axios';
import BaseLayout from './Base';
import { format } from 'date-fns';
import './carForm.css'; // Import the custom CSS file for carForm

const CarForm = () => {
  const [carDetails, setCarDetails] = useState({
    ownerType: 'individual',
    agency_name: '',
    owner_code: '',
    agency_address: '',
    agency_contact: '',
    representative_name: '', // Add the representative_name field
    individual_name: '',
    address: '',
    phone: '',
    emergency_contact: '',
    license_number: '',
    owner_code: '',
    traffic_violations: '',
    registration_number: '',
    registration_date: '',
    license_plate: '',
    registered_location: '',
    manufacturer: '',
    model: '',
    version: '',  
    engine_capacity: '',
    power: '',
    torque: '',
    transmission: '',
    seating_capacity: '',
    length: '',
    width: '',
    height: '',
    weight: '',
    fuel_consumption: '',
    suspension: '',
    braking_system: '',
    purpose: 'personal',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Create car details
        const ownerResponse = await axios.get(`http://localhost:8000/car_owners/?owner_code=${carDetails.owner_code}`);
        const existingOwner = ownerResponse.data;
        console.log(existingOwner);
        if (existingOwner.length > 0) {
            console.log(existingOwner)
            console.log("ton tai cai nay ne")
      // If the owner exists, create the new car and assign the existing owner
      const carResponse = await axios.post('http://localhost:8000/cars/', {
        registration_number: carDetails.registration_number,
        registration_date: format(new Date(carDetails.registration_date), 'yyyy-MM-dd'),
        license_plate: carDetails.license_plate,
        registered_location: carDetails.registered_location,
        manufacturer: carDetails.manufacturer,
        model: carDetails.model,
        version: carDetails.version,
        engine_capacity: carDetails.engine_capacity,
        power: carDetails.power,
        torque: carDetails.torque,
        transmission: carDetails.transmission,
        seating_capacity: carDetails.seating_capacity,
        length: carDetails.length,
        width: carDetails.width,
        height: carDetails.height,
        weight: carDetails.weight,
        fuel_consumption: carDetails.fuel_consumption,
        suspension: carDetails.suspension,
        braking_system: carDetails.braking_system,
        purpose: carDetails.purpose,
        owner: carDetails.owner_code, // Assign the newly created owner to the new car
      });

      console.log('Car created:', carResponse.data);
    } else {
        console.log("Owner not exist")
      // If the owner does not exist, create a new owner and associate the new car with the owner
      const newOwnerResponse = await axios.post('http://localhost:8000/car_owners/', {
        owner_code: carDetails.owner_code,
        owner_type: carDetails.ownerType,
        agency_name: carDetails.agency_name,
        agency_address: carDetails.agency_address,
        agency_contact: carDetails.agency_contact,
        representative_name: carDetails.representative_name,
        individual_name: carDetails.individual_name,
        address: carDetails.address,
        phone: carDetails.phone,
        emergency_contact: carDetails.emergency_contact,
        license_number: carDetails.license_number,
        owner_code: carDetails.owner_code,
        traffic_violations: carDetails.traffic_violations,
      });

      console.log('Car owner created:', newOwnerResponse.data);
    }
      // Create the new car and assign the newly created owner
      const carResponse = await axios.post('http://localhost:8000/cars/', {
        registration_number: carDetails.registration_number,
        registration_date: format(new Date(carDetails.registration_date), 'yyyy-MM-dd'),
        license_plate: carDetails.license_plate,
        registered_location: carDetails.registered_location,
        manufacturer: carDetails.manufacturer,
        model: carDetails.model,
        version: carDetails.version,
        engine_capacity: carDetails.engine_capacity,
        power: carDetails.power,
        torque: carDetails.torque,
        transmission: carDetails.transmission,
        seating_capacity: carDetails.seating_capacity,
        length: carDetails.length,
        width: carDetails.width,
        height: carDetails.height,
        weight: carDetails.weight,
        fuel_consumption: carDetails.fuel_consumption,
        suspension: carDetails.suspension,
        braking_system: carDetails.braking_system,
        purpose: carDetails.purpose,
        owner: carDetails.owner_code, // Assign the newly created owner to the new car
      });

      console.log('Car created:', carResponse.data);
    

    const inspectionResponse = await axios.post('http://localhost:8000/car_inspections/', {
        inspection_number: carDetails.inspection_number,
        inspection_date: format(new Date(carDetails.inspection_date), 'yyyy-MM-dd'),
        expiration_date: format(new Date(carDetails.expiration_date), 'yyyy-MM-dd'),
        inspection_center: carDetails.inspection_center,
        car: carResponse.data.registration_number, // Use the car ID returned from car creation
        owner: carDetails.owner_code, // Use the owner code returned from car owner creation
      });
      console.log('Car inspection created:', inspectionResponse.data);
      // Create car owner
      


      // Create car inspection
      

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
    const { name, value } = e.target;
    setCarDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
    <BaseLayout>
      <div className="container">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h6 className="panel-title">Car Form</h6>
          </div>
          <form onSubmit={handleSubmit} className="car-form">
            {/* Car Details */}
            <label>
              Registration Number:
              <input
                type="text"
                name="registration_number"
                value={carDetails.registration_number}
                onChange={handleChange}
              />
            </label>
            <label>
                Registration Date:
                <input
                    type="date"
                    name="registration_date"
                    value={carDetails.registration_date}
                    onChange={handleChange}
                />
                </label>
            <label>
              License Plate:
              <input
                type="text"
                name="license_plate"
                value={carDetails.license_plate}
                onChange={handleChange}
              />
            </label>
            <label>
              Registered Location:
              <input
                type="text"
                name="registered_location"
                value={carDetails.registered_location}
                onChange={handleChange}
              />
            </label>
            <label>
              Manufacturer:
              <input
                type="text"
                name="manufacturer"
                value={carDetails.manufacturer}
                onChange={handleChange}
              />
            </label>
            <label>
              Model:
              <input
                type="text"
                name="model"
                value={carDetails.model}
                onChange={handleChange}
              />
            </label>
            <label>
              Version:
              <input
                type="text"
                name="version"
                value={carDetails.version}
                onChange={handleChange}
              />
            </label>
            <label>
              Engine Capacity:
              <input
                type="text"
                name="engine_capacity"
                value={carDetails.engine_capacity}
                onChange={handleChange}
              />
            </label>
            <label>
              Power:
              <input
                type="text"
                name="power"
                value={carDetails.power}
                onChange={handleChange}
              />
            </label>
            <label>
              Torque:
              <input
                type="text"
                name="torque"
                value={carDetails.torque}
                onChange={handleChange}
              />
            </label>
            <label>
              Transmission:
              <input
                type="text"
                name="transmission"
                value={carDetails.transmission}
                onChange={handleChange}
              />
            </label>
            <label>
              Seating Capacity:
              <input
                type="text"
                name="seating_capacity"
                value={carDetails.seating_capacity}
                onChange={handleChange}
              />
            </label>
            <label>
              Length:
              <input
                type="text"
                name="length"
                value={carDetails.length}
                onChange={handleChange}
              />
            </label>
            <label>
              Width:
              <input
                type="text"
                name="width"
                value={carDetails.width}
                onChange={handleChange}
              />
            </label>
            <label>
              Height:
              <input
                type="text"
                name="height"
                value={carDetails.height}
                onChange={handleChange}
              />
            </label>
            <label>
              Weight:
              <input
                type="text"
                name="weight"
                value={carDetails.weight}
                onChange={handleChange}
              />
            </label>
            <label>
              Fuel Consumption:
              <input
                type="text"
                name="fuel_consumption"
                value={carDetails.fuel_consumption}
                onChange={handleChange}
              />
            </label>
            <label>
              Suspension:
              <input
                type="text"
                name="suspension"
                value={carDetails.suspension}
                onChange={handleChange}
              />
            </label>
            <label>
              Braking System:
              <input
                type="text"
                name="braking_system"
                value={carDetails.braking_system}
                onChange={handleChange}
              />
            </label>
            <label>
              Purpose:
              <select
                name="purpose"
                value={carDetails.purpose}
                onChange={handleChange}
              >
                <option value="personal">Đi lại cá nhân</option>
                <option value="passenger_service">Dịch vụ trở khách</option>
                <option value="transportation_service">Dịch vụ vận tải</option>
              </select>
            </label>

            {/* Car Owner */}
            <label>
              Owner code:
              <input
                type="text"
                name="owner_code"
                value={carDetails.owner_code}
                onChange={handleChange}
              />
            </label>
            <label>
              Owner Type:
              <select
                name="ownerType"
                value={carDetails.ownerType}
                onChange={handleChange}
              >
                <option value="agency">Cơ quan</option>
                <option value="individual">Cá nhân</option>
              </select>
            </label>
            {carDetails.ownerType === 'agency' && (
              <>
                <label>
                  Agency Name:
                  <input
                    type="text"
                    name="agency_name"
                    value={carDetails.agency_name}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Agency Address:
                  <input
                    type="text"
                    name="agency_address"
                    value={carDetails.agency_address}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Agency Contact:
                  <input
                    type="text"
                    name="agency_contact"
                    value={carDetails.agency_contact}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Representative Name:
                  <input
                    type="text"
                    name="representative_name"
                    value={carDetails.representative_name}
                    onChange={handleChange}
                  />
                </label>
              </>
            )}
            {carDetails.ownerType === 'individual' && (
              <>
                <label>
                  Individual Name:
                  <input
                    type="text"
                    name="individual_name"
                    value={carDetails.individual_name}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Address:
                  <input
                    type="text"
                    name="address"
                    value={carDetails.address}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Phone:
                  <input
                    type="text"
                    name="phone"
                    value={carDetails.phone}
                    onChange={handleChange}
                  />
                </label>
              </>
            )}

            {/* Car Inspection */}
            <label>
              Inspection Number:
              <input
                type="text"
                name="inspection_number"
                value={carDetails.inspection_number}
                onChange={handleChange}
              />
            </label>
            <label>
              Inspection Date:
              <input
                type="date"
                name="inspection_date"
                value={carDetails.inspection_date}
                onChange={handleChange}
            />
            </label>
            <label>
              Expiration Date:
              <input
                type="date"
                name="expiration_date"
                value={carDetails.expiration_date}
                onChange={handleChange}
              />
            </label>
            <label>
              Inspection Center:
              <input
                type="text"
                name="inspection_center"
                value={carDetails.inspection_center}
                onChange={handleChange}
              />
            </label>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </BaseLayout>
  );
};

export default CarForm;