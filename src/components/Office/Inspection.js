import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BaseLayout from './Base';

const Owner = () => {
  const [carOwners, setCarOwners] = useState([]);
  const [editedCarOwner, setEditedCarOwner] = useState(null);
  const [searchTerms, setSearchTerms] = useState([]);
  const [searchAttributes, setSearchAttributes] = useState([
    {
      attribute: 'inspection_number',
      value: ''
    }
  ]);

  useEffect(() => {
    fetch('http://localhost:8000/car_inspections/')
      .then((response) => response.json())
      .then((data) => setCarOwners(data))
      .catch((error) => console.log(error));
  }, []);

  const handleEdit = (carOwner) => {
    setEditedCarOwner(carOwner);
  };

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    setCarOwners((prevCars) => {
      const updatedCars = prevCars.map((car, carIndex) => {
        if (carIndex === index) {
          return { ...car, [name]: value };
        }
        return car;
      });
      return updatedCars;
    });
  };

  const handleSave = async (inspection_number) => {
    const carToUpdate = carOwners.find((car) => car.inspection_number === inspection_number);

    if (!carToUpdate) {
      console.error(`Car with registration number ${inspection_number} not found.`);
      return;
    }

    const updatedCar = { ...carToUpdate, ...editedCarOwner };

    try {
      await axios.put(`http://localhost:8000/car_inspections/${inspection_number}/`, updatedCar);
      setCarOwners((prevCars) => prevCars.map((car) => (car.inspection_number === inspection_number ? updatedCar : car)));
      setEditedCarOwner(null);
      // Refresh the car list or show a success message
    } catch (error) {
      console.error(error);
      // Handle the error
    }
  };

  const handleDelete = async (inspection_number) => {
    try {
      await axios.delete(`http://localhost:8000/car_inspections/${inspection_number}/`);
      // Refresh the car owner list or show a success message
      setCarOwners((prevCarOwners) =>
        prevCarOwners.filter((carOwner) => carOwner.inspection_number !== inspection_number)
      );
    } catch (error) {
      console.error(error);
      // Handle the error
    }
  };

  const handleSearchChange = (e, attribute) => {
    const value = e.target.value;
    setSearchTerms((prevSearchTerms) => ({ ...prevSearchTerms, [attribute]: value }));
  };

  return (
    <BaseLayout>
      <div className="container">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h6 className="panel-title">Car Owners</h6>
          </div>
          <table className="table table-hover">

            <thead>
              <tr>
                <th>Inspection Number</th>
                <th>Inspection Date</th>
                <th>Expiration Date</th>
                <th>Inspection Center</th>
                <th>Car</th>
                <th>Owner</th>
                <th>Actions</th>
              </tr>
              <tr>
                <th>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => handleSearchChange(e, 'inspection_number')}
                  />
                </th>
                <th>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => handleSearchChange(e, 'inspection_date')}
                  />
                </th>
                <th>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => handleSearchChange(e, 'expiration_date')}
                  />
                </th>
                <th>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => handleSearchChange(e, 'inspection_center')}
                  />
                </th>
                <th>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => handleSearchChange(e, 'car')}
                  />
                </th>
                <th>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => handleSearchChange(e, 'owner')}
                  />
                </th>
              </tr>
            </thead>
            <tbody>
              {carOwners.map((carOwner, index) => (
                <tr key={carOwner.inspection_number}>
                  {Object.entries(carOwner).map(([key, value]) => (
                    <td key={key}>
                      {editedCarOwner === index ? (
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
                    {editedCarOwner === index ? (
                      <button className="btn btn-primary" onClick={() => handleSave(carOwner.inspection_number)}>
                        Save
                      </button>
                    ) : (
                      <button className="btn btn-primary" onClick={() => handleEdit(index)}>
                        Edit
                      </button>
                    )}
                    <button className="btn btn-danger" onClick={() => handleDelete(carOwner.inspection_number)}>
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

export default Owner;