import { Box, Button, TextField } from '@mui/material'
import React from 'react'

const Add = () => {

  function popup(){
    alert('ADDED TO CART SUCCESSFULLY')
  }
  return (
    <div>
    <Box style={{width:'80vw'}}
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div style={{marginTop:'10px',width:'100%'}}>
      <div >
        <TextField style={{width:"40vw",backgroundColor:"#324B4B"}}
          // required
          id="outlined-required"
          label="Product Name"
          // defaultValue="product name"
        />
          </div>
        <div>
        <TextField style={{width:"40vw",backgroundColor:"#324B4B"}}
          // required
          id="outlined-required"
          label="Description"
          // defaultValue="product description"
        />
        </div>
        <div>
        <TextField style={{width:"40vw",backgroundColor:"#324B4B"}}
          // required
          id="outlined-required"
          label="Price"
          // defaultValue="product price"
        />
        </div>
        <div>
        <TextField style={{width:"40vw",backgroundColor:"#324B4B"}}
          // required
          id="outlined-required"
          label="Category"
          // defaultValue="product category"
        />
        </div>
        </div>
    </Box>
    <Button onClick={popup} style={{backgroundColor:"#FBE9D0",borderRadius:"10px",color:"#874f41"}}>Add To Cart</Button><br></br>
    <small>click add to cart</small>
    </div>
  )
}

export default Add