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
import Stack from '@mui/material/Stack';

interface DiceObject {
  d4: number;
  d6: number;
  d8: number;
  d10: number;
  d12: number;
  d20: number;
}

export default function Dice() {

  const [d4, setD4] = useState<number>(0);
  const [d6, setD6] = useState<number>(0);

  const [diceValues, setDiceValues] = useState<DiceObject>({
    d4: 0,
    d6: 0,
    d8: 0,
    d10: 0,
    d12: 0,
    d20: 0,

  })

  //should I hook them into the right things? so that I can build

  const numberGenerator = (max: number, thing: keyof DiceObject) => {

    let newNumber = (Math.ceil(Math.random() * max));
    // thing(newNumber);
    setDiceValues({
      ...diceValues,
      [thing]: newNumber
    })
  }

  return (
    <>
      <Stack direction="row" spacing={2}>


        <Button onClick={()=> {numberGenerator(4, 'd4')}}>{diceValues.d4}</Button>
        <Button onClick={()=> {numberGenerator(6, 'd6')}}>{diceValues.d6}</Button>
        <Button onClick={()=> {numberGenerator(8, 'd8')}}>{diceValues.d8}</Button>
        <Button onClick={()=> {numberGenerator(10, 'd10')}}>{diceValues.d10}</Button>
        <Button onClick={()=> {numberGenerator(12, 'd12')}}>{diceValues.d12}</Button>
        <Button onClick={()=> {numberGenerator(20, 'd20')}}>{diceValues.d20}</Button>

        {/* <Button onClick={()=> {numberGenerator(6, setD4)}}>{d4}</Button> */}


      </Stack>


    </>
  )
}

