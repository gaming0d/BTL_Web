import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BaseLayout from './Base';

const Car = ({ customers }) => {
  const [cars, setCars] = useState([]);
  const [editedCar, setEditedCar] = useState(null);
  const [searchTerms, setSearchTerms] = useState([]);
  const [searchAttributes, setSearchAttributes] = useState([
    {
      attribute: 'registration_number',
      value: ''
    }
  ]);

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

  const handleSearchAttributeChange = (e, index) => {
    const { value } = e.target;
    setSearchAttributes((prevSearchAttributes) => {
      const updatedSearchAttributes = [...prevSearchAttributes];
      updatedSearchAttributes[index] = { ...updatedSearchAttributes[index], attribute: value };
      return updatedSearchAttributes;
    });
  };

  const handleSearchValueChange = (e, index) => {
    const { value } = e.target;
    setSearchAttributes((prevSearchAttributes) => {
      const updatedSearchAttributes = [...prevSearchAttributes];
      updatedSearchAttributes[index] = { ...updatedSearchAttributes[index], value: value };
      return updatedSearchAttributes;
    });
  };

  const handleAddSearchAttribute = () => {
    setSearchAttributes((prevSearchAttributes) => {
      const remainingAttributes = searchAttributes.filter((attribute) => attribute.value !== '');
      return [
        ...remainingAttributes,
        {
          attribute: '',
          value: ''
        }
      ];
    });
  };

  const handleRemoveSearchAttribute = (index) => {
    setSearchAttributes((prevSearchAttributes) =>
      prevSearchAttributes.filter((_, i) => i !== index)
    );
  };

  const handleSearch = () => {
    const filteredCars = cars.filter((car) =>
      searchAttributes.every(
        (attribute) =>
          car[attribute.attribute]?.toLowerCase().includes(attribute.value?.toLowerCase())
      )
    );
    setSearchTerms(filteredCars);
  };

  const availableAttributes = [
    'Registration Number',
    'Registration Date',
    'License Plate',
    'Manufacturer',
    'Model',
    'Version',
    'Engine Capacity',
    'Power',
    'Torque',
    'Transmission',
    'Seating Capacity',
    'Length',
    'Width',
    'Height',
    'Weight',
    'Fuel Consumption',
    'Suspension',
    'Braking System',
    'Purpose',
    'Owner'
  ];

  const getAvailableAttributes = () => {
    const selectedAttributes = searchAttributes.map((attribute) => attribute.attribute);
    return availableAttributes.filter((attribute) => !selectedAttributes.includes(attribute));
  };

  return (
    <BaseLayout>
      <div className="container">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h6 className="panel-title">Cars</h6>
          </div>
          <div className="search-container">
            {searchAttributes.map((attribute, index) => (
              <div key={index} className="search-input-container">
                <select
                  value={attribute.attribute}
                  onChange={(e) => handleSearchAttributeChange(e, index)}
                >
                  {availableAttributes.map((availableAttribute) => (
                    <option key={availableAttribute} value={availableAttribute}>
                      {availableAttribute}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  value={attribute.value}
                  onChange={(e) => handleSearchValueChange(e, index)}
                  placeholder="Search..."
                />
                {index > 0 && (
                  <button
                    className="btn btn-danger"
                    onClick={() => handleRemoveSearchAttribute(index)}
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
            <button className="btn btn-primary" onClick={handleAddSearchAttribute}>
              Add Attribute
            </button>
            <button className="btn btn-primary" onClick={handleSearch}>
              Search
            </button>
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
              {searchTerms.map((car, index) => (
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
                  <td>
                    {editedCar && editedCar.registration_number === car.registration_number ? (
                      <div>
                        <button
                          className="btn btn-success"
                          onClick={() => handleSave(car.registration_number)}
                        >
                          Save
                        </button>
                        <button
                          className="btn btn-danger"
                          onClick={() => setEditedCar(null)}
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <div>
                        <button
                          className="btn btn-warning"
                          onClick={() => handleEdit(car)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-danger"
                          onClick={() => handleDelete(car.registration_number)}
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </td>
                  <td>
                    {editedCar === car ? (
                      <button className="btn btn-primary" onClick={() => handleSave(car.registration_number)}>
                        Save
                      </button>
                    ) : (
                      <button className="btn btn-primary" onClick={() => handleEdit(car)}>
                        Edit
                      </button>
                    )}
                    <button className="btn btn-danger" onClick={() => handleDelete(car.registration_number)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
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