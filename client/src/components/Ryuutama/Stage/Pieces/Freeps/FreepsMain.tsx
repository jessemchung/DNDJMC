import { useState, useEffect } from 'react';
var randomColor = require('randomcolor'); // import the script
import * as React from 'react'
import * as THREE from "three";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import FreepsSampleCard from './FreepsSampleCard.jsx'
import {FreepsCardData} from '../Common/_Types.jsx'


interface Props {

  fullDataFreeps: FreepsCardData[],
  setFullDataFreeps:React.Dispatch<React.SetStateAction<FreepsCardData[]>>, 
}


export default function FreepsMain(props: Props) {


  // const allCards = props.fullDataCreeps.map((singleCard, index)=> {

  //   return (
  //     <CreepsSingleCard creepInfo={singleCard} key={index} />
  //   )
  // })


  return (
    <>
      <div> Freeps </div>
      <FreepsSampleCard />



    </>
  )
}

