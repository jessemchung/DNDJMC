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
import { textAlign } from '@mui/system';

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
  const [first, setFirst] = useState<boolean>(false);
  const [second, setSecond] = useState<boolean>(false);
  const [third, setThird] = useState<boolean>(false);


  // const handleChange = (event: SelectChangeEvent) => {
  //   setAge(event.target.value as string);
  // };


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event: any) => {


    if (event.target.src !== undefined) {
      //something
    }
    setOpen(false);

  };


  return (
    <>
      <div style={{
        backgroundColor: 'red',
        height: '75%', borderRadius: '50%', width: '800%', display: 'flex',
        alignItems: 'center',
        border: '1px black solid',
      }}
        onClick={handleClickOpen}
      >

        <div style={{ backgroundColor: 'blue', height: '80%', borderRadius: '50%', width: '80%', display: 'flex', alignItems: 'center', border: '1px black solid', }}>

          <div style={{ backgroundColor: 'yellow', padding: '5px', height: '50%', borderRadius: '50%', width: '65%', border: '1px black solid' }}>

          </div>

        </div>

      </div>


      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Choose Color</DialogTitle>
        <DialogContent>

          <div style={{
            backgroundColor: 'red',
            height: '80px', borderRadius: '50%', width: '20%', display: 'flex',
            alignItems: 'center',
            border: '1px black solid',
            textAlign: 'center',
            margin: '0 auto',
          }}
            onClick={handleClickOpen}
          >

            <div style={{ backgroundColor: 'blue', height: '80%', borderRadius: '50%', width: '80%', display: 'flex', alignItems: 'center', border: '1px black solid', }}>

              <div style={{ backgroundColor: 'yellow', padding: '5px', height: '50%', borderRadius: '50%', width: '65%', border: '1px black solid' }}>

              </div>

            </div>

          </div>


          <img style={{ 'width': '20%' }} src="./image/Ryuutama/Elements/Aura.png" onClick={handleClose} />

          <img style={{ 'width': '20%' }} src="./image/Ryuutama/Elements/Djinn.png" onClick={handleClose} />

          <img style={{ 'width': '20%' }} src="./image/Ryuutama/Elements/Dryad.png" onClick={handleClose} />

          <img style={{ 'width': '20%' }} src="./image/Ryuutama/Elements/Gnome.png" onClick={handleClose} />

          <img style={{ 'width': '20%' }} src="./image/Ryuutama/Elements/Salamander.png" onClick={handleClose} />

          <img style={{ 'width': '20%' }} src="./image/Ryuutama/Elements/Shade.png" onClick={handleClose} />

          <img style={{ 'width': '20%' }} src="./image/Ryuutama/Elements/Undine.png" onClick={handleClose} />

          <img style={{ 'width': '20%' }} src="./image/Ryuutama/Elements/Wisp.png" onClick={handleClose} />


        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>


      </Dialog>


    </>
  )
}

