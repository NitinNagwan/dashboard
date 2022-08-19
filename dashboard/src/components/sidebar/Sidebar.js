// import React, { useState } from "react";
// import "../sidebar/Sidebar.scss";
// import StackedBarChartIcon from "@mui/icons-material/StackedBarChart";
// import { Stack } from "@mui/material";
// const arr = [
//   "Main",
//   "Manage Claims",
//   "Manage Users",
//   "Manage Expense Group",
//   "Manage Expense Type",
//   "Company Management",
//   "VAT/VAX Management",
//   "Mileage Management",
//   "Manage Department",
//   "Manage Expense Code",
//   "My Account",
//   "Settings",
// ];

// function Sidebar() {
//   const [active, setActive] = useState("Main");
//   const setActiveClass = (name) => {
//     setActive(name);
//   };
//   return (
//     <div className="sidebar">
//       <div className="sidebar_top"> DashBoard </div>

//         <div className="main">
//           <div className="upper_heading">
//             <StackedBarChartIcon className="icon" />
//             <span>Dashboard</span>
//           </div>
//         </div>

//       <Stack className="list_items">
//         {arr.map((item) => {
//           return (
//             <li
//               className={active === item ? "active" : ""}
//               value={item}
//               onClick={() => setActiveClass(item)}
//               key={item}
//             >
//               <span>{item}</span>
//             </li>
//           );
//         })}
//       </Stack>
//     </div>
//   );
// }

// export default Sidebar;
import * as React from "react";

import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import ListItemText from "@mui/material/ListItemText";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import StackedBarChartIcon from "@mui/icons-material/StackedBarChart";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  sidebar: {
    background: `linear-gradient(240deg, #325da8a4 40%, #3355b3 70%) !important`,
    height: "100vh",
  },

  listItems: {
    color: "#eee",
    opacity: "1",
  },
  listItem: {
    padding: "10px 0",
  },
  icon: {
    fontSize: "35px !important",
  },
  active: {
    opacity: "1",
    backgroundColor: "#3e579c94 !important",
    borderRight: "6px solid #172c6e",
  },
});

const drawerWidth = 350;
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

function Sidebar(props) {
  const classes = useStyle(props);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [active, setActive] = React.useState("Main");

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const setActiveClass = (name) => {
    setActive(name);
  };
  const drawer = (
    <div className={classes.sidebar}>
      <Toolbar>
        <Typography sx={{ fontSize: "22px", fontWeight: "800", color: "#eee" }}>
          Dashboard
        </Typography>
      </Toolbar>
      <Divider />
      <Toolbar>
        <StackedBarChartIcon sx={{ fontSize: "32px", color: "#fff" }} />
        <p style={{ color: "#fff", fontWeight: "bold", marginTop: "14px" }}>
          Dashboard
        </p>
      </Toolbar>
      <Toolbar>
        <List sx={{ width: "100%" }} className={classes.listItems}>
          {arr.map((text, index) => (
            <ListItem
              key={text}
              sx={{ p: "3", cursor: "pointer" }}
              className={active === text ? classes.active : ""}
            >
              <ListItemText
                primary={text}
                onClick={() => setActiveClass(text)}
              />
            </ListItem>
          ))}
        </List>
      </Toolbar>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box
      component="nav"
      sx={{ width: { sm: 0, md: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        className="drawer"
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "none", md: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
}

export default Sidebar;
