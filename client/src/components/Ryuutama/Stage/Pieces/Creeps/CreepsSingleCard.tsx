import { useState, useEffect } from 'react';
var randomColor = require('randomcolor'); // import the script
import * as React from 'react'
import * as THREE from "three";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { purple } from '@mui/material/colors';



interface Props {


};



//card likely needs to have flex to split it in a half
export const FreepsSampleCard: React.FC<Props> = (prop: Props) => {
  

  // <Grid container spacing={1} columns={10}>

  return (
    <>

      <Card sx={{ display: 'flex' }}>

        <Grid container spacing={1} columns={2}>

          <CardContent >
            <img src="./image/Ryuutama/SampleIcons/BradGood.png" onClick={() => { console.log('click image') }} />
          </CardContent>


          <CardContent >
            <Typography variant="body1" component="div" color="primary">
              Sample Card


            </Typography>


            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >

              <Typography display="inline" variant="body2" align="left" >
                HP
              </Typography>


              <Typography display="inline" variant="body2" align="left">
                5


              </Typography>

            </Box>


            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >

              <Typography display="inline" variant="body2" align="left" >
                Initiative
              </Typography>


              <Typography display="inline" variant="body2" align="left">
                0


              </Typography>

            </Box>


            <Typography variant="body2" align="left">
              Armor
            </Typography>

            <Button size="small">E</Button>



          </CardContent>

        </Grid>

      </Card>


    </>
  )
}

