//planning

//this is going to take in a button press

//output will be a number

//6 different buttons.  

//maybe a preset or save feature so that in a given session i can save a dice set

//a total must also be given.  with a reset button

//this can all likely be done just here... maybe.  Context should include an array of objects
//containing information for additional buttons

import { useState, useEffect, Dispatch, SetStateAction } from 'react';
var randomColor = require('randomcolor'); // import the script
import * as React from 'react'
import * as THREE from "three";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { Button } from '@mui/material';


export default function Dice() {

  const [d4, setD4] = useState<number>(0);

  const testClick = (max: number, thing: Dispatch<SetStateAction<number>>) => {

    let newNumber = (Math.ceil(Math.random() * max));
    thing(newNumber);
  }

  return (
    <>
      <Box>
        <span>d4</span>
        <span>d6</span>
        <span>d8</span>
        <span>d10</span>
        <span>d12</span>
        <span>d20</span>

        <Button onClick={()=> {testClick(4, setD4)}}>{d4}</Button>


      </Box>


    </>
  )
}

