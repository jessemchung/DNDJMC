import { useState, useEffect } from 'react';
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
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { purple } from '@mui/material/colors';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

//this might need to be a drop down
interface Props {

}



const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: purple[500],
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#11cb5f',
    },
  },
});

export function ElementalField(prop: Props) {

  const [open, setOpen] = useState<boolean>(false);




  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event: any) => {


    if (event.target.src !== undefined) {
      //still needs to be unbothered I guess?
    }
    setOpen(false);

  };


  return (
    <>

      <div style={{ 'width': '15%', 'border': '1px green solid', }} onClick={handleClickOpen} />

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Choose Color</DialogTitle>
        <DialogContent>

          <img style={{ 'width': '30%' }} src="./image/Ryuutama/Terrain/Ryuutama_Alpine.png" onClick={handleClose} />


        </DialogContent>

      </Dialog>


    </>
  )
}

