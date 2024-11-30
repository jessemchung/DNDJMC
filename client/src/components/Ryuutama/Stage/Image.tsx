import { useState, useEffect, useContext } from 'react';
var randomColor = require('randomcolor'); // import the script
import * as React from 'react'
import * as THREE from "three";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import axios from 'axios';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Weather from './ImageDecoration/Weather.jsx'

import { TerrainType } from './ImageDecoration/TerrainType.jsx'
import { ElementalField } from './ImageDecoration/ElementalField.jsx'

import { TerrainTypeInterface } from './ImageDecoration/_Types.jsx';
import UserContext from '../UserContext.jsx';
import { RyuutamaForm } from '../Ryuutama.jsx';
import { FreepsCardData } from './Pieces/Common/_Types.jsx';

interface Props {
  creatureData: Array<FreepsCardData>
  form: RyuutamaForm  
  setForm: (data: Partial<RyuutamaForm>) => void
  // need to fix
  // 
};


export default function Image(props: Props) {

  // const [] = useState<TerrainTypeInterface['possibleURL']>('./image/Ryuutama/Terrain/Ryuutama_Alpine.png');
  const { terrainType, setTerrainType } = useContext(UserContext);

  let constructedColorsFreeps = new Array(10).fill(null);

  let constructedColorsCreeps = new Array(10).fill(null);

  for (var color = 0; color < props.creatureData.length; color ++) {
    if (props.creatureData[color].color !== null) {
      if (props.creatureData[color].position !== null) {
        if (props.creatureData[color].creepOrFreep === "creep") {
          constructedColorsCreeps[props.creatureData[color].position] = props.creatureData[color].color;
        } else {
          // must be a freep
          constructedColorsFreeps[props.creatureData[color].position] = props.creatureData[color].color;
        }
      }
    }
  }

  const BackgroundPaper = styled(Paper)(({ theme }) => ({
    textAlign: 'center',
    position: 'relative',
    backgroundImage: `url(${terrainType})`,
    width: '100%',
    aspectRatio: '1.5 / 1',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'

  }));




  //images are going to need to be there, it will likely need layers for a background which should be fine.

  //This is the main box

  //it will have the pieces of information in the corner


  //terrain feature needed



  return (
    <>
      <BackgroundPaper >
        {/* Freep Dots */}
{/*  */}
        {/* Electric Blue (#007AFF) – Bold and energetic, great for a standout player.
            Fiery Red (#FF3B30) – A strong, attention-grabbing color perfect for a competitive player.
            Sunflower Yellow (#FFCC00) – Bright and cheerful, ideal for a positive or cheerful player.
            Emerald Green (#34C759) – A fresh, lively green that symbolizes growth and vitality.
            Vivid Purple (#AF52DE) – A rich, playful color for a unique player.
            Tangerine Orange (#FF9500) – Warm and energetic, ideal for someone who's quick or dynamic. */}

{/* className={`box ${props.indexInitiative === props.index ? 'highlight' : ''}`} */}

      <div className={`marker ${constructedColorsFreeps[0] !== null ? constructedColorsFreeps[0] : ''}`} style={{"top": "45%", "left": "41%"}}></div>
      <div className={`marker ${constructedColorsFreeps[1] !== null ? constructedColorsFreeps[1] : ''}`} style={{"top": "50%", "left": "40%"}}></div>
      <div className={`marker ${constructedColorsFreeps[2] !== null ? constructedColorsFreeps[2] : ''}`} style={{"top": "40%", "left": "42%"}}></div>
      <div className={`marker ${constructedColorsFreeps[3] !== null ? constructedColorsFreeps[3] : ''}`} style={{"top": "55%", "left": "41%"}}></div>
      <div className={`marker ${constructedColorsFreeps[4] !== null ? constructedColorsFreeps[4] : ''}`} style={{"top": "60%", "left": "42%"}}></div>
      <div className={`marker ${constructedColorsFreeps[5] !== null ? constructedColorsFreeps[5] : ''}`} style={{"top": "50%", "left": "25%"}}></div>
      <div className={`marker ${constructedColorsFreeps[6] !== null ? constructedColorsFreeps[6] : ''}`} style={{"top": "35%", "left": "30%"}}></div>
      <div className={`marker ${constructedColorsFreeps[7] !== null ? constructedColorsFreeps[7] : ''}`} style={{"top": "25%", "left": "40%"}}></div>
      <div className={`marker ${constructedColorsFreeps[8] !== null ? constructedColorsFreeps[8] : ''}`} style={{"top": "65%", "left": "30%"}}></div>
      <div className={`marker ${constructedColorsFreeps[9] !== null ? constructedColorsFreeps[9] : ''}`} style={{"top": "75%", "left": "40%"}}></div>

      <div className={`marker ${constructedColorsCreeps[0] !== null ? constructedColorsCreeps[0] : ''}`} style={{"top": "45%", "left": "59%"}}></div>
      <div className={`marker ${constructedColorsCreeps[1] !== null ? constructedColorsCreeps[1] : ''}`} style={{"top": "50%", "left": "60%"}}></div>
      <div className={`marker ${constructedColorsCreeps[2] !== null ? constructedColorsCreeps[2] : ''}`} style={{"top": "40%", "left": "58%"}}></div>
      <div className={`marker ${constructedColorsCreeps[3] !== null ? constructedColorsCreeps[3] : ''}`} style={{"top": "55%", "left": "59%"}}></div>
      <div className={`marker ${constructedColorsCreeps[4] !== null ? constructedColorsCreeps[4] : ''}`} style={{"top": "60%", "left": "58%"}}></div>
      <div className={`marker ${constructedColorsCreeps[5] !== null ? constructedColorsCreeps[5] : ''}`} style={{"top": "50%", "left": "75%"}}></div>
      <div className={`marker ${constructedColorsCreeps[6] !== null ? constructedColorsCreeps[6] : ''}`} style={{"top": "35%", "left": "70%"}}></div>
      <div className={`marker ${constructedColorsCreeps[7] !== null ? constructedColorsCreeps[7] : ''}`} style={{"top": "25%", "left": "60%"}}></div>
      <div className={`marker ${constructedColorsCreeps[8] !== null ? constructedColorsCreeps[8] : ''}`} style={{"top": "65%", "left": "70%"}}></div>
      <div className={`marker ${constructedColorsCreeps[9] !== null ? constructedColorsCreeps[9] : ''}`} style={{"top": "75%", "left": "60%"}}></div>

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

            <Weather key={'Weather'} />

            <div> <ElementalField key={'ElementalField'} /> </div>


            <TerrainType key={'TerrainType'} terrainType={terrainType} setTerrainType={setTerrainType} />



          </ Grid>



        </Box>

        <Box
          sx={{
            position: 'absolute',
            display: 'flex',
            justifyContent: 'space-between',
            top: 0,
          }}
        >
          <Grid container spacing={1}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              p: 1,
              m: 1,
              borderRadius: 1,
            }}
          >
            <Weather key={'Weather'} />
            <div> <ElementalField key={'ElementalField'} /> </div>
            <TerrainType key={'TerrainType'} terrainType={terrainType} setTerrainType={setTerrainType} />
          </ Grid>

        </Box>



        <img style={{
          height: '80%'
        }} src="./image/Ryuutama.png" onClick={() => { console.log('click image') }} />
      </BackgroundPaper>
    </>
  )
}

