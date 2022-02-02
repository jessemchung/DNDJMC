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

// const Item = styled(Paper)(({ theme }) => ({
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);


const arrayOfBenefits = ['Protective', 'Hampering', 'Offensive']

const arrayOfPermanent = ['Permanent', 'One-Use', 'Temporal']


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

  const [title, setTitle] = useState<string>('Title');

  //this is to allow saving I think?
  const [titleEdit, setTitleEdit] = useState<string>('Title');


  const [benefit, setBenefit] = useState<number>(0);
  const [benefitPermanent, setBenefitPermanent] = useState<number>(0);


  const [open, setOpen] = useState(false);




  const handleClickOpen = () => {
    setOpen(true);
  };

  const toggleBenefit = () => {

    if (benefit<arrayOfBenefits.length-1) {
      setBenefit(benefit+1)
    } else {
      setBenefit(0);
    }


  }

  const togglePermBenefit = () => {

    if (benefitPermanent<arrayOfPermanent.length-1) {
      setBenefitPermanent(benefitPermanent+1)
    } else {
      console.log('what the heck');
      setBenefitPermanent(0);
    }


  }

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    setTitle(titleEdit)
    setOpen(false);
  };


  const handleChange = (event:any) => {
    setTitleEdit(event.target.value)
  }

  return (
    <>
    <ThemeProvider theme={theme}>
      <Card >
        <CardContent >
          <Typography variant="body1" component="div">
            {title}
          </Typography>

          <Typography variant="body2" color="error">
            {arrayOfBenefits[benefit]}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleClickOpen}>Edit</Button>

          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Prop</DialogTitle>
            <DialogContent>
              <DialogContentText>

                Edit this card
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                color="success"
                type="email"
                fullWidth
                value={titleEdit}
                onChange={handleChange}
                variant="standard"
              />

              <Button onClick={toggleBenefit}>
                {arrayOfBenefits[benefit]}
              </Button>

              <Button onClick={togglePermBenefit}>
                {arrayOfPermanent[benefitPermanent]}
              </Button>

              arrayOfPermanent
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button  onClick={handleSubmit} type="submit">Submit</Button>
            </DialogActions>
          </Dialog>


        </CardActions>
      </Card>

      </ThemeProvider>

    </>
  )
}

