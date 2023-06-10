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
import CarList from './components/Vehicles/CarList';
import Car from './components/Office/Car'
import Owner from './components/Office/Owner'
import Inspection from "./components/Office/Inspection"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/vehicles" element={<VehicleList/>} />
        <Route path="/upload-vehicle" element={<UploadVehicle />} />
        <Route path="/monthly-report" element={<MonthlyReport />} />
        <Route path="/expiring-vehicles" element={<ExpiringVehicles />} />
        <Route path="/CarList" element={<CarList/>} />
        <Route path="/cuc/listofcar" element={<Car/>} />
        <Route path="/cuc/listofowner" element={<Owner/>} />
        <Route path="/cuc/listofinspection" element={<Inspection/>}/>
      </Routes> 
    </Router>
    // <a href="/cuc/dashboard"><i className="fas fa-tachometer-alt"></i><span>Dashboard</span></a>
    // <a href="/cuc/listofcar"><i className="fab fa-product-hunt"></i><span>Car</span></a>
    // <a href="/cuc/listofinspection"><i className="fas fa-history"></i><span>Inspection</span></a>
    // <a href="/cuc/listofowner"><i className="fas fa-question-circle"></i><span>Owner</span></a>
    // <a href="/cuc/add"><i className="fas fa-sync-alt"></i><span>Add</span></a>
  );
};

export default App;