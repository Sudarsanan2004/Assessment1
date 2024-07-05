import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'



const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{width:'100%',backgroundColor:'#FBE9D0',color:'#874f41'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{textAlign:'left',fontSize:'23px',fontWeight:'bold'}}>
            PRODUCT APP
          </Typography>
          <Link to={'/'}><Button style={{color:'#874f41'}}>HOME</Button></Link>
          <Link to={'/Add'}><Button style={{color:'#874f41'}}>ADDPRODUCT</Button></Link>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar