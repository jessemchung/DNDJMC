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

//card likely needs to have flex to split it in a half
export function CreepsAdd() {
  const [open, setOpen] = useState<boolean>(false);
  const [creepInfo, setCreepInfo] = useState({});


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
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
            name='armor'
            label="Armor"
            type="text"
            fullWidth
            variant="standard"
          />

          <TextField
            autoFocus
            margin="dense"
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
            id="appearance"
            name='appearance'
            label="Appearance"
            type="text"
            fullWidth
            variant="standard"
          />

          <TextField
            autoFocus
            margin="dense"
            id="bloodyImage"
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
            name='healthyImage'
            label="Healthy Image"
            type="text"
            fullWidth
            variant="standard"
          />



          <Button>

            Delete
          </Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>


    </>
  )
}

