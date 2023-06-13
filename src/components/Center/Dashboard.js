import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BaseLayout from './Base';
import {
  Tooltip,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  LineChart,
  Line,
} from "recharts";

const DashboardCenter = () => {
  const [data] = useState([
    { name: "2023-01", carquantity: 60 },
    { name: "2023-02", carquantity: 70 },
    { name: "2023-03", carquantity: 55 },
    { name: "2023-04", carquantity: 75 },
  ]);

  return (
    <BaseLayout>
      <div style={{ textAlign: "center" }} className="App2">
        <div className="App">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 80,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis/>
            <Tooltip/>
            <Legend/>
            <Line
              type="monotone"
              dataKey="carquantity"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </div>
      </div>
    </BaseLayout>
  );
};

export default DashboardCenter;