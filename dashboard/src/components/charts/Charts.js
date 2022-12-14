import React from 'react';
import { BarChart, Bar,  XAxis, YAxis, CartesianGrid, Legend } from 'recharts';
import '../charts/charts.scss'

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

function Charts() {
  return (
<>
        <BarChart
          width={1700}
          height={800}
          data={data}
          margin={{
            top: 50,
            right: 80,
            bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="5 1" />
          <XAxis dataKey="name"  />
          <YAxis width={80} />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" barSize={90} />
        </BarChart>
       </>
  )
}

export default Charts