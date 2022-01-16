import { useState, useEffect } from 'react';
var randomColor = require('randomcolor'); // import the script
import * as React from 'react'
import * as THREE from "three";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Weather from './ImageDecoration/Weather.jsx'

import { TerrainType } from './ImageDecoration/TerrainType.jsx'
import { ElementalField } from './ImageDecoration/ElementalField.jsx'
export default function Image() {

  const [terrainType, setTerrainType] = useState<string>('./image/Ryuutama/Terrain/Ryuutama_Alpine.png');



  const BackgroundPaper = styled(Paper)(({ theme }) => ({
    textAlign: 'center',
    position: 'relative',
    border: '1px green solid',
    backgroundImage: `url(${terrainType})`,
    width: '100%',
    aspectRatio: '1.5 / 1',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

  }));




  //images are going to need to be there, it will likely need layers for a background which should be fine.

  //This is the main box

  //it will have the pieces of information in the corner


  //terrain feature needed



  return (
    <>
      {/* <div style={{ position: 'relative' }}> Weather on left, Terrain on right </div> */}
      {/* <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
          borderRadius: 1,
        }}
      >
        <Grid container spacing={1} columns={8}
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            p: 1,
            m: 1,
            bgcolor: 'background.paper',
            borderRadius: 1,
          }}
        >

          <Weather />

          <TerrainType terrainType={terrainType} setTerrainType={setTerrainType} />

        </ Grid>

      </Box> */}

      <BackgroundPaper >

        <Box
          sx={{
            position: 'absolute',
            display: 'flex',
            justifyContent: 'space-between',
            top: 0,
          }}
        >
          <Grid container spacing={1} columns={8}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              p: 1,
              m: 1,
              borderRadius: 1,
            }}
          >

            <Weather />

            <div> <ElementalField /> </div>


            <TerrainType terrainType={terrainType} setTerrainType={setTerrainType} />

          </ Grid>

        </Box>




        <img style={{
          height: '80%'
          // position: 'absolute',
          // top: 0,
          // left: 0,
          // border: '1px red solid',


        }} src="./image/Ryuutama.png" onClick={() => { console.log('click image') }} />



      </BackgroundPaper>


      {/* <div>Terrain Advantage left, Elemental Field</div>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
          borderRadius: 1,
        }}
      >

        <Weather />

        <Weather />

      </Box> */}

    </>
  )
}

