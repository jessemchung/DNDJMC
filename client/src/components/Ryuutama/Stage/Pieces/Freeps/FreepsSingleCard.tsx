
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {FreepsCardData} from '../Common/_Types.jsx'


interface Props {
  freepInfo: FreepsCardData
}

export function FreepsSingleCard(props: Props) {
  const theme = useTheme();

  return (
    <Card >
      <Box sx={{display:"grid", gridTemplateColumns:'2fr 1fr'}}>
        <CardContent >
          <Typography component="div" variant="h5">
            {props.freepInfo.maxHitpoints}
          </Typography>
        </CardContent>

        <CardMedia
        component="img"
        image="/image/Ryuutama/SampleIcons/BradBad.png"
        alt="Live from space album cover"
      />
      </Box>

    </Card>
  );
}