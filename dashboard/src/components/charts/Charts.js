// import React from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";
// import ResponsiveAppBar from "../navbar/Navbar";

// const data = [
//   {
//     name: "Page A",
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: "Page B",
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: "Page C",
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: "Page D",
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: "Page E",
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: "Page F",
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: "Page G",
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];

// function Charts() {
//   return (
  
//     <ResponsiveContainer width="100%" height="700">

//         <BarChart
//           width={1400}
//           height={500}
//           data={data}
//           margin={{
//             top: 50,
//             right: 80,
//             bottom: 10,
//           }}
//         >
//           <CartesianGrid strokeDasharray="5 1" />
//           <XAxis dataKey="name" />
//           <YAxis width={80} />
//           <Legend />
//           <Bar dataKey="pv" fill="#8884d8" barSize={90} />
//         </BarChart>
//     </ResponsiveContainer>

//   );
// }

// export default Charts;


import React from 'react';
import "../charts/charts.scss";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom'
    }
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map((label) => faker.datatype.number({ min: 30, max: 1000 })),
      maxBarThickness: 90,
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    // {
    //   label: 'Dataset 1',
    //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
    //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
    // },
    // {
    //   label: 'Dataset 1',
    //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
    //   backgroundColor: 'rgba(53, 162, 100, 0.5)',
    // },
  ],
};

export default function Charts() {
  return <Bar options={options} data={data} style={{marginTop: '30px'}} />;
}
