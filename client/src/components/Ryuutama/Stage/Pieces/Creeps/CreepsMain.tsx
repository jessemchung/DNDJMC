import { useState, useEffect } from 'react';
var randomColor = require('randomcolor'); // import the script
import * as React from 'react'
import * as THREE from "three";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import CreepsSampleCard from './CreepsSampleCard.jsx'


//add creep button on the bottom
//this will need to grab from database or from sample data set

//cards will be an array of objects
export default function Creeps() {


  return (
    <>
      <div> Freeps </div>
      <CreepsSampleCard />

    </>
  )
}

