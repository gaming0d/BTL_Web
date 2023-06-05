import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <nav className="col-md-2 d-none d-md-block bg-light sidebar">
      <div className="sidebar-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className="nav-link" to="/vehicles">
              Xe Ô tô
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/upload-vehicle">
              Tải Lên Xe
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/monthly-report">
              Báo Cáo Hàng Tháng
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/expiring-vehicles">
              Xe Sắp Hết Hạn
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
