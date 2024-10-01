import { useState, useContext } from 'react';
var randomColor = require('randomcolor'); // import the script
import * as React from 'react'
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import CancelIcon from '@mui/icons-material/Cancel';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { CreepsCardData, FreepsCardData } from '../Common/_Types.jsx'
import { RyuutamaDialogue } from '../../../Generic/RyuutamaDialogue.jsx'
import { RyuutamaTextField } from '../../../Generic/RyuutamaTextField.jsx'
import UserContext from '../../../UserContext.jsx';

interface Props {
  creepInfo: FreepsCardData,
  index: number,
  //this is expecting a single object
  fullDataCreeps: FreepsCardData[],
  setFullDataCreeps: React.Dispatch<React.SetStateAction<FreepsCardData[]>>,
  indexInitiative: number

};
//!Jesse unfinished

//creeps images should vibrate when taking damage or something to that effect
//card likely needs to have flex to split it in a half
export const CreepsSingleCard: React.FC<Props> = (props: Props) => {
  const [invisible, setInvisible] = useState<boolean>(false)
  const [creepInfo, setCreepInfo] = useState<FreepsCardData>(props.creepInfo)
  const [openChangeDialogue, setOpenChangeDialogue] = useState<boolean>(false)
  const [nameOfEdit, setNameOfEdit] = useState<keyof FreepsCardData>('name')
  const { initiative } = useContext(UserContext);


  let matchingInitiative = false;
  if (initiative === creepInfo.initiative) {
    matchingInitiative = true;
  }


  const handleClick = (event:any) => {
    event.preventDefault();
    let nameCreeps = props.creepInfo.name;
    let copyFullDataCreep = JSON.parse(JSON.stringify(props.fullDataCreeps));
    let lengthFullDataCreep = props.fullDataCreeps.length;
    
    for (let singleCard=0; singleCard < lengthFullDataCreep; singleCard++) {
      if (copyFullDataCreep[singleCard].name === nameCreeps) {
        copyFullDataCreep.splice(singleCard, 1);
        props.setFullDataCreeps(copyFullDataCreep);
      } 
    }
  }

  const handleIncrease = () => {
    let newNumber: number = creepInfo.hitpoints++;
    setCreepInfo({
      ...creepInfo,
      [creepInfo.hitpoints]: newNumber,
    })
  }


  const handleDecrease = () => {
    let newNumber: number = creepInfo.hitpoints--;
    setCreepInfo({
      ...creepInfo,
      [creepInfo.hitpoints]: newNumber,
    })
  }

  const handleClose = () => {
    setOpenChangeDialogue(false);
  };

  const handleOpen = (name: keyof FreepsCardData) => {
    setNameOfEdit(name);
    setOpenChangeDialogue(true);
  };

  const onChange =(event: React.ChangeEvent<HTMLInputElement>) => {
    let {name, value} : { name: string; value: any } = event.target;
    if (isNaN(parseInt(value))) {
      value = parseInt(value);
    }
    setCreepInfo({
      ...creepInfo,
      [name]: value,
    })
  }

  const buttonArray = [
    <Button key={'agree'} onClick={handleClose} autoFocus>Save</Button>
  ]

  let textFields = <RyuutamaTextField 
    name={nameOfEdit}
    label={nameOfEdit}
    value={creepInfo[nameOfEdit]}
    onChange={onChange}
    type='string' />



  if (invisible) {
    return null
  }

  return (
    <>
      <Card className={`box ${props.indexInitiative === props.index ? 'highlight' : ''}`} >
        <CancelIcon className={"CancelButton"} sx={{ float: 'right' }} onClick={handleClick} />
        <Box sx={{ display: "grid", gridTemplateColumns: '1fr 2fr', alignItems: 'center', }}>
          <CardMedia
            component="img"
            image={creepInfo.healthyImage}
            alt="A freep, a hero, a main honcho"
            onClick={() => { console.log('click image') }}
          />
          <CardContent >
            <Typography variant="body2" component="div" color="primary" onClick={()=>{handleOpen('name')}} >
              {creepInfo.name}
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
              <RemoveCircleOutlineIcon onClick={handleDecrease} />
              <Typography display="inline" variant="body2" align="left">
                {creepInfo.hitpoints}


              </Typography>

              <AddCircleOutlineIcon onClick={handleIncrease} />
            </Box>


            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >

              <Typography display="inline" variant="body2"
              align="left" onClick={()=>{handleOpen('initiative')}} >
                Init
              </Typography>


              <Typography display="inline" variant="body2" align="left" >
                {creepInfo.initiative}
              </Typography>

            </Box>


            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >

              <Typography display="inline" variant="body2" align="left" onClick={()=>{handleOpen('defense')}}  >
                Armor
              </Typography>


              <Typography display="inline" variant="body2" align="left">
                {creepInfo.defense}
              </Typography>

            </Box>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'nowrap',

              }}
            >


              {/* <Typography display="inline" variant="body2" align="left" onClick={()=>{handleOpen('appearance')}} >
                {creepInfo.appearance}
              </Typography> */}

            </Box>
          </CardContent>

        </ Box>
      </Card>
      <RyuutamaDialogue
        open={openChangeDialogue}
        handleClose={handleClose}
        title={'Change Property'}
        body={'Once there was a war'}
        buttons={buttonArray}
      > 
        {textFields}
      </ RyuutamaDialogue>

    </>
  )
}


