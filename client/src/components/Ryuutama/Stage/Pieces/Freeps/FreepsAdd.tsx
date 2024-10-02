//purpose, to add a creep to the menu

import { useState } from 'react';
var randomColor = require('randomcolor'); // import the script
import * as React from 'react'

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { colorFreeps, FreepOrCreep, FreepsCardData, positionsOptions } from '../Common/_Types.jsx'
import { RyuutamaForm } from '../../../Ryuutama.jsx';
import { InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';


//this needs to ability to set CreepsAdd
interface Props {
  setFullDataFreeps: React.Dispatch<React.SetStateAction<FreepsCardData[]>>,
  fullDataFreeps: FreepsCardData[],
  // best case scenario is to add edit functionality here
  edit?: boolean,
  // going to need the need that specific person
  index?: number
  freepsOrCreeps: FreepOrCreep
  freepInfo?: FreepsCardData
  setEdit?: React.Dispatch<React.SetStateAction<boolean>>
  // going to need their data to prepopulate the form
}


export function FreepsAdd(props: Props) {

  const basicForm: FreepsCardData = {
    'index': props.fullDataFreeps.length - 1,
    'shield': 0,
    'hitpoints': 10,
    'maxHitpoints': 10,
    'healthyImage': './image/Ryuutama/SampleIcons/BradGood.png',
    'bloodyImage': './image/Ryuutama/SampleIcons/BradBad.png',
    'initiative': 10,
    'name': "Bradford",
    creepOrFreep: props.freepsOrCreeps,
    color: null,
    position: 0
  }
  
  const [open, setOpen] = useState<boolean>(props.edit || false);
  const [freepInfo, setFreepInfo] = useState<FreepsCardData>(props.freepInfo ? props.freepInfo : basicForm);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    console.log(name, value, "something is wrong with the colot");
    setFreepInfo({
      ...freepInfo,
      [name]: value,

    })

  }

  const onChangeSelect = (e: SelectChangeEvent<any>): void => {
    const { name, value } = e.target;
    console.log(name, value);
    setFreepInfo({
      ...freepInfo,
      [name]: value,

    })

  }


  const onHitpointChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFreepInfo({
      ...freepInfo,
      [name]: value,

    })

  }


  // Add field position
  // Also add color



  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    if (props.edit !== undefined) {
      props.setEdit(false)
    } else {
      setOpen(false);

    }
  };

  const onSubmit = () => {
    // this is a mess
    let test = [...props.fullDataFreeps, freepInfo];

    test.sort((a: FreepsCardData, b: FreepsCardData) => {
      if (a.initiative > b.initiative) {
        return 1;
      } else {
        return 0;
      }
    })
    props.setFullDataFreeps(test)

    handleClose()
  }

  const onEditSubmit = () => {
    // this is a mess
    const test = [...props.fullDataFreeps];

    test[props.index] = freepInfo;

    test.sort((a: FreepsCardData, b: FreepsCardData) => {
      if (a.initiative > b.initiative) {
        return 1;
      } else {
        return 0;
      }
    })
    props.setFullDataFreeps(test);

    props.setEdit(false);
  }

  const generateColorMenuItems = () => {
    return Object.entries(colorFreeps).map(([key, value]) => (
      <MenuItem selected={key === freepInfo.color} key={key} value={value} style={{ color: value }}>
        {key} {/* Display the color name (e.g., Blue, Red) */}
      </MenuItem>
    ));
  };

  const generatePositionMenuItems = () => {

    
    return Object.entries(positionsOptions)
    .filter(([key, value]) => isNaN(Number(key))) // Filter out reverse mappings (numeric keys)
    .map(([key, value]) => (
      <MenuItem key={key} value={value}>
        {key}
      </MenuItem>
    ));
  };

  return (
    <>
      {props.edit !== true ? <Button style={{marginTop: "auto"}} size="small" onClick={handleClickOpen}>Add Freep/Creep</Button> : ""}

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Creep</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Fill Out Your Creep Here
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            onChange={onChange}
            value={freepInfo.name}
            id="name"
            name='name'
            label="Name"
            type="text"
            fullWidth
            variant="standard"
          />

          <TextField
            autoFocus
            margin="dense"
            id="maxHitpoints"
            onChange={onChange}
            value={freepInfo.maxHitpoints}
            name='maxHitpoints'
            label="Max Hitpoints"
            type="text"
            fullWidth
            variant="standard"
          />


          <TextField
            autoFocus
            margin="dense"
            id="hitpoints"
            onChange={onChange}
            value={freepInfo.hitpoints}
            name='hitpoints'
            label="Hitpoints"
            type="text"
            fullWidth
            variant="standard"
          />

          {/* some sort of value must be here integrated into the value.  Maybe a button or box */}

          <TextField
            autoFocus
            margin="dense"
            onChange={onChange}
            value={freepInfo.initiative}
            id="initiative"
            name='initiative'
            label="Initiative"
            type="text"
            fullWidth
            variant="standard"
          />


          <TextField
            autoFocus
            margin="dense"
            id="bloodyImage"
            onChange={onChange}
            value={freepInfo.bloodyImage}
            name='bloodyImage'
            label="Bloody Image"
            type="text"
            fullWidth
            variant="standard"
          />

          <TextField
            autoFocus
            margin="dense"
            id="healthyImage"
            onChange={onChange}
            value={freepInfo.healthyImage}
            name='healthyImage'
            label="Healthy Image"
            type="text"
            fullWidth
            variant="standard"
          />

          <TextField
            autoFocus
            margin="dense"
            id="color"

            onChange={onChange}
            value={freepInfo.shield}
            name="shield"
            label="shield"
            type="number"
            fullWidth
            variant="standard"
          />


          <InputLabel margin="dense" id="demo-simple-select-label">Color</InputLabel>
            <Select
              fullWidth
              id="demo-simple-select"
              label="Age"
              labelId="demo-simple-select-label"
              name="color"
              onChange={onChangeSelect}
              value={freepInfo.color}
            >
              <MenuItem selected={freepInfo.color === null} key={'nullColor'} value={null}>
                "Select Color" 
              </MenuItem>

              {generateColorMenuItems()}
          </Select>

          <InputLabel id="demo-simple-select-label">Position</InputLabel>
            <Select
              fullWidth
              id="demo-simple-select"
              label="Age"
              labelId="demo-simple-select-label"
              name="position"
              onChange={onChangeSelect}
              value={freepInfo.position}
            >
              {generatePositionMenuItems()}
          </Select>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          {props.edit === true ? <Button onClick={onEditSubmit}>Edit</Button> : <Button onClick={onSubmit}>Add</Button>}
        </DialogActions>
      </Dialog>
    </>
  )
}

