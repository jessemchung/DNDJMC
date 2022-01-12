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

export default function Image() {



  //images are going to need to be there, it will likely need layers for a background which should be fine.

  //This is the main box

  //it will have the pieces of information in the corner


  //terrain feature needed


  return (
    <>
      <div style={{position: 'relative'}}> Weather on left, Time of Day of Right </div>
      <Weather />



      <img src="./image/Ryuutama.png" onClick={() => { console.log('click image') }} />


      <div>Terrain Advantage left, Terrain Toggle Right</div>
    </>
  )
}

