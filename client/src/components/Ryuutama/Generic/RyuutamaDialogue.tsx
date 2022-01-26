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
import { CssTwoTone } from '@mui/icons-material';

interface Props {
  //this is expecting a single object
  open: boolean
  setOpen: (change: boolean) => void,
  textFields: [],
  handleClose: () => any,

};

export const CreepsSingleCard: React.FC<Props> = (prop: Props) => {
  let { open, setOpen, textFields, handleClose } = prop
  //this requires certain options
  //needs a handleclose passed through
  //might need an option to determine if this is a form

  //will require an array that contains all of the textfields needed to populate


  const [openChangeDialogue, setOpenChangeDialogue] = useState<boolean>(false)

  return (
    <>

      <Dialog
        open={open}
        onClose={setOpen}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
        </DialogActions>
      </Dialog>

    </>
  )
}


