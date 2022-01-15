"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var React = require("react");
var styles_1 = require("@mui/material/styles");
var Dialog_1 = require("@mui/material/Dialog");
var DialogContent_1 = require("@mui/material/DialogContent");
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
    var _c = (0, react_1.useState)('./image/Ryuutama/Weather/Ryuutama_Cold.png'), weather = _c[0], setWeather = _c[1];
    var handleClickOpen = function () {
        setOpen(true);
    };
    var handleClose = function () {
        setOpen(false);
    };
    return (<>

      <img style={{ 'width': '8%' }} src="./image/Ryuutama/Weather/Ryuutama_Cold.png" onClick={handleClickOpen}/>

      <Dialog_1.default open={open} onClose={handleClose}>
        <DialogTitle_1.default>Choose Weather</DialogTitle_1.default>
        <DialogContent_1.default>
          <img style={{ 'width': '8%' }} src="./image/Ryuutama/Weather/Ryuutama_Cold.png" onClick={handleClickOpen}/>

          <img style={{ 'width': '8%' }} src="./image/Ryuutama/Weather/Ryuutama_Cold.png" onClick={handleClickOpen}/>


        </DialogContent_1.default>
        {/* <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions> */}
      </Dialog_1.default>


    </>);
}
exports.default = PropsBarIndividualCard;
//# sourceMappingURL=Weather.jsx.map