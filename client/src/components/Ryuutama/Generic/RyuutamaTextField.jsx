"use strict";
//purpose, to add a creep to the menu
Object.defineProperty(exports, "__esModule", { value: true });
exports.RyuutamaTextField = void 0;
var randomColor = require('randomcolor'); // import the script
var React = require("react");
var TextField_1 = require("@mui/material/TextField");
//card likely needs to have flex to split it in a half
function RyuutamaTextField(props) {
    // <Grid container spacing={1} columns={10}>
    return (<>

    <TextField_1.default autoFocus margin="dense" id={props.name} onChange={props.onChange} value={props.value} name={props.name} label={props.label} type="text" fullWidth variant="standard"/>


    </>);
}
exports.RyuutamaTextField = RyuutamaTextField;
//# sourceMappingURL=RyuutamaTextField.jsx.map