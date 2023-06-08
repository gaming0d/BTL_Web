import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Common/Navbar';
import Sidebar from './components/Common/Sidebar';
import Login from './components/Authentication/Login';
import VehicleList from './components/Vehicles/VehicleList';
import UploadVehicle from './components/Vehicles/UploadVehicle';
import MonthlyReport from './components/Reports/MonthlyReport';
import ExpiringVehicles from './components/Reports/ExpiringVehicles';
import './App.css'; // Import CSS từ tệp App.css

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="sidebar">
            <Sidebar />
          </div>
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
            <h1 className="main-title">Welcome to My App</h1>
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/vehicles" element={<VehicleList />} />
              <Route path="/upload-vehicle" element={<UploadVehicle />} />
              <Route path="/monthly-report" element={<MonthlyReport />} />
              <Route path="/expiring-vehicles" element={<ExpiringVehicles />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
