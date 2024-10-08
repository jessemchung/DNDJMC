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
import { SampleCharacterOptions, WeatherOptions } from '../../ImageDecoration/_Types.jsx';
import { FlashOffRounded } from '@mui/icons-material';


//goal IOCE
//input is the form that needs to be edited.  For now.  Also give selection to select some generic icons.
//maybe a cropper?
// we need the ability to build an image
interface Props {
  // Define any props that the component should accept here
  freepInfo: FreepsCardData;
  title: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  open: boolean;
  edit?: boolean;
  setFreepInfo: React.Dispatch<React.SetStateAction<FreepsCardData>>;
}

const FreepsImageSelection: React.FC<Props> = (props) => {
  const [selectImage, setSelectImage] = useState<string>(props.freepInfo.healthyImage);
  const [openUploadDialogue, setOpenUploadDialogue] = useState<boolean>(false);

  const submitImageUrl = () => {
    props.freepInfo.healthyImage = selectImage;
    props.setFreepInfo({ ...props.freepInfo });
    props.setOpen(false);

  }

  const chooseImage = (chosenImage: string) => {
    setSelectImage(chosenImage);
  }

  const closeImageDialog = () => {
    props.setOpen(false)
  }
  
  // open upload dialogue
  const toggleUploadDialogue = (toggle: boolean) => {
    setOpenUploadDialogue(toggle);
  }

  return (

    <Dialog open={props.open} onClose={closeImageDialog}>
      <DialogTitle>Add Creep</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Select A Default Image or upload your own or enter the url of an image to use.  Cropper coming eventually.
        </DialogContentText>
        <img className={`box ${(selectImage === SampleCharacterOptions.Bradford) ? 'highlight' : ''}`} style={{ 'width': '20%' }} src={SampleCharacterOptions.Bradford} onClick={() => chooseImage(SampleCharacterOptions.Bradford)} />
        <img className={`box ${(selectImage === SampleCharacterOptions.Mariner) ? 'highlight' : ''}`} style={{ 'width': '20%' }} src={SampleCharacterOptions.Mariner} onClick={() => chooseImage(SampleCharacterOptions.Mariner)} />
        <img className={`box ${(selectImage === SampleCharacterOptions.Tendi) ? 'highlight' : ''}`} style={{ 'width': '20%' }} src={SampleCharacterOptions.Tendi} onClick={() => chooseImage(SampleCharacterOptions.Tendi)} />
        <img className={`box ${(selectImage === SampleCharacterOptions.Sam) ? 'highlight' : ''}`} style={{ 'width': '20%' }} src={SampleCharacterOptions.Sam} onClick={() => chooseImage(SampleCharacterOptions.Sam)} />

      </DialogContent>
      <DialogActions>
        <Button onClick={closeImageDialog}>Cancel</Button>
        <Button onClick={() => toggleUploadDialogue(true)}>Upload</Button>
        <Button onClick={submitImageUrl}>Select</Button>
      </DialogActions>
    </Dialog>

    
  );
};

export default FreepsImageSelection;