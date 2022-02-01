import { useState, useEffect } from 'react';
var randomColor = require('randomcolor'); // import the script
import * as React from 'react'
import * as THREE from "three";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import MainStage from './Stage/MainStage.jsx'
import FreepsMain from './Stage/Pieces/Freeps/FreepsMain.jsx'
import CreepsMain from './Stage/Pieces/Creeps/CreepsMain.jsx'
import {CreepsSampleData} from './Stage/Pieces/Creeps/CreepsSampleData.jsx'
import {FreepsSampleData} from './Stage/Pieces/Freeps/FreepsSampleData.jsx'

import {CreepsCardData, FreepsCardData} from './Stage/Pieces/Common/_Types.jsx'
import { Button } from '@mui/material';


const quickTest = <MainStage key={'MainStage'} />

export default function Ryuutama() {


  // }
  // var color = randomColor(); // a hex code for an attractive color

  const [value, setValue] = useState("yes");
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("");
  const [fullDataCreeps, setFullDataCreeps] = useState<CreepsCardData[]>([])
  const [fullDataFreeps, setFullDataFreeps] = useState<FreepsCardData[]>(FreepsSampleData)
  const [initiative, setInitiative] = useState<number>(30);

  //readability probably trumps in thise case, I don't want to necessarilly have everything together
  //intitiative can be check both
  const [indexFreeps, setIndexFreeps] = useState<number>(0)

  //!Jesse this is important there needs to be something that will clean the deleted items (aka, null) at loading time
  //if initiative is equal to the number it should be fixed

  const testClick = () => {
    console.log(fullDataCreeps, 'were these changed fullDataCreeps?');
    console.log(fullDataFreeps, 'fullDataFreeps')

  }

  const initiativeCheck = ()=> {
    //this will check initiative.  A button must be somewhere to also help this with a reset.  Perhaps
    // a crude float or something.  Perhaps in the bottom part of the ryuutama thingx

    let found = false;
    for (let i = initiative; i>0; i--) {
      console.log(i);
    }
  }
  

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    lineHeight: '10px',
    
  }));

  const darkTheme = createTheme({ palette: { mode: 'dark' } });
  const lightTheme = createTheme({ palette: { mode: 'light' } });

// I would suspect we need to consider where initiative is decided.  It must start with the highest one I think.  If that is the case
// then both values should start here I suppose, then it picks starting from the highest number

//initiative will need to be tracked so that the next lowest one will be picked.

// a roll can be given I suppose.  

//a dice roller on top to be implemented first
  return (
    <>


      <Paper>        
        <Box>
          <Grid container spacing={2}>
            {[lightTheme].map((theme, index) => (
              <Grid item xs={6} sm={6} columns={6} key={index}>
                <ThemeProvider theme={theme}>
                  <Box
                    sx={{
                      p: 1,
                      bgcolor: 'background.default',
                      display: 'grid',
                      gridTemplateColumns: { md: '1fr 4fr 1fr' },
                      gap: 2,
                    }}
                  >


                    <Item>
                      <div>Freeps</div>

                      <FreepsMain key={'FreepsMain'} indexPieces={indexFreeps} setIndexPieces={setIndexFreeps} fullDataFreeps={fullDataFreeps} setFullDataFreeps={setFullDataFreeps} />

                    </Item>

                    <Item>
                      
                      <div>Stage</div>

                      {quickTest}

                    </Item>

                    <Item><div>Creeps </div>

                    <CreepsMain key={'CreepsMain'} fullDataCreeps={fullDataCreeps} setFullDataCreeps={setFullDataCreeps}/>

                    </Item>

                  </Box>
                </ThemeProvider>
              </Grid>
            ))}
          </Grid>





        </Box>



      </Paper>

      <Button onClick={testClick}>Test Button</Button>
    </>
  )
}

