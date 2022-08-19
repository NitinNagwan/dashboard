
import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Navbar from "../../components/navbar/Navbar";
import Main from "../../components/main/Main";
import { makeStyles } from "@mui/styles";
import Sidebar from "../../components/sidebar/Sidebar";

const useStyle = makeStyles({
  sidebar: {
    background: `linear-gradient(240deg, #325da8a4 40%, #3355b3 70%) !important`,
    height: "100vh",
  },
});

function Home(props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
 
   return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "rgb(231, 229, 229)",
        height: "100vh",
        overflowY: "scroll",
      }}
      className="container"
    >
      <CssBaseline />
      <AppBar
        sx={{
          backgroundColor: "#fff",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: {
              xs: "space-between",
              sm: "space-between",
              md: "space-between",
              lg: "flex-end",
            },
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { md: "none" }, color: "#676b79" }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            noWrap
            component="div"
            sx={{ display: "flex", alignItems: "center" }}
          >

            <Navbar />
          </Typography>
        </Toolbar>
      </AppBar>
      <Sidebar />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
        }}
      >
        <Toolbar />
        <Main />
      </Box>
    </Box>
  );
}


export default Home;
