import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar>
            
            <Toolbar>
                <Typography varient='h6'>Employees</Typography>
               <Link to='/add'> 
                <Button variant='container' >Add</Button>
                </Link>
                <Link to='/view'>
                <Button variant='container' >View</Button>
                </Link>
            </Toolbar>
        </AppBar>
      <br /><br /><br />
    </div>
  )
}

export default Navbar