import React from 'react';
import { Helmet } from 'react-helmet';
import './Base.css';

const BaseLayout = ({ customer, request, children }) => {
  return (
    <div>
        <Helmet>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css"
        />
        {/* Add any other external CSS files you need */}
        </Helmet>
      <header style={{ paddingTop: '0px' }}>
        <label htmlFor="check">
          <i style={{ paddingLeft: '60px', marginTop: '17px' }} className="fas fa-bars" id="sidebar_btn"></i>
        </label>
        <div className="left_area">
          <h3>Car Management </h3>
        </div>
        <div className="right_area">
          <a href="/logout" className="logout_btn">Logout</a>
        </div>
      </header>

      <div className="sidebar" style={{ marginTop: '60px' }}>
        <a href="/cuc/dashboard"><i className="fas fa-tachometer-alt"></i><span>Dashboard</span></a>
        <a href="/cuc/listofcar"><i className="fab fa-product-hunt"></i><span>Car</span></a>
        <a href="/cuc/listofinspection"><i className="fas fa-history"></i><span>Inspection</span></a>
        <a href="/cuc/listofowner"><i className="fas fa-question-circle"></i><span>Owner</span></a>
        <a href="/cuc/add"><i className="fas fa-sync-alt"></i><span>Add</span></a>
        <a href="/cuc/account"><i className="fas fa-sync-alt"></i><span>Account</span></a>
      </div>

      <div className="content">
        <br /><br /><br /><br /><br />
        {children}
        <br /><br /><br />
      </div>
    </div>
  );
};

export default BaseLayout;