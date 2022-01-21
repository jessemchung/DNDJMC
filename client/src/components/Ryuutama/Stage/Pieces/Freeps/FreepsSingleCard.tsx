
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

export function FreepsSingleCard() {
  const theme = useTheme();

  return (
    <Card >
      <Box sx={{display:"grid", gridTemplateColumns:'2fr 1fr'}}>
        <CardContent >
          <Typography component="div" variant="h5">
            Live From Space
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