import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BaseLayout from './Base';

const OwnerCenter = () => {
  const [carOwners, setCarOwners] = useState([]);
  const [editedCarIndex, setEditedCarIndex] = useState(null);

  const handleEdit = (index) => {
    console.log(index)
    setEditedCarIndex(index);
  };
  const [editedCarOwner, setEditedCarOwner] = useState(null);
  const [searchTerms, setSearchTerms] = useState({});

  useEffect(() => {
    fetch('http://localhost:8000/car_owners/')
      .then((response) => response.json())
      .then((data) => setCarOwners(data))
      .catch((error) => console.log(error));
  }, []);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    setCarOwners((prevCars) => {
      const updatedCars = [...prevCars];
      updatedCars[index] = { ...updatedCars[index], [name]: value };
      return updatedCars;
    });
  };

  const handleSave = async (owner_code) => {
    const carToUpdate = carOwners.find((car) => car.owner_code === owner_code);
    handleEdit(-1);

    if (!carToUpdate) {
      console.error("C with registration number ${owner_code} not found.");
      return;
    }

    const updatedCar = { ...carToUpdate, ...editedCarOwner };

    try {
      await axios.put('http://localhost:8000/car_owners/${owner_code}/, updatedCar');
      setCarOwners((prevCars) => prevCars.map((car) => (car.owner_code === owner_code ? updatedCar : car)));
      // Refresh the car list or show a success message
    } catch (error) {
      console.error(error);
      // Handle the error
    }
  };

  const handleDelete = async (owner_code) => {
    try {
      await axios.delete('http://localhost:8000/car_owners/${owner_code}/');
      // Refresh the car owner list or show a success message
    } catch (error) {
      console.error(error);
      // Handle the error
    }
  };

  const handleSearchChange = (e, attribute) => {
    const value = e.target.value;
    setSearchTerms((prevSearchTerms) => ({ ...prevSearchTerms, [attribute]: value }));
  };

  const filteredCars = carOwners.filter((car) => {
    for (const attribute in searchTerms) {
      const searchTerm = searchTerms[attribute];
      if (searchTerm && !car[attribute].toLowerCase().includes(searchTerm.toLowerCase())) {
        return false;
      }
    }
    return true;
  });

  return (
    <BaseLayout>
      <div className="container">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h6 className="panel-title">Car Owners</h6>
          </div>
          <table className="table table-hover" id="dev-table">

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
              <tr>
                <th>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => handleSearchChange(e, 'owner_code')}
                  />
                </th>
                <th>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => handleSearchChange(e, 'owner_type')}
                  />
                </th>
                <th>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => handleSearchChange(e, 'agency_name')}
                  />
                </th>

                <th>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => handleSearchChange(e, 'agency_address')}
                  />
                </th>
                <th>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => handleSearchChange(e, 'agency_contact')}
                  />
                </th>
                <th>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => handleSearchChange(e, 'representative_name')}
                  />
                </th>
                <th>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => handleSearchChange(e, 'individual_name')}
                  />
                </th>
                <th>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => handleSearchChange(e, 'address')}
                  />
                </th>
                <th>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => handleSearchChange(e, 'phone')}
                  />
                </th>
                <th>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => handleSearchChange(e, 'emergency_contact')}
                  />
                </th>
                <th>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => handleSearchChange(e, 'license_number')}
                  />
                </th>
                <th>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => handleSearchChange(e, 'traffic_violations')}
                  />
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredCars.map((car, index) => (
                <tr key={car.owner_code}>
                  {Object.entries(car).map(([key, value]) => (
                    <td key={key}>
                      {editedCarOwner === car ? (
                        <input
                          type="text"
                          name={key}
                          value={value}
                          onChange={(e) => handleInputChange(e, index)}
                        />
                      ) : (
                        value
                      )}
                    </td>
                  ))}
                  <td>
                    {editedCarOwner === car ? (
                      <button className="btn btn-primary" onClick={() => handleSave(car.owner_code)}>
                        Save
                      </button>
                    ) : (
                      <button className="btn btn-primary" onClick={() => handleEdit(car)}>
                        Edit
                      </button>
                    )}
                    <button className="btn btn-danger" onClick={() => handleDelete(car.owner_code)}>
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

export default OwnerCenter;