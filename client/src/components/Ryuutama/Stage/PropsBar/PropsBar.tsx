import { useState, useEffect } from 'react';
var randomColor = require('randomcolor'); // import the script
import * as React from 'react'
import * as THREE from "three";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PropsBarIndividualCard from './PropsBarIndividualCard.jsx';





export default function PropsBar() {


  return (
    <>
      <Box sx={{ flexGrow: 0 }}>
        <Grid container spacing={1} columns={10}>
          <Grid item xs={1} >


            <PropsBarIndividualCard />


          </Grid>

          <Grid item xs={1}>
            <PropsBarIndividualCard />
          </Grid>


          <Grid item xs={1}>
            <PropsBarIndividualCard />
          </Grid>


          <Grid item xs={1}>
            <PropsBarIndividualCard />
          </Grid>

          <Grid item xs={1}>
            <PropsBarIndividualCard />
          </Grid>


          <Grid item xs={1}>
            <PropsBarIndividualCard />
          </Grid>


          <Grid item xs={1}>
            <PropsBarIndividualCard />
          </Grid>



          <Grid item xs={1}>
            <PropsBarIndividualCard />
          </Grid>


          <Grid item xs={1}>
            <PropsBarIndividualCard />
          </Grid>



          <Grid item xs={1}>
            <PropsBarIndividualCard />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

