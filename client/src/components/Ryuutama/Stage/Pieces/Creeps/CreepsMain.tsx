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
import {CreepsSampleData} from './CreepsSampleData.jsx'
import {CreepsCardData} from '../Common/_Types.jsx'
import {CreepsSingleCard} from './CreepsSingleCard.jsx'
import {CreepsAdd} from './CreepsAdd.jsx'
//add creep button on the bottom
//this will need to grab from database or from sample data set

interface Props {
  fullDataCreeps: CreepsCardData[],
  setFullDataCreeps: React.Dispatch<React.SetStateAction<CreepsCardData[]>>,
  //this is expecting a single object

};


//cards will be an array of objects
export default function Creeps(props: Props) {
  console.log(props.fullDataCreeps, 'this should be correct')

  const allCards = props.fullDataCreeps.map((singleCard, index)=> {

    return (
      <CreepsSingleCard creepInfo={singleCard} key={index} />
    )
  })

  return (
    <>
      <div> Freeps </div>
      {allCards}
      {/* <CreepsSampleCard /> */}

      <CreepsAdd setFullDataCreeps={props.setFullDataCreeps} fullDataCreeps={props.fullDataCreeps}/>
    </>
  )
}
