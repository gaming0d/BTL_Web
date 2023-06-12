import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BaseLayout from './Base';

const Owner = () => {
    const [carOwners, setCarOwners] = useState([]);
    const [editedCarOwner, setEditedCarOwner] = useState(null);
    const [searchTerms, setSearchTerms] = useState([]);
    const [searchAttributes, setSearchAttributes] = useState([
      {
        attribute: 'owner_code',
        value: ''
      }
    ]);
  
    useEffect(() => {
      fetch('http://localhost:8000/car_owners/')
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
    
      const handleSave = async (owner_code) => {
        const carToUpdate = carOwners.find((car) => car.owner_code === owner_code);
    
        if (!carToUpdate) {
          console.error(`Car with registration number ${owner_code} not found.`);
          return;
        }
    
        const updatedCar = { ...carToUpdate, ...editedCarOwner};
    
        try {
          await axios.put(`http://localhost:8000/car_owners/${owner_code}/`, updatedCar);
          setCarOwners((prevCars) => prevCars.map((car) => (car.owner_code === owner_code ? updatedCar : car)));
          setEditedCarOwner(null);
          // Refresh the car list or show a success message
        } catch (error) {
          console.error(error);
          // Handle the error
        }
      };
  
    const handleDelete = async (owner_code) => {
      try {
        await axios.delete(`http://localhost:8000/car_owners/${owner_code}/`);
        // Refresh the car owner list or show a success message
        setCarOwners((prevCarOwners) =>
          prevCarOwners.filter((carOwner) => carOwner.owner_code!== owner_code)
        );
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
                <h6 className="panel-title">Car Owners</h6>
              </div>
              <table className="table table-hover">
              
<thead>
  <tr>
    <th>Owner Code</th>
    <th>Owner Type</th>
    <th>Agency Name</th>
    <th>Agency Address</th>
    <th>Agency Contact</th>
    <th>Representative Name</th>
    <th>Individual Name</th>
    <th>Address</th>
    <th>Phone</th>
    <th>Emergency Contact</th>
    <th>License Number</th>
    <th>Traffic Violations</th>
    <th>Actions</th>
  </tr>
</thead>
                <tbody>
                {carOwners.map((carOwner, index) => (
  <tr key={carOwner.owner_code}>
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
        <button className="btn btn-primary" onClick={() => handleSave(carOwner.owner_code)}>
          Save
        </button>
      ) : (
        <button className="btn btn-primary" onClick={() => handleEdit(index)}>
          Edit
        </button>
      )}
      <button className="btn btn-danger" onClick={() => handleDelete(carOwner.owner_code)}>
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