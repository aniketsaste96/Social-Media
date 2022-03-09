import React from "react";
import "./charts.css";
import { Pdata } from "./chartData.js";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const BarChart = () => {
  return (
    <>
      <div className="chart">
        <h1 className="charHeading">Active Users & Posts</h1>
        <ResponsiveContainer width="100%" aspect={3}>
          <LineChart
            data={Pdata}
            width={500}
            height={300}
            margin={{ right: 20, left: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />

            <Line
              type="monotone"
              dataKey="users"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <XAxis dataKey="Month" interval={"preserveStartEnd"} />
            <YAxis />
            <Line dataKey="posts" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};
export default BarChart;
