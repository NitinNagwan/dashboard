import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Charts from '../charts/Charts';
import '../main/main.scss'
import { Box, Button, Stack } from '@mui/material';

function Main() {
  return (
    <>
    <Box className="charts">
        <h2>Dashboard</h2>
        <Stack spacing={2} direction="row" className='form_inputs'>
            <div className='form_input'>
                <p>Select Type</p>
                <label htmlFor='title'>
                <input id='title' name='title' type='text' placeholder='All'/>
                <KeyboardArrowDownIcon />
                </label>
            </div>
            <div className='form_input'>
                <p>Duration</p>
                <label htmlFor='title'>
                <input id='title' name='title' type='text' placeholder='All'/>
                <KeyboardArrowDownIcon />
                </label>
            </div>
            <div className='form_input'>
                <p>Claim Type</p>
                <label htmlFor='title'>
                <input id='title' name='title' type='text' placeholder='Claim'/>
                <KeyboardArrowDownIcon />
                </label>
            </div>
            <div className='form_input'>
                <span>Currency</span>
                <label htmlFor='title'>
                <input id='title' name='title' type='text' placeholder='All'/>
                <KeyboardArrowDownIcon />
                </label>
            </div>

            <Button variant="contained" sx={{pr: '27px', pl: '27px', fontWeight: 'bold', fontSize:'16px', opacity: '0.8'}}>Apply</Button>
        </Stack>

    </Box>
    <Charts/>

    <div className='seperator'>
        <h1>Users</h1>
        <div className='horizontal_line'></div>
    </div>
    </>
  )
}

export default Main