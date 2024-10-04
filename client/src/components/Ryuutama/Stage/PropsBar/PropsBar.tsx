import { useContext } from 'react';
var randomColor = require('randomcolor'); // import the script
import * as React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import PropsBarIndividualCard from './PropsBarIndividualCard.jsx';
import UserContext from '../../UserContext.jsx';
import { terrainPropsData } from '../Pieces/Common/_Types.jsx';


interface Props {
  terrainProps: terrainPropsData[]
  setTerrainProps: React.Dispatch<React.SetStateAction<terrainPropsData[]>>
};



export default function PropsBar(prop: Props) {
  
  const setNewTerrainInformation = (index: number, newTerrainValue: terrainPropsData) => {
    prop.setTerrainProps(prop.terrainProps.map((item, originalIndex) => (originalIndex === index ? newTerrainValue : item)));
  }

  let finalConstruct = prop.terrainProps.map((item, index) => {
    return (
      <Grid key={"propsBar" + index} item xs={1}>
        <PropsBarIndividualCard  setNewTerrainInformation={setNewTerrainInformation} terrainProp={item} index={index} />
      </Grid>
    )
  })

  return (
    <>
      <Box sx={{ flexGrow: 0 }}>
        <Grid container spacing={0} columns={10}>
          {finalConstruct}
        </Grid>
      </Box>
    </>
  )
}

