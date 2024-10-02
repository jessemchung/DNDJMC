//planning

//this is going to take in a button press

//output will be a number

//6 different buttons.  

//maybe a preset or save feature so that in a given session i can save a dice set

//a total must also be given.  with a reset button

//this can all likely be done just here... maybe.  Context should include an array of objects
//containing information for additional buttons

import { useState } from 'react';
var randomColor = require('randomcolor'); // import the script
import * as React from 'react'
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

  const numberGenerator = (max: number, selectedDice: keyof DiceObject) => {

    let newNumber = (Math.ceil(Math.random() * max));
    // thing(newNumber);
    setDiceValues({
      ...diceValues,
      [selectedDice]: newNumber
    })
  }


  // probably better for a table adjustment
  return (
    <>
      {/* 6 columns each */}
      <table style={{ "width": "100%" }}>

        <tbody style={{ "width": "100%", textAlign: "center" }}>
          <tr style={{ "width": "100%" }}>
            <td>
              D4
            </td>
            <td>
              D6
            </td>
            <td>
              D8
            </td>
            <td>
              D10
            </td>
            <td>
              D12
            </td>
            <td>
              D20
            </td>
          </tr>
          <tr>
            <td>
              <Button onClick={() => { numberGenerator(4, 'd4') }}>{diceValues.d4}</Button>

            </td>
            <td>

              <Button onClick={() => { numberGenerator(6, 'd6') }}>{diceValues.d6}</Button>

            </td>
            <td>
              <Button onClick={() => { numberGenerator(8, 'd8') }}>{diceValues.d8}</Button>

            </td>
            <td>
              <Button onClick={() => { numberGenerator(10, 'd10') }}>{diceValues.d10}</Button>

            </td>
            <td>
              <Button onClick={() => { numberGenerator(12, 'd12') }}>{diceValues.d12}</Button>

            </td>
            <td>
              <Button onClick={() => { numberGenerator(20, 'd20') }}>{diceValues.d20}</Button>
            </td>

          </tr>
        </tbody>

      </table>


    </>
  )
}

