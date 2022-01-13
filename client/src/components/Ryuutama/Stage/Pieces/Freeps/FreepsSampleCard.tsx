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

//card likely needs to have flex to split it in a half
export default function FreepsSampleCard() {


  return (
    <>

      <Card sx={{ display: 'flex' }}>
        <CardContent >
          <Typography variant="body1" component="div">
            Sample Card
          </Typography>

          <Typography variant="body2" color="error">
            details
          </Typography>
        </CardContent>

        
        <CardContent >
          <Typography variant="body1" component="div">
            Sample Card
          </Typography>

          <Typography variant="body2" color="error">
            details
          </Typography>
        </CardContent>



      </Card>


    </>
  )
}

