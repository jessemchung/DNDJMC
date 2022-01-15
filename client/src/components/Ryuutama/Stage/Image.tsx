import { useState, useEffect } from 'react';
var randomColor = require('randomcolor'); // import the script
import * as React from 'react'
import * as THREE from "three";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Weather from './ImageDecoration/Weather.jsx'

import Terrain from './ImageDecoration/Terrain.jsx'


export default function Image() {



  //images are going to need to be there, it will likely need layers for a background which should be fine.

  //This is the main box

  //it will have the pieces of information in the corner


  //terrain feature needed


  return (
    <>
      <div style={{ position: 'relative' }}> Weather on left, Time of Day of Right </div>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
          borderRadius: 1,
        }}
      >
        <Grid container spacing={1} columns={8}         
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
          borderRadius: 1,
        }}
>

        <Weather />

        <Terrain />

        </ Grid>

      </Box>





      <img src="./image/Ryuutama.png" onClick={() => { console.log('click image') }} />


      <div>Terrain Advantage left, Terrain Toggle Right</div>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
          borderRadius: 1,
        }}
      >

        <Weather />

        <Weather />

      </Box>

    </>
  )
}

