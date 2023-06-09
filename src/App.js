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
import Mainpage from './components/Office/Mainpage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/vehicles" element={<VehicleList/>} />
        <Route path="/upload-vehicle" element={<UploadVehicle />} />
        <Route path="/monthly-report" element={<MonthlyReport />} />
        <Route path="/expiring-vehicles" element={<ExpiringVehicles />} />
        <Route path="/cuc/mainpage" element={<Mainpage/>} />
      </Routes>
    </Router>
  );
};

export default App;