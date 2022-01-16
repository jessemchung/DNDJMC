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

import {CreepsCardData} from '../Common/_Types.jsx'

interface Props {
  creepInfo: CreepsCardData,
  //this is expecting a single object

};



//card likely needs to have flex to split it in a half
export const CreepsSingleCard: React.FC<Props> = (prop: Props) => {
  

  // <Grid container spacing={1} columns={10}>

  return (
    <>

      <Card sx={{ display: 'flex', padding: '0px', margin: '0px'}} >

        <Grid container spacing={1} columns={2}>

          <CardContent >
            <img src={prop.creepInfo.healthyImage} onClick={() => { console.log('click image') }} />
          </CardContent>


          <CardContent >
            <Typography variant="body1" component="div" color="primary">
              {prop.creepInfo.name}


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
                {prop.creepInfo.hitpoints}


              </Typography>

            </Box>


            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >

              <Typography display="inline" variant="body2" align="left" >
                Init
              </Typography>


              <Typography display="inline" variant="body2" align="left">
                {prop.creepInfo.initiative}
              </Typography>

            </Box>


            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >

              <Typography display="inline" variant="body2" align="left" >
                Armor
              </Typography>


              <Typography display="inline" variant="body2" align="left">
                {prop.creepInfo.armor}
              </Typography>

            </Box>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >


              <Typography display="inline" variant="body2" align="left">
                {prop.creepInfo.appearance}
              </Typography>

            </Box>


            <Button size="small">E</Button>



          </CardContent>

        </Grid>

      </Card>


    </>
  )
}

