var randomColor = require('randomcolor'); // import the script
import * as React from 'react'

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { RyuutamaTextField } from './RyuutamaTextField.jsx'

export type Props = React.PropsWithChildren<{
  //this is expecting a single object
  open: boolean
  handleClose: (change: boolean) => void,
  textFields?: {
    name: string,
    value: any,
    onChange: any,
    type: string,
    label: string,
  }[],
  title: string,
  body: string,
  buttons: any,

}>;

export const RyuutamaDialogue: React.FC<Props> = (prop: Props) => {
  let { open, textFields, handleClose, title, body, buttons } = prop
  //this requires certain options
  //needs a handleclose passed through
  //might need an option to determine if this is a form

  //will require an array that contains all of the textfields needed to populate
  let texts = null;
  //will need a map function to get all of the textfields working
  if (textFields !== undefined) {
    texts = textFields.map((eachText) => {
      let { name, value, onChange, type, label } = eachText;
      <RyuutamaTextField name={name} label={label} type={type} onChange={onChange} value={value} />

    })
  }



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
              <DialogContent>{prop.children}</DialogContent>

            </DialogContent>
            <DialogActions>
              {buttons}
            </DialogActions>
          </Dialog>

        </>
        )
}


