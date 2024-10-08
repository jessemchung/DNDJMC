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
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useForm } from '../Common/setForm.jsx';
import { FreepsCardData } from './Stage/Pieces/Common/_Types.jsx';


//this needs to ability to set CreepsAdd
interface Props {
  onClose: () => void
  open: boolean
  fullDataFreeps: Array<FreepsCardData>

  // going to need their data to prepopulate the form
}

type csvForm = {
  name: string,
  freeps: boolean,
  creeps: boolean
}

export function CsvDownloadDialogue(props: Props) {
  const [csvForm, setCsvForm] = useForm<csvForm>({
    name: "myRyuutama.csv",
    freeps: true,
    creeps: false
  });

  const downloadCsv = () => {
    let workingOn = props.fullDataFreeps;
    if (csvForm.freeps === false) {
      workingOn = props.fullDataFreeps.filter((x) => {
        if (x.creepOrFreep === "freep") {
          return false;
        } else {
          return true;
        }
      })
    } 
    if (csvForm.creeps === false) {
      workingOn = workingOn.filter((x) => {
        if (x.creepOrFreep === "creep") {
          return false;
        } else {
          return true;
        }
      })
    }


    // bloodyImage: string,
    // healthyImage: string,
    // hitpoints:number,
    // maxHitpoints: number,
    // creepOrFreep: FreepOrCreep,
    // shield: number,
    // color: colorOptions,
    // position: positionsOptions
  
    const csvRows: Array<Array<any>> = [];
    const titleRow: Array<keyof FreepsCardData> = ["bloodyImage", "color", "creepOrFreep", "healthyImage", "hitpoints", "initiative", "maxHitpoints", "name", "position", "shield"]
    csvRows.push(titleRow);
    for (var currentCreature = 0; currentCreature<workingOn.length; currentCreature++) {
      let newRow = [workingOn[currentCreature].bloodyImage, workingOn[currentCreature].color, workingOn[currentCreature].creepOrFreep,  `"${workingOn[currentCreature].healthyImage.replace(",", '|')}"`, workingOn[currentCreature].hitpoints, workingOn[currentCreature].initiative, workingOn[currentCreature].maxHitpoints, workingOn[currentCreature].name, workingOn[currentCreature].position, workingOn[currentCreature].shield];
      csvRows.push(newRow);
    }

    let csvContent = "data:text/csv;charset=utf-8,";

    csvRows.forEach(function (rowArray) {
      let row = rowArray.join(", ");
      csvContent += row + "\r\n";
    });
    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", csvForm.name);
    document.body.appendChild(link); // Required for FF
    
    link.click(); // This will download the data file named "my_data.csv".
  }


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.name, "the name")

    setCsvForm({
      [event.target.name]: event.target.checked
    });
  };


  const handleClose = () => {
    // this needs to handle the close but may not be needed
    props.onClose();
  };

  console.log("are we making it into this place")
  return (
    <>
      <Dialog open={true} onClose={handleClose}>
        <DialogTitle>Download</DialogTitle>
        <DialogContent>
          <DialogContentText>
            What do you wish to download?  Select name of file and contents.
          </DialogContentText>

          <TextField
            autoFocus
            margin="dense"
            id="csv-name"
            // onChange={onChange}
            value={csvForm.name}
            name='name'
            label="File Name"
            type="text"
            fullWidth
            variant="standard"
          />

          <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
            <FormLabel component="legend">Select what to download</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox checked={csvForm.freeps} onChange={handleChange} name="freeps" />
                }
                label="Download Adventurers?"
              />
              <FormControlLabel
                control={
                  <Checkbox checked={csvForm.creeps} onChange={handleChange} name="creeps" />
                }
                label="Download Enemies?"
              />
            </FormGroup>
            <FormHelperText>These can then be reuploaded</FormHelperText>
          </FormControl>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={() => { downloadCsv() }}>Add</Button>
        </DialogActions>
      </Dialog>
    </>


  )
}