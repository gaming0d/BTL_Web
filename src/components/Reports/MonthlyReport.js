import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MonthlyReport = () => {
  const [reportData, setReportData] = useState([]);

  useEffect(() => {
    const fetchMonthlyReport = async () => {
      const response = await axios.get('http://localhost:3001/reports/monthly');
      setReportData(response.data);
    };
    fetchMonthlyReport();
  }, []);

  return (
    <div className="container">
      <h2 className="mt-4">Báo Cáo Hàng Tháng</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Trung Tâm Đăng Kiểm</th>
            <th>Số Lượng Xe</th>
          </tr>
        </thead>
        <tbody>
          {reportData.map((item) => (
            <tr key={item.id}>
              <td>{item.center}</td>
              <td>{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MonthlyReport;
