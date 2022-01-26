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
import { RyuutamaDialogue } from '../../../Generic/RyuutamaDialogue.jsx'
import { RyuutamaTextField } from '../../../Generic/RyuutamaTextField.jsx'

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
  const [openChangeDialogue, setOpenChangeDialogue] = useState<boolean>(false)
  const [nameOfEdit, setNameOfEdit] = useState<keyof CreepsCardData>('name')

  const handleClick = () => {
    setInvisible(true);
  }

  const handleIncrease = () => {
    let newNumber: number = creepInfo.hitpoints++;
    setCreepInfo({
      ...creepInfo,
      [creepInfo.hitpoints]: newNumber,
    })
  }


  const handleDecrease = () => {
    let newNumber: number = creepInfo.hitpoints--;
    setCreepInfo({
      ...creepInfo,
      [creepInfo.hitpoints]: newNumber,
    })
  }

  const handleClose = () => {
    setOpenChangeDialogue(false);
  };

  const handleOpen = (name: keyof CreepsCardData) => {
    setNameOfEdit(name);
    setOpenChangeDialogue(true);
  };

  const onChange =(event: React.ChangeEvent<HTMLInputElement>) => {
    let {name, value} = event.target;
    setCreepInfo({
      ...creepInfo,
      [name]: value,
    })
  }

  const buttonArray = [
    <Button key={'agree'} onClick={handleClose} autoFocus>Save</Button>
  ]

  let textFields = <RyuutamaTextField 
    name={nameOfEdit}
    label={nameOfEdit}
    value={creepInfo[nameOfEdit]}
    onChange={onChange}
    type='string' />



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
            <Typography variant="body2" component="div" color="primary" onClick={()=>{handleOpen('name')}} >
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
              <RemoveCircleOutlineIcon onClick={handleDecrease} />
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

              <Typography display="inline" variant="body2"
              align="left" onClick={()=>{handleOpen('initiative')}} >
                Init
              </Typography>


              <Typography display="inline" variant="body2" align="left" >
                {creepInfo.initiative}
              </Typography>

            </Box>


            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >

              <Typography display="inline" variant="body2" align="left" onClick={()=>{handleOpen('armor')}}  >
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


              <Typography display="inline" variant="body2" align="left" onClick={()=>{handleOpen('appearance')}} >
                {creepInfo.appearance}
              </Typography>

            </Box>
          </CardContent>

        </ Box>
      </Card>
      <RyuutamaDialogue
        open={openChangeDialogue}
        handleClose={handleClose}
        title={'Change Property'}
        body={'Once there was a war'}
        buttons={buttonArray}
      > 
        {textFields}
      </ RyuutamaDialogue>

    </>
  )
}


