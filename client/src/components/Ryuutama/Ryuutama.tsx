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
import FreesMain from './Stage/Pieces/Freeps/FreepsMain.jsx'
import CreesMain from './Stage/Pieces/Creeps/CreepsMain.jsx'


export default function Ryuutama() {


  // }
  // var color = randomColor(); // a hex code for an attractive color

  const [value, setValue] = useState("yes");
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("");
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    lineHeight: '10px',
  }));

  const darkTheme = createTheme({ palette: { mode: 'dark' } });
  const lightTheme = createTheme({ palette: { mode: 'light' } });


  console.log(value, 'hello');
  axios.get('/favorites')
    .then(function (response) {
      // handle success
      console.log('should be the favorites', response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });

  function increment() {
    setCount(prevCount => prevCount + 1)
  }



  useEffect(() => {
    setColor(randomColor())
  }, [count])


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

                      <FreesMain />

                    </Item>

                    <Item>
                      
                      <div>Stage</div>

                      <MainStage />



                    </Item>

                    <Item>Creeps</Item>

                  </Box>
                </ThemeProvider>
              </Grid>
            ))}
          </Grid>





        </Box>



      </Paper>


    </>
  )
}

