
import BaseLayout from './Base';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Owner = ({ customers }) => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/car_owners/')
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
                <th>Owner Code</th>
                <th>Traffic Violations</th>
              </tr>
            </thead>
            <tbody>
            {cars.map((car) => (
              <tr key={car.registration_number}>
                
                <td>{car.owner && car.owner.owner_type}</td>
                <td>{car.owner && car.owner.owner_type === 'agency' ? car.owner.agency_name : ''}</td>
                <td>{car.owner && car.owner.owner_type === 'agency' ? car.owner.agency_name : 'null'}</td>
                <td>{car.owner && car.owner.owner_type === 'agency' ? car.owner.agency_address : 'null'}</td>
                <td>{car.owner && car.owner.owner_type === 'agency' ? car.owner.agency_contact : 'null'}</td>
                <td>{car.owner && car.owner.owner_type === 'agency' ? car.owner.representative_name : 'null'}</td>
                <td>{car.owner && car.owner.owner_type === 'individual' ? car.owner.individual_name : 'null'}</td>
                <td>{car.owner && car.owner.owner_type === 'individual' ? car.owner.address : 'null'}</td>
                <td>{car.owner && car.owner.owner_type === 'individual' ? car.owner.phone : 'null'}</td>
                <td>{car.owner && car.owner.owner_type === 'individual' ? car.owner.emergency_contact : 'null'}</td>
                <td>{car.owner && car.owner.owner_type === 'individual' ? car.owner.license_number : 'null'}</td>
                <td>{car.owner ? car.owner.owner_code : 'null'}</td>
                <td>{car.owner ? car.owner.traffic_violations : 'null'}</td>
                <td>{car.owner.representative_name}</td>
                <td>{car.owner.address}</td>
                <td>{car.owner.phone}</td>
                <td>{car.owner.emergency_contact}</td>
                <td>{car.owner.license_number}</td>
                <td>{car.owner.owner_code}</td>
                <td>{car.owner.traffic_violations}</td>
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