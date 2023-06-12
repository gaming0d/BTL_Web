
import BaseLayout from './Base';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Inspection = ({ customers }) => {
    const [inspections, setInspections] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/car_inspections/')
        .then((response) => response.json())
        .then((data) => setInspections(data))
        .catch((error) => console.log(error));
    }, []);

  return (
    <BaseLayout>
      <div className="container">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h6 className="panel-title">Inspection</h6>
          </div>
          <table className="table table-hover" id="dev-table">
            <thead>
                <tr>
                <th>Inspection Number</th>
                <th>Inspection Date</th>
                <th>Expiration Date</th>
                <th>Inspection Center</th>
                <th>Car Registration Number</th>
                <th>Owner</th>
                </tr>
            </thead>
            <tbody>
                {inspections.map((inspection) => (
                <tr key={inspection.inspection_number}>
                    <td>{inspection.inspection_number}</td>
                    <td>{inspection.inspection_date}</td>
                    <td>{inspection.expiration_date}</td>
                    <td>{inspection.inspection_center}</td>
                    <td>{inspection.car.registration_number}</td>
                    <td>{inspection.owner.owner_type === 'agency' ? inspection.owner.agency_name : inspection.owner.individual_name}</td>
                </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Inspection;