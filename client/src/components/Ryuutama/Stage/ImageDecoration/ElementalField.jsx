"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElementalField = void 0;
var react_1 = require("react");
var React = require("react");
var styles_1 = require("@mui/material/styles");
var Dialog_1 = require("@mui/material/Dialog");
var DialogContent_1 = require("@mui/material/DialogContent");
var DialogTitle_1 = require("@mui/material/DialogTitle");
var colors_1 = require("@mui/material/colors");
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
function ElementalField(prop) {
    var _a = (0, react_1.useState)(false), open = _a[0], setOpen = _a[1];
    var handleClickOpen = function () {
        setOpen(true);
    };
    var handleClose = function (event) {
        if (event.target.src !== undefined) {
            //still needs to be unbothered I guess?
        }
        setOpen(false);
    };
    return (<>

      <div style={{ 'width': '15%', 'border': '1px green solid', }} onClick={handleClickOpen}/>

      <Dialog_1.default open={open} onClose={handleClose}>
        <DialogTitle_1.default>Choose Color</DialogTitle_1.default>
        <DialogContent_1.default>

          <img style={{ 'width': '30%' }} src="./image/Ryuutama/Terrain/Ryuutama_Alpine.png" onClick={handleClose}/>


        </DialogContent_1.default>

      </Dialog_1.default>


    </>);
}
exports.ElementalField = ElementalField;
//# sourceMappingURL=ElementalField.jsx.map