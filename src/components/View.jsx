import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const View = () => {

  const [products,setProducts]=useState([])
  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products').then((res) => {
      // console.log(res.data)
      setProducts(res.data)
    })
  })
  

  return (
    <div>
    <div>
      <Typography
        variant='h4'
        style={{ marginTop:'3%', fontWeight:'bold',color:'#212A31' }}
      >
          "Unleash The Possibilites"
      </Typography>
  </div>
  <Grid container spacing={2} justifyContent="center">
          {products.map((product) => (
              <Grid item xs={4} >
                  <Card sx={{ maxWidth: '100%', margin: '5% auto', textAlign: 'left' }} style={{backgroundColor:'#324B4B',borderRadius:"17px"}}>
                      <CardContent style={{backgroundColor:'#324B4B',borderRadius:'17px'}}>
                          <CardMedia
                            component="img"
                            height="194"
                            image= {product.image}
                            alt="Paella dish"
                          />
                          <Typography sx={{ mb: 1.5 }} style={{color:'#e6f4f1'}}>
                              <b>Title:</b> <small>{product.title} </small>
                          </Typography>
                          <Typography sx={{ mb: 1.5 }} style={{color:'#e6f4f1'}}>
                              <b>Price:</b> <small>{product.price} </small> $
                          </Typography>
                          <Typography sx={{ mb: 1.5 }} style={{color:'#e6f4f1'}}>
                              <b>Category:</b> <small>{product.category} </small>
                          </Typography>
                      </CardContent>
                  </Card>
              </Grid>
          ))}
      </Grid>
  </div>
  )
}

export default View