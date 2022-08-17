import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "../navbar/Navbar.scss";

const settings = [
  {
    name: "Profile",
  },
  {
    name: "Logout",
  },
];

const ResponsiveAppBar = () => {
  // const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  // const handleOpenNavMenu = (event) => {
  //   setAnchorElNav(event.currentTarget);
  // };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" className="navbar">
      <Toolbar
        disableGutters
        sx={{ mr: { xs: "40px", md: "70px", cursor: "pointer" } }}
      >
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "flex", md: "flex" },
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <Avatar
            sx={{
              width: { xs: "40px", md: "45px" },
              height: { xs: "40px", md: "45px" },
            }}
            className="avtar"
          ></Avatar>

          <Tooltip
            title=""
            placement="bottom-start"
            onClick={handleOpenUserMenu}
          >
            <Typography
              sx={{
                fontSize: { xs: "18px", md: "23px" },
                color: "#000",
                ml: "7px",
                mt: "10px",
                fontWeight: "500",
              }}
            >
              Nitin Nagwan
            </Typography>
          </Tooltip>
          <Tooltip
            title=""
            placement="bottom-start"
            onClick={handleOpenUserMenu}
          >
            <KeyboardArrowDownIcon sx={{ color: "darkgrey" }} />
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            className="menu"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem
                key={setting.name}
                onClick={handleCloseUserMenu}
                className="tooltip_items"
              >
                <Typography
                  sx={{
                    width: "170px",
                    fontWeight: "500",
                    fontSize: "20px",
                    p: "6px",
                  }}
                >
                  {setting.name}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default ResponsiveAppBar;
