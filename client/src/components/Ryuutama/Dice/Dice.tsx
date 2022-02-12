//planning

//this is going to take in a button press

//output will be a number

//6 different buttons.  

//maybe a preset or save feature so that in a given session i can save a dice set

//a total must also be given.  with a reset button

//this can all likely be done just here... maybe.  Context should include an array of objects
//containing information for additional buttons

import { useState, useEffect } from 'react';
var randomColor = require('randomcolor'); // import the script
import * as React from 'react'
import * as THREE from "three";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';


export default function Dice() {


  return (
    <>
      <Box>
        <span>d4</span>
        <span>d6</span>
        <span>d8</span>
        <span>d10</span>
        <span>d12</span>
        <span>d20</span>
      </Box>


    </>
  )
}

