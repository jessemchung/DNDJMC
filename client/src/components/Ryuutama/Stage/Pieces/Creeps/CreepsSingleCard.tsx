import { useState, useEffect } from 'react';
var randomColor = require('randomcolor'); // import the script
import * as React from 'react'
import * as THREE from "three";
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
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { CreepsCardData } from '../Common/_Types.jsx'

interface Props {
  creepInfo: CreepsCardData,
  //this is expecting a single object

};
//!Jesse unfinished

//creeps images should vibrate when taking damage or something to that effect
//card likely needs to have flex to split it in a half
export const CreepsSingleCard: React.FC<Props> = (prop: Props) => {


  // <Grid container spacing={1} columns={10}>

  return (
    <>

      <Card sx={{ display: 'flex', padding: '0px', margin: '0px', }} >

        <Grid container spacing={1} columns={2} >

          <CardContent >
            <img src={prop.creepInfo.healthyImage} onClick={() => { console.log('click image') }} />
          </CardContent>


          <CardContent sx={{ maxWidth: '30%' }} >
            <Typography variant="body1" component="div" color="primary">
              {prop.creepInfo.name}


            </Typography>


            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >


              {/* <AddCircleOutlineIcon display="inline" style={{ position: 'relative', top: '14px' }} /> */}

              <div style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'nowrap',
              }}>

                <Typography display="inline" variant="body2" align="left" >
                  HP
                </Typography>

                <RemoveCircleOutlineIcon />
                <Typography display="inline" variant="body2" align="left">
                  {prop.creepInfo.hitpoints}


                </Typography>

                <AddCircleOutlineIcon />



              </div>


            </Box>


            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >

              <Typography display="inline" variant="body2" align="left" >
                Init
              </Typography>


              <Typography display="inline" variant="body2" align="left">
                {prop.creepInfo.initiative}
              </Typography>

            </Box>


            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >

              <Typography display="inline" variant="body2" align="left" >
                Armor
              </Typography>


              <Typography display="inline" variant="body2" align="left">
                {prop.creepInfo.armor}
              </Typography>

            </Box>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'nowrap',

              }}
            >


              <Typography display="inline" variant="body2" align="left">
                {prop.creepInfo.appearance}
              </Typography>

            </Box>


            <Button size="small">E</Button>



          </CardContent>

        </Grid>

      </Card>


    </>
  )
}



// import * as React from 'react';
// import { useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import SkipNextIcon from '@mui/icons-material/SkipNext';

// export default function MediaControlCard() {
//   const theme = useTheme();

//   return (
//     <Card sx={{ display: 'flex' }}>
//       <Box sx={{ display: 'flex', flexDirection: 'column' }}>
//         <CardContent sx={{ flex: '1 0 auto' }}>
//           <Typography component="div" variant="h5">
//             Live From Space
//           </Typography>
//           <Typography variant="subtitle1" color="text.secondary" component="div">
//             Mac Miller
//           </Typography>
//         </CardContent>
//         <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
//           <IconButton aria-label="previous">
//             {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
//           </IconButton>
//           <IconButton aria-label="play/pause">
//             <PlayArrowIcon sx={{ height: 38, width: 38 }} />
//           </IconButton>
//           <IconButton aria-label="next">
//             {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
//           </IconButton>
//         </Box>
//       </Box>
//       <CardMedia
//         component="img"
//         sx={{ width: 151 }}
//         image="/static/images/cards/live-from-space.jpg"
//         alt="Live from space album cover"
//       />
//     </Card>
//   );
// }