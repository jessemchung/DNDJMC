import { useState, useEffect } from 'react';
var randomColor = require('randomcolor'); // import the script
import * as React from 'react'
import * as THREE from "three";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import CardMedia from '@mui/material/CardMedia';
import CancelIcon from '@mui/icons-material/Cancel';

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
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { CreepsCardData } from '../Common/_Types.jsx'
import { CssTwoTone } from '@mui/icons-material';

interface Props {
  creepInfo: CreepsCardData,
  //this is expecting a single object

};
//!Jesse unfinished

//creeps images should vibrate when taking damage or something to that effect
//card likely needs to have flex to split it in a half
export const CreepsSingleCard: React.FC<Props> = (prop: Props) => {
  const [invisible, setInvisible] = useState<boolean>(false)
  const [creepInfo, setCreepInfo] = useState<CreepsCardData>(prop.creepInfo)

  useEffect(() => {
    console.log('use effect')
  }, [creepInfo]);

  const handleClick = ()=> {
    setInvisible(true);
  }

  const handleIncrease = ()=> {
    let newNumber: number = creepInfo.hitpoints++;
    console.log(newNumber);
    let newCount: CreepsCardData = JSON.parse(JSON.stringify(creepInfo));
    newCount.hitpoints = newNumber+1;
    console.log(newCount, 'this should be good');
    
    setCreepInfo({
      ...newCount,
    })
    console.log(prop.creepInfo.hitpoints, 'going up?')

    // prop.creepInfo.hitpoints++;

  }

  // <Grid container spacing={1} columns={10}>
  if (invisible) {
    return null
  }

  return (
    <>

      <Card >
        <CancelIcon className={"CancelButton"} sx={{ float: 'right' }} onClick={handleClick} />
        <Box sx={{ display: "grid", gridTemplateColumns: '1fr 2fr', alignItems: 'center', }}>
          <CardMedia
            component="img"
            image={creepInfo.healthyImage}
            alt="A freep, a hero, a main honcho"
            onClick={() => { console.log('click image') }}
          />

          <CardContent >
            <Typography variant="body2" component="div" color="primary">
              {creepInfo.name}
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
              <RemoveCircleOutlineIcon />
              <Typography display="inline" variant="body2" align="left">
                {creepInfo.hitpoints}


              </Typography>

              <AddCircleOutlineIcon onClick={handleIncrease} />
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
                {creepInfo.initiative}
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
                {creepInfo.armor}
              </Typography>

            </Box>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'nowrap',

              }}
            >


              <Typography display="inline" variant="body2" align="left">
                {creepInfo.appearance}
              </Typography>

            </Box>



          </CardContent>

        </ Box>
      </Card>


    </>
  )
}


