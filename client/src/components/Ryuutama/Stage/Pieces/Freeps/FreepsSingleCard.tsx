
import * as React from 'react';
import { useContext, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { FreepsCardData } from '../Common/_Types.jsx'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { RyuutamaDialogue } from '../../../Generic/RyuutamaDialogue.jsx'
import { RyuutamaTextField } from '../../../Generic/RyuutamaTextField.jsx'


//for canceling icons, it may be useful to index values so that things can have
// the same name and be deleted quickly

// should creeps and freeps be fused together?
import CancelIcon from '@mui/icons-material/Cancel';
import { Button } from '@mui/material';
import UserContext from '../../../UserContext.jsx';

//for deletion purposes, it may be best to have this get access to the overall number of and allow fixing
interface Props {
  freepInfo: FreepsCardData,
  fullDataFreeps: FreepsCardData[],
  index: number,
  setFullDataFreeps: React.Dispatch<React.SetStateAction<FreepsCardData[]>>,
  adjustCreatureSet: (indexOfChange: number, changedCard: FreepsCardData) => void
}

export function FreepsSingleCard(props: Props) {
  const theme = useTheme();
  const [invisible, setInvisible] = useState<boolean>(false);
  const [openChangeDialogue, setOpenChangeDialogue] = useState<boolean>(false)
  const [nameOfEdit, setNameOfEdit] = useState<keyof FreepsCardData>('name')
  const [freepInfo, setFreepInfo] = useState<FreepsCardData>(props.freepInfo)
  const { initiative } = useContext(UserContext);

  let matchingInitiative = false;
  if (initiative === freepInfo.initiative) {
    matchingInitiative = true;
  }

  const handleDeletion = (event: any) => {
    event.preventDefault();
    console.log(props.fullDataFreeps, "deletion in progress")
    let copyFullDataFreep = props.fullDataFreeps.filter((item, index) => {
      if (index === props.index) {
        return false;
      } else {
        return true;
      }
    });

    props.setFullDataFreeps(copyFullDataFreep);
    // for (let singleCard=0; singleCard < lengthFullDataFreep; singleCard++) {
    //   if (copyFullDataFreep[singleCard].name === nameFreep) {
    //     copyFullDataFreep.splice(singleCard, 1);
    //     props.setFullDataFreeps(copyFullDataFreep);
    //   } 
    // }
  }

  const handleIncrease: () => void = () => {
    let newNumber: number = freepInfo.hitpoints++;
    const newFreep: FreepsCardData = {
      ...freepInfo,
      [freepInfo.hitpoints]: newNumber,
    };
    console.log("hello?")
    const newArray = props.fullDataFreeps.map((item, index) => {
      if (index === props.index) {
        return newFreep; // Update the specific object
      }
      return item; // Return the unchanged object
    });
    props.setFullDataFreeps(newArray);


  }


  const handleDecrease = () => {
    let newNumber: number = freepInfo.hitpoints--;
    const newFreep: FreepsCardData = {
      ...freepInfo,
      [freepInfo.hitpoints]: newNumber,
    };
    console.log("hello?")
    const newArray = props.fullDataFreeps.map((item, index) => {
      if (index === props.index) {
        return newFreep; // Update the specific object
      }
      return item; // Return the unchanged object
    });
    props.setFullDataFreeps(newArray);
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
    setFreepInfo({
      ...freepInfo,
      [name]: value,
    })
  }

  const buttonArray = [
    <Button key={'agree'} onClick={handleClose} autoFocus>Save</Button>
  ]


  let textFields = <RyuutamaTextField
    name={nameOfEdit}
    label={nameOfEdit}
    value={freepInfo[nameOfEdit]}
    onChange={onChange}
    type='string' />


  if (invisible === true) {
    return null;
  }

  return (
    <Card className={matchingInitiative ? 'MatchInitiative' : 'NotMatchInitiative'}>
      <CancelIcon className={"CancelButton"} sx={{ float: 'right' }} onClick={handleDeletion} />
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
            <RemoveCircleOutlineIcon onClick={() =>handleDecrease()}/>
            <Typography display="inline" variant="body2" align="left">
              {props.freepInfo.hitpoints} / {props.freepInfo.maxHitpoints}
            </Typography>
            <AddCircleOutlineIcon onClick={()=> handleIncrease()} />
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
          image={freepInfo.healthyImage}
          alt="A freep, a hero, a main honcho"
        />
      </Box>

    </Card>
  );
}