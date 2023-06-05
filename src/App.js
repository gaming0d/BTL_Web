import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Common/Navbar';
import Sidebar from './components/Common/Sidebar';
import Login from './components/Authentication/Login';
import VehicleList from './components/Vehicles/VehicleList';
import UploadVehicle from './components/Vehicles/UploadVehicle';
import MonthlyReport from './components/Reports/MonthlyReport';
import ExpiringVehicles from './components/Reports/ExpiringVehicles';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
            <Routes>
              <Route exact path="/" component={Login} />
              <Route path="/vehicles" component={VehicleList} />
              <Route path="/upload-vehicle" component={UploadVehicle} />
              <Route path="/monthly-report" component={MonthlyReport} />
              <Route path="/expiring-vehicles" component={ExpiringVehicles} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
