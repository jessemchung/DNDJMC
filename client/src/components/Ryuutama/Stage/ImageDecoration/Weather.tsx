import { useState, useEffect, useContext } from 'react';
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
import UserContext from '../../UserContext.jsx';

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
  const { weather, setWeather } = useContext(UserContext);

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };



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

      <img style={{ 'width': '6%'}} src={weather} onClick={handleClickOpen} />

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Choose Weather</DialogTitle>
        <DialogContent>

          <img style={{ 'width': '20%' }} src="./image/Ryuutama/Weather/Ryuutama_Clear_Skies.png" onClick={handleClose} />

          <img style={{ 'width': '20%' }} src="./image/Ryuutama/Weather/Ryuutama_Cold.png" onClick={handleClose} />

          <img style={{ 'width': '20%' }} src="./image/Ryuutama/Weather/Ryuutama_Blizzard.png" onClick={handleClose} />

          <img style={{ 'width': '20%' }} src="./image/Ryuutama/Weather/Ryuutama_Cloudy.png" onClick={handleClose} />

          <img style={{ 'width': '20%' }} src="./image/Ryuutama/Weather/Ryuutama_Cold.png" onClick={handleClose} />

          <img style={{ 'width': '20%' }} src="./image/Ryuutama/Weather/Ryuutama_Darkness.png" onClick={handleClose} />

          <img style={{ 'width': '20%' }} src="./image/Ryuutama/Weather/Ryuutama_Deep_Fog.png" onClick={handleClose} />

          <img style={{ 'width': '20%' }} src="./image/Ryuutama/Weather/Ryuutama_Fog.png" onClick={handleClose} />

          <img style={{ 'width': '20%' }} src="./image/Ryuutama/Weather/Ryuutama_Heavy_Rain.png" onClick={handleClose} />

          <img style={{ 'width': '20%' }} src="./image/Ryuutama/Weather/Ryuutama_Hot.png" onClick={handleClose} />

          <img style={{ 'width': '20%' }} src="./image/Ryuutama/Weather/Ryuutama_Hurricane.png" onClick={handleClose} />

          <img style={{ 'width': '20%' }} src="./image/Ryuutama/Weather/Ryuutama_Rain.png" onClick={handleClose} />

          <img style={{ 'width': '20%' }} src="./image/Ryuutama/Weather/Ryuutama_Snow.png" onClick={handleClose} />

          <img style={{ 'width': '20%' }} src="./image/Ryuutama/Weather/Ryuutama_Strong_Wind.png" onClick={handleClose} />

          <img style={{ 'width': '20%' }} src="./image/Ryuutama/Weather/Ryuutama_Thunderstorm.png" onClick={handleClose} />

        </DialogContent>
        {/* <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions> */}
      </Dialog>


    </>
  )
}

