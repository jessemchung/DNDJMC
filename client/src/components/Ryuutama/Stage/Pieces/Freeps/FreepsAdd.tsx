//purpose, to add a creep to the menu

import { useState, useEffect } from 'react';
var randomColor = require('randomcolor'); // import the script
import * as React from 'react'
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
import {FreepsCardData} from '../Common/_Types.jsx'


//this needs to ability to set CreepsAdd
interface Props {
  setFullDataCreeps: React.Dispatch<React.SetStateAction<FreepsCardData[]>>,
  fullDataCreeps: FreepsCardData[],
}

export function CreepsAdd(props:Props) {
  const [open, setOpen] = useState<boolean>(false);
  const [creepInfo, setCreepInfo] = useState<FreepsCardData>({
  'armor': 10,
  'hitpoints':10,
  maxHitpoints:10,
  'healthyImage': './image/Ryuutama/SampleIcons/BradGood.png',
  'bloodyImage': './image/Ryuutama/SampleIcons/BradBad.png',
  'initiative': 10,
  'name': "Bradford",

  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void=> {
    const {name, value} = e.target;
    console.log(name, value);
    setCreepInfo({
      ...creepInfo,
      [name] : value,

    })

  }


  const onHitpointChange = (e: React.ChangeEvent<HTMLInputElement>): void=> {
    const {name, value} = e.target;
    console.log(name, value);
    setCreepInfo({
      ...creepInfo,
      [name] : value,

    })

  }
  // 'armor': 6,
  // 'hitpoints':10,
  // 'healthyImage': './image/Ryuutama/SampleIcons/BradGood.png',
  // 'bloodyImage': './image/Ryuutama/SampleIcons/BradBad.png',
  // 'initiative': 2,
  // 'name': "Bradford",
  // 'appearance': "purple hair, white skin",



  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = () => {
    props.setFullDataCreeps([...props.fullDataCreeps, creepInfo])
    handleClose()
  }

  

  // <Grid container spacing={1} columns={10}>

  return (
    <>

      <Button size="small" onClick={handleClickOpen}>Add</Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Creep</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Fill Out Your Creep Here
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            onChange={onChange}
            value={creepInfo.name}
            id="name"
            name='name'
            label="Name"
            type="text"
            fullWidth
            variant="standard"
          />

          <TextField
            autoFocus
            margin="dense"
            id="armor"
            onChange={onChange}
            value={creepInfo.armor}
            name='armor'
            label="Armor"
            type="text"
            fullWidth
            variant="standard"
          />

<TextField
            autoFocus
            margin="dense"
            id="armor"
            onChange={onChange}
            value={creepInfo.hitpoints}
            name='armor'
            label="Armor"
            type="text"
            fullWidth
            variant="standard"
          />

          {/* some sort of value must be here integrated into the value.  Maybe a button or box */}

          <TextField
            autoFocus
            margin="dense"
            onChange={onChange}
            value={creepInfo.initiative}
            id="initiative"
            name='initiative'
            label="Initiative"
            type="text"
            fullWidth
            variant="standard"
          />


          <TextField
            autoFocus
            margin="dense"
            id="bloodyImage"
            onChange={onChange}
            value={creepInfo.bloodyImage}
            name='bloodyImage'
            label="Bloody Image"
            type="text"
            fullWidth
            variant="standard"
          />

          <TextField
            autoFocus
            margin="dense"
            id="healthyImage"

            onChange={onChange}
            value={creepInfo.healthyImage}
            name='healthyImage'
            label="Healthy Image"
            type="text"
            fullWidth
            variant="standard"
          />



        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={onSubmit}>Add</Button>
        </DialogActions>
      </Dialog>


    </>
  )
}

