import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import "../navbar/Navbar.scss";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Logout"];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" className="navbar" >
   
        <Toolbar disableGutters sx={{mr:{ xs:'40px', md:'70px', cursor: 'pointer'}}}>
          

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' }, alignItems: 'center', justifyContent: 'flex-end'  }} >
       
            <Avatar sx={{width: {xs: '40px', md:'45px'}, height: {xs: '40px', md:'45px'}} } className='avtar'></Avatar>
          
            <Tooltip title='' placement="bottom-start" onClick={handleOpenUserMenu} >
              <Typography sx={{fontSize: {xs: '20px', md:'25px'}, color: '#eee', ml: '7px', mt:'10px',fontWeight: '500',fontFamily: 'Kaushan Script, cursive'}}>Nitin Nagwan</Typography>
              
            </Tooltip>
            <Tooltip title='' placement="bottom-start" onClick={handleOpenUserMenu}>
            <KeyboardArrowDownIcon/>
            </Tooltip>
            <Menu
              sx={{ mt: '45px', }}
              id="menu-appbar"   
              className="menu" 
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal:'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}  >
              
                  <Typography textAlign="center" sx={{width:'200px', textAlign: 'start', p:'4px', fontWeight: '700',fontSize: '20px',fontFamily: 'Kaushan Script, cursive'}}  >{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>

    </AppBar>
  );
};
export default ResponsiveAppBar;
