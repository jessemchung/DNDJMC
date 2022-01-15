"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var React = require("react");
var styles_1 = require("@mui/material/styles");
var Button_1 = require("@mui/material/Button");
var TextField_1 = require("@mui/material/TextField");
var Dialog_1 = require("@mui/material/Dialog");
var DialogActions_1 = require("@mui/material/DialogActions");
var DialogContent_1 = require("@mui/material/DialogContent");
var DialogContentText_1 = require("@mui/material/DialogContentText");
var DialogTitle_1 = require("@mui/material/DialogTitle");
var colors_1 = require("@mui/material/colors");
//this might need to be a drop down
var arrayOfBenefits = [
    './image/Ryuutama/Weather/Ryuutama_Cold.png',
    './image/Ryuutama/Weather/Ryuutama_Cold.png',
    './image/Ryuutama/Weather/Ryuutama_Cold.png',
    './image/Ryuutama/Weather/Ryuutama_Cold.png',
    './image/Ryuutama/Weather/Ryuutama_Cold.png',
    './image/Ryuutama/Weather/Ryuutama_Cold.png',
    './image/Ryuutama/Weather/Ryuutama_Cold.png',
    './image/Ryuutama/Weather/Ryuutama_Cold.png',
    './image/Ryuutama/Weather/Ryuutama_Cold.png',
    './image/Ryuutama/Weather/Ryuutama_Cold.png',
];
var theme = (0, styles_1.createTheme)({
    palette: {
        primary: {
            // Purple and green play nicely together.
            main: colors_1.purple[500],
        },
        secondary: {
            // This is green.A700 as hex.
            main: '#11cb5f',
        },
    },
});
function PropsBarIndividualCard() {
    var _a = React.useState(''), age = _a[0], setAge = _a[1];
    var _b = (0, react_1.useState)(false), open = _b[0], setOpen = _b[1];
    var handleChange = function (event) {
        setAge(event.target.value);
    };
    var _c = (0, react_1.useState)(0), weather = _c[0], setWeather = _c[1];
    var handleClickOpen = function () {
        setOpen(true);
    };
    var handleClose = function () {
        setOpen(false);
    };
    return (<>

      <img style={{ 'width': '8%' }} src="./image/Ryuutama/Weather/Ryuutama_Cold.png" onClick={handleClickOpen}/>

      <Dialog_1.default open={open} onClose={handleClose}>
        <DialogTitle_1.default>Add Creep</DialogTitle_1.default>
        <DialogContent_1.default>
          <DialogContentText_1.default>
            Fill Out Your Creep Here
          </DialogContentText_1.default>
          <TextField_1.default autoFocus margin="dense" id="name" name='name' label="Name" type="text" fullWidth variant="standard"/>

          <TextField_1.default autoFocus margin="dense" id="armor" name='armor' label="Armor" type="text" fullWidth variant="standard"/>

          <TextField_1.default autoFocus margin="dense" id="initiative" name='initiative' label="Initiative" type="text" fullWidth variant="standard"/>

          <TextField_1.default autoFocus margin="dense" id="appearance" name='appearance' label="Appearance" type="text" fullWidth variant="standard"/>

          <TextField_1.default autoFocus margin="dense" id="bloodyImage" name='bloodyImage' label="Bloody Image" type="text" fullWidth variant="standard"/>

          <TextField_1.default autoFocus margin="dense" id="healthyImage" name='healthyImage' label="Healthy Image" type="text" fullWidth variant="standard"/>



          <Button_1.default>

            Delete
          </Button_1.default>
        </DialogContent_1.default>
        <DialogActions_1.default>
          <Button_1.default onClick={handleClose}>Cancel</Button_1.default>
          <Button_1.default onClick={handleClose}>Subscribe</Button_1.default>
        </DialogActions_1.default>
      </Dialog_1.default>


    </>);
}
exports.default = PropsBarIndividualCard;
//# sourceMappingURL=Weather.jsx.map