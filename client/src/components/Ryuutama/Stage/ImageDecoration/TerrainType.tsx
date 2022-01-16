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
const arrayOfBenefits: string[] = [
  './image/Ryuutama/Weather/Ryuutama_Cold.png',
  './image/Ryuutama/Weather/Ryuutama_Cold.png',
  './image/Ryuutama/Weather/Ryuutama_Cold.png',
  './image/Ryuutama/Weather/Ryuutama_Cold.png',
  './image/Ryuutama/Weather/Ryuutama_Cold.png',
  './image/Ryuutama/Weather/Ryuutama_Cold.png',
  './image/Ryuutama/Weather/Ryuutama_Cold.png',
  './image/Ryuutama/Weather/Ryuutama_Cold.png',
  './image/Ryuutama/Weather/Ryuutama_Cold.png',
  './image/Ryuutama/Weather/Ryuutama_Cold.png',





]



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

export default function PropsBarIndividualCard() {

  const [age, setAge] = React.useState('');
  const [open, setOpen] = useState<boolean>(false);

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const [weather, setWeather] = useState<string>('./image/Ryuutama/Weather/Ryuutama_Clear_Skies.png');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event: any) => {


    if (event.target.src !== undefined) {
      setWeather(event.target.src)
    }
    setOpen(false);

  };


  return (
    <>

      <img style={{ 'width': '8%' }} src={weather} onClick={handleClickOpen} />

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Choose Weather</DialogTitle>
        <DialogContent>

          <img style={{ 'width': '20%' }} src="./image/Ryuutama/Terrain/Ryuutama_Alpine.png" onClick={handleClose} />

          <img style={{ 'width': '20%' }} src="./image/Ryuutama/Terrain/Ryuutama_Deep_Forest.png" onClick={handleClose} />

          <img style={{ 'width': '20%' }} src="./image/Ryuutama/Terrain/Ryuutama_Desert.png" onClick={handleClose} />

          <img style={{ 'width': '20%' }} src="./image/Ryuutama/Terrain/Ryuutama_Grassland.png" onClick={handleClose} />

          <img style={{ 'width': '20%' }} src="./image/Ryuutama/Terrain/Ryuutama_Highlands.png" onClick={handleClose} />

          <img style={{ 'width': '20%' }} src="./image/Ryuutama/Terrain/Ryuutama_Jungle.png" onClick={handleClose} />

          <img style={{ 'width': '20%' }} src="./image/Ryuutama/Terrain/Ryuutama_Mountain.png" onClick={handleClose} />

          <img style={{ 'width': '20%' }} src="./image/Ryuutama/Terrain/Ryuutama_Rocky_Terrain.png" onClick={handleClose} />

          <img style={{ 'width': '20%' }} src="./image/Ryuutama/Terrain/Ryuutama_Swamp.png" onClick={handleClose} />

          <img style={{ 'width': '20%' }} src="./image/Ryuutama/Terrain/Ryuutama_Wasteland.png" onClick={handleClose} />

          <img style={{ 'width': '20%' }} src="./image/Ryuutama/Terrain/Ryuutama_Woodland.png" onClick={handleClose} />

          <img style={{ 'width': '20%' }} src="./image/Ryuutama/Terrain/Ryuutama_Village.png" onClick={handleClose} />

          <img style={{ 'width': '20%' }} src="./image/Ryuutama/Terrain/Ryuutama_Town.png" onClick={handleClose} />

          <img style={{ 'width': '20%' }} src="./image/Ryuutama/Terrain/Ryuutama_City.png" onClick={handleClose} />

          <img style={{ 'width': '20%' }} src="./image/Ryuutama/Terrain/Ryuutama_Large_City.png" onClick={handleClose} />

        </DialogContent>
        {/* <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions> */}
      </Dialog>


    </>
  )
}

