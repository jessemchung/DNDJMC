import { useState, useEffect } from 'react';
var randomColor = require('randomcolor'); // import the script
import * as React from 'react'
import * as THREE from "three";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Image from './Image.jsx'
import PropsBar from './PropsBar/PropsBar.jsx'


export default function Ryuutama() {


  return (
    <>
      <Image key={'MainImage'} />
      <PropsBar key={'MainPropsBar'}/>


    </>
  )
}

