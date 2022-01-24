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
import { Tab } from '@mui/material';

//! cancel buttons might be not that useful.  I guess I could have a duplicate set that stores the temporary value
// while the other stores the one shown in final screen but really?
interface Props {

}

//add a color enum for all my things as well
enum ElementalColors {


  "Aura" = 'yellow',
  "Djinn" = 'cyan',
  "Dryad" = 'green',
  "Gnome" = 'brown',
  "Salamander" = 'red',
  "Shade" = 'black',
  "Undine" = 'blue',
  "Wisp" = 'white',
}

interface SyntheticEvent<T> {
  currentTarget: EventTarget & T;
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
  const [first, setFirst] = useState<string | null>('unset');
  const [second, setSecond] = useState<string | null>('white');
  const [third, setThird] = useState<string | null>('white');


  // const handleChange = (event: SelectChangeEvent) => {
  //   setAge(event.target.value as string);
  // };


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event: any) => {
    setOpen(false);

  };

  const handleElementalChange = (event: React.SyntheticEvent<HTMLImageElement>) => {
    let newFirst = event.currentTarget.id as keyof typeof ElementalColors;
    if (typeof (event.currentTarget.id) === 'string') {
      setThird(second);
      setSecond(first);
      setFirst(ElementalColors[newFirst]);
    }


  };



  return (
    <>
      <div style={{
        backgroundColor: `${third}`,
        height: '75%', borderRadius: '50%', width: '600%', display: 'flex',
        alignItems: 'center',
        border: '1px black solid',
      }}
        onClick={handleClickOpen}
      >
        <div style={{ backgroundColor: `${second}`, height: '80%', borderRadius: '50%', width: '80%', display: 'flex', alignItems: 'center', border: '1px black solid', }}>
          <div style={{ backgroundColor: `${first}`, padding: '5px', height: '50%', borderRadius: '50%', width: '65%', border: '1px black solid' }}></div>
        </div>
      </div>


      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Choose Color</DialogTitle>
        <DialogContent>

          <div style={{
            backgroundColor: `${third}`,
            height: '80px', borderRadius: '50%', width: '20%', display: 'flex',
            alignItems: 'center',
            border: '1px black solid',
            textAlign: 'center',
            margin: '0 auto',
          }}
            onClick={handleClickOpen}
          >

            <div style={{ backgroundColor: `${second}`, height: '80%', borderRadius: '50%', width: '80%', display: 'flex', alignItems: 'center', border: '1px black solid', }}>

              <div style={{ backgroundColor: `${first}`, padding: '5px', height: '50%', borderRadius: '50%', width: '65%', border: '1px black solid' }}>

              </div>

            </div>
          </div>

          <img id={'Aura'} style={{ 'width': '20%' }} src="./image/Ryuutama/Elements/Aura.png" onClick={handleElementalChange} />

          <img id={'Djinn'} style={{ 'width': '20%' }} src="./image/Ryuutama/Elements/Djinn.png" onClick={handleElementalChange} />

          <img id={'Dryad'} style={{ 'width': '20%' }} src="./image/Ryuutama/Elements/Dryad.png" onClick={handleElementalChange} />

          <img id={'Gnome'} style={{ 'width': '20%' }} src="./image/Ryuutama/Elements/Gnome.png" onClick={handleElementalChange} />

          <img id={'Salamander'} style={{ 'width': '20%' }} src="./image/Ryuutama/Elements/Salamander.png" onClick={handleElementalChange} />

          <img id={'Shade'} style={{ 'width': '20%' }} src="./image/Ryuutama/Elements/Shade.png" onClick={handleElementalChange} />

          <img id={'Undine'} style={{ 'width': '20%' }} src="./image/Ryuutama/Elements/Undine.png" onClick={handleElementalChange} />

          <img id={'Wisp'} style={{ 'width': '20%' }} src="./image/Ryuutama/Elements/Wisp.png" onClick={handleElementalChange} />

        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Finish</Button>
        </DialogActions>

      </Dialog>


    </>
  )
}

