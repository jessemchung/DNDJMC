var randomColor = require('randomcolor'); // import the script
import * as React from 'react'

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

interface Props {
  //this is expecting a single object
  open: boolean
  handleClose: (change: boolean) => void,
  textFields?: [],
  title: string,
  body: string,
  buttons: any,

};

export const RyuutamaDialogue: React.FC<Props> = (prop: Props) => {
  let { open, textFields, handleClose, title, body, buttons } = prop
  //this requires certain options
  //needs a handleclose passed through
  //might need an option to determine if this is a form

  //will require an array that contains all of the textfields needed to populate

  //will need a map function to get all of the textfields working
  return (
    <>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {body}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {buttons}
        </DialogActions>
      </Dialog>

    </>
  )
}


