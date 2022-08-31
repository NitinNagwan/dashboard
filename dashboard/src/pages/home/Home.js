
import * as React from "react";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Main from "../../components/main/Main";
import { makeStyles } from "@mui/styles";
import Sidebar from "../../components/sidebar/Sidebar";
import Footer from "../../components/footer/Footer";
import DataTable from "../../components/table/Table";
import EnhancedTable from "../../components/table/Table";

const useStyle = makeStyles({
  sidebar: {
    background: `linear-gradient(240deg, #325da8a4 40%, #3355b3 70%) !important`,
    height: "100vh",
  },
});

function Home(props) {
 
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
   
      <Sidebar />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          position: "relative"
        }}
      >
        <Toolbar  />
        {/* <Main /> */}
<EnhancedTable/>
      </Box>
        {/* <Footer/> */}
    </Box>
  );
}


export default Home;
