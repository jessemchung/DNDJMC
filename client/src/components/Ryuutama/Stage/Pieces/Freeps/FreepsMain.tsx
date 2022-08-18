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
import {FreepsSingleCard} from './FreepsSingleCard.jsx'
import {FreepsAdd} from './FreepsAdd.jsx'

interface Props {

  indexPieces: number,
  setIndexPieces: React.Dispatch<React.SetStateAction<number>>,

  fullDataFreeps: FreepsCardData[],
  setFullDataFreeps:React.Dispatch<React.SetStateAction<FreepsCardData[]>>, 
}


export default function FreepsMain(props: Props) {
  


  const allCards = props.fullDataFreeps.map((singleCard, index)=> {

    return (
      <FreepsSingleCard freepInfo={singleCard} key={index+"freeps"} fullDataFreeps={props.fullDataFreeps} setFullDataFreeps={props.setFullDataFreeps} />
    )
  })


  return (
    <>
      <div> Freeps </div>
      <FreepsSampleCard />

      {allCards}

      <FreepsAdd indexPieces={props.indexPieces} setIndexPieces={props.setIndexPieces} fullDataFreeps={props.fullDataFreeps} setFullDataFreeps={props.setFullDataFreeps}/>
    </>
  )
}

