import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BaseLayout from './Base';

const Dashboard = () => {
    return (
        <BaseLayout>
          <div className="container">
            <div className="panel panel-primary">
              <div className="panel-heading">
      <div>
        <h1>Welcome!</h1>
      </div>
      </div>
      </div>
          </div>
        </BaseLayout>
    );
  };
  
  export default Dashboard;