
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

// should creeps and freeps be fused together?
import CancelIcon from '@mui/icons-material/Cancel';
import { Button } from '@mui/material';
import UserContext from '../../../UserContext.jsx';
import { FreepsAdd } from './FreepsAdd.jsx';

// with the index set, we can now know to highlight a box.
interface Props {
  freepInfo: FreepsCardData,
  fullDataFreeps: FreepsCardData[],
  index: number,
  initiative: number,
  setFullDataFreeps: React.Dispatch<React.SetStateAction<FreepsCardData[]>>,
  adjustCreatureSet: (indexOfChange: number, changedCard: FreepsCardData) => void
  onSubmit?: () => void
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

  }

  const handleIncrease: () => void = () => {
    let newNumber: number = freepInfo.hitpoints++;
    const newFreep: FreepsCardData = {
      ...freepInfo,
      [freepInfo.hitpoints]: newNumber,
    };
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

  const handleOpen = () => {
    setOpenChangeDialogue(true);
  };

  let editing = <FreepsAdd index={props.index} edit={true} freepInfo={props.freepInfo} freepsOrCreeps={props.freepInfo.creepOrFreep} fullDataFreeps={props.fullDataFreeps} setFullDataFreeps={props.setFullDataFreeps}/>

  return (
    <>
    {openChangeDialogue === true ? editing : ""}
    <Card className={`box ${props.initiative === props.index ? 'highlight' : ''}`}>
      <CancelIcon className={"CancelButton"} sx={{ float: 'right' }} onClick={handleDeletion} />
      <Box sx={{ display: "grid", gridTemplateColumns: '2fr 1fr', alignItems: 'center', }}>
        <CardContent >
          <Typography className={props.freepInfo.color !== null ? props.freepInfo.color : ""} component="div" variant="body2">
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
              Defense
            </Typography>
            <Typography display="inline" variant="body2" align="left">
              {props.freepInfo.initiative > props.freepInfo.shield ? props.freepInfo.initiative : props.freepInfo.shield}
            </Typography>

          </Box>

        </CardContent>

        <CardMedia
          component="img"
          image={freepInfo.healthyImage}
          className="creature-image"
          onClick={() => handleOpen()}
          alt="A freep, a hero, a main honcho"
        />
      </Box>

    </Card>
    </>
  );
}