import React, { useState } from "react";
import "../sidebar/Sidebar.scss";
import StackedBarChartIcon from "@mui/icons-material/StackedBarChart";
import { Box, Stack } from "@mui/material";
const arr = [
  "Main",
  "Manage Claims",
  "Manage Users",
  "Manage Expense Group",
  "Manage Expense Type",
  "Company Management",
  "VAT/VAX Management",
  "Mileage Management",
  "Manage Department",
  "Manage Expense Code",
  "My Account",
  "Settings",
];

function Sidebar() {
  const [active, setActive] = useState("Main");
  const setActiveClass = (name) => {
    setActive(name);
  };
  return (
    <div className="sidebar" sx={{display: {xs: 'none'}}}>
      <div className="sidebar_top"> DashBoard </div>
     
        <div className="main">
          <div className="upper_heading">
            <StackedBarChartIcon className="icon" />
            <span>Dashboard</span>
          </div>
        </div>
      
      <Stack className="list_items">
        {arr.map((item) => {
          return (
            <li
              className={active === item ? "active" : ""}
              value={item}
              onClick={() => setActiveClass(item)}
              key={item}
            >
              <span>{item}</span>
            </li>
          );
        })}
      </Stack>
    </div>
  );
}

export default Sidebar;
