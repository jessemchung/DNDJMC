"use strict";
//purpose, to add a creep to the menu
Object.defineProperty(exports, "__esModule", { value: true });
exports.RyuutamaTextField = void 0;
var react_1 = require("react");
var randomColor = require('randomcolor'); // import the script
var React = require("react");
var TextField_1 = require("@mui/material/TextField");
//card likely needs to have flex to split it in a half
function RyuutamaTextField(props) {
    var _a = (0, react_1.useState)(false), open = _a[0], setOpen = _a[1];
    var _b = (0, react_1.useState)({}), creepInfo = _b[0], setCreepInfo = _b[1];
    var handleClickOpen = function () {
        setOpen(true);
    };
    var handleClose = function () {
        setOpen(false);
    };
    // <Grid container spacing={1} columns={10}>
    return (<>

    <TextField_1.default autoFocus margin="dense" id={props.name} onChange={props.onChange} value={props.value} name={props.name} label={props.label} type="text" fullWidth variant="standard"/>


    </>);
}
exports.RyuutamaTextField = RyuutamaTextField;
//# sourceMappingURL=RyuutamaTextField.jsx.map