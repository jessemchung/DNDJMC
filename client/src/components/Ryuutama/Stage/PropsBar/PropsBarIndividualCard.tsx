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
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { purple } from '@mui/material/colors';
import { terrainPropsData } from '../Pieces/Common/_Types';


interface Props {
  terrainProp: terrainPropsData
  index: number
  setNewTerrainInformation: (index: number, newTerrainValue: terrainPropsData) => void
}

const arrayOfBenefits = ['Protective', 'Hampering', 'Offensive']

const arrayOfPermanent = ['Permanent', 'One-Use', 'Temporal']


// const theme = createTheme({
//   palette: {
//     primary: {
//       // Purple and green play nicely together.
//       main: purple[500],
//     },
//     secondary: {
//       // This is green.A700 as hex.
//       main: '#11cb5f',
//     },
//   },
// });

export default function PropsBarIndividualCard(props: Props) {

  const {terrainProp, setNewTerrainInformation, index} = props
  const [titleEdit, setTitleEdit] = useState<string>(terrainProp.title);
  const [description, setDescription] = useState<string>(terrainProp.description);
  const maxDescriptionLength = 100;


  const [open, setOpen] = useState(false);




  const handleClickOpen = () => {
    setOpen(true);
  };





  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    let newTerrainProp = terrainProp;
    terrainProp.title = titleEdit;
    terrainProp.description = description;
    setNewTerrainInformation(index, newTerrainProp)
    setOpen(false);
  };


  const handleChangeTitle = (event:any) => {
    setTitleEdit(event.target.value)
  }

  const handleChangeDescription = (event:any) => {
    setDescription(event.target.value)
  }

  const truncateText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + '...'; // Add ellipsis if truncated
    }
    return text;
  };

  return (
    <>
    {/* <ThemeProvider theme={theme}> */}
      <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: "100%", padding: 0 }}>
        <CardContent style={{ flexGrow: 1, maxHeight: '10em', overflow: 'auto', padding: 0  }}>
        <Typography variant="body1" component="div" gutterBottom>
          {terrainProp.title}
        </Typography>

        <Typography variant="body2" component="div" color="textSecondary" style={{ wordBreak: 'break-word' }}>
          {truncateText(terrainProp.description, maxDescriptionLength)}

        </Typography>

        </CardContent>
        <CardActions style={{ marginTop: 'auto', padding: 0  }}>
          <Button size="small" onClick={handleClickOpen}>Edit</Button>

          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Edit This Prop</DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                id="propName"
                label="prop name"
                color="success"
                type="email"
                fullWidth
                value={titleEdit}
                onChange={handleChangeTitle}
                variant="standard"
              />

              <TextField
                autoFocus
                margin="dense"
                id="propDescription"
                color="success"
                label="description"
                type="text"
                multiline
                fullWidth
                value={description}
                onChange={handleChangeDescription}
                variant="standard"
              />

            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button  onClick={handleSubmit} type="submit">Submit</Button>
            </DialogActions>
          </Dialog>


        </CardActions>
      </Card>

      {/* </ThemeProvider> */}

    </>
  )
}

