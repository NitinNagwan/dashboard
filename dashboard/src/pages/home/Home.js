import { Box } from '@mui/material'
import { Container } from '@mui/system'

import React from 'react'
import Main from '../../components/main/Main'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import '../home/Home.scss'


function Home() {
  return (
    <div className='home'>
        <Sidebar />
        <Box className='main_content' >
            <Navbar />
            <Container maxWidth='xlg'>
             <Main />
             {/* <Charts/> */}
            </Container>
        </Box>

    </div>
  )
}

export default Home