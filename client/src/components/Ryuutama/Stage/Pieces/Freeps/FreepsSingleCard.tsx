
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { FreepsCardData } from '../Common/_Types.jsx'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';


//for canceling icons, it may be useful to index values so that things can have
// the same name and be deleted quickly

// should creeps and freeps be fused together?
import CancelIcon from '@mui/icons-material/Cancel';

//for deletion purposes, it may be best to have this get access to the overall number of and allow fixing
interface Props {
  freepInfo: FreepsCardData,
  fullDataFreeps: FreepsCardData[],
  setFullDataFreeps: React.Dispatch<React.SetStateAction<FreepsCardData[]>>,

}

export function FreepsSingleCard(props: Props) {
  const theme = useTheme();

  const handleClick = () => {
console.log('click')
    //this must remove the dangerous element first

    //then it must clean up

    let currentIndex = props.freepInfo.index;
    for (let i =0; i<props.fullDataFreeps.length; i++) {
      if (props.fullDataFreeps[i].index === i) {
        //!this will splice
      }

    }

  }

  return (
    <Card >
      <CancelIcon className={"CancelButton"} sx={{float: 'right'}} onClick={handleClick} />
      
      <Box sx={{ display: "grid", gridTemplateColumns: '2fr 1fr', alignItems: 'center', }}>
        <CardContent >
          <Typography component="div" variant="body2">
            {props.freepInfo.name}
          </Typography>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >

            <Typography display="inline" variant="body2" align="left" >
              HP
            </Typography>

            <RemoveCircleOutlineIcon />
            <Typography display="inline" variant="body2" align="left">
             {props.freepInfo.hitpoints} / {props.freepInfo.maxHitpoints}


            </Typography>

            <AddCircleOutlineIcon />
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
              {props.freepInfo.initiative}
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
              {props.freepInfo.armor}
            </Typography>

          </Box>

        </CardContent>

        <CardMedia
          component="img"
          image="/image/Personal/Ra.png"
          alt="A freep, a hero, a main honcho"
        />
      </Box>

    </Card>
  );
}