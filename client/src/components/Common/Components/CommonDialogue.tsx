import * as React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Select,
  MenuItem,
  Button,
  SelectChangeEvent,
} from '@mui/material';

// Define types for the props
interface TextFieldProps {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  multiline: boolean;
}

interface SelectFieldProps {
  label: string;
  value: string;
  onChange: (event: SelectChangeEvent<string>) => void;
  options: { value: string; label: string }[];
}

interface ButtonProps {
  label: string;
  onClick: () => void;
  color?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
}

interface CustomDialogProps {
  open: boolean;
  onClose: () => void;
  title: string;
  textFields?: TextFieldProps[];
  selectFields?: SelectFieldProps[];
  buttons?: ButtonProps[];
}

const CommonDialog: React.FC<CustomDialogProps> = ({
  open,
  onClose,
  title,
  textFields = [],
  selectFields = [],
  buttons = [],
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        {/* Render Text Fields */}
        {textFields.map((field, index) => (
          <TextField
            key={index}
            label={field.label}
            value={field.value}
            onChange={field.onChange}
            fullWidth
            margin="normal"
            variant="outlined"
            multiline={field.multiline}
          />
        ))}

        {/* Render Select Fields */}
        {selectFields.map((field, index) => (
          <Select
            key={index}
            value={field.value}
            onChange={field.onChange}
            fullWidth
            margin="none"
            variant="outlined"
            label={field.label}
          >
            {field.options.map((option, optionIndex) => (
              <MenuItem key={optionIndex} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        ))}
      </DialogContent>
      <DialogActions>
        {/* Render Buttons */}
        {buttons.map((button, index) => (
          <Button key={index} onClick={button.onClick} color={button.color || 'primary'}>
            {button.label}
          </Button>
        ))}
      </DialogActions>
    </Dialog>
  );
};

export default CommonDialog;