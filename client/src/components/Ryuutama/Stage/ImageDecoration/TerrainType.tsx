import { useState } from 'react';
import * as React from 'react'
import { createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';




const arrayOfBenefits : string[] = ['Forest', 'Desert', 'Snow', 'Mountain']

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: purple[500],
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#11cb5f',
    },
  },
});

export default function PropsBarIndividualCard() {

  const [terrain, setTerrain] = useState<number>(0);

  return (
    <>
    <h3> {arrayOfBenefits[terrain]} </h3>
    </>
  )
}

