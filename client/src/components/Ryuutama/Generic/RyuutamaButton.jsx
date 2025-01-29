"use strict";
//purpose, to add a creep to the menu
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreepsAdd = void 0;
var react_1 = require("react");
var randomColor = require('randomcolor'); // import the script
var React = __importStar(require("react"));
var Button_1 = __importDefault(require("@mui/material/Button"));
var TextField_1 = __importDefault(require("@mui/material/TextField"));
var Dialog_1 = __importDefault(require("@mui/material/Dialog"));
var DialogActions_1 = __importDefault(require("@mui/material/DialogActions"));
var DialogContent_1 = __importDefault(require("@mui/material/DialogContent"));
var DialogContentText_1 = __importDefault(require("@mui/material/DialogContentText"));
var DialogTitle_1 = __importDefault(require("@mui/material/DialogTitle"));
//card likely needs to have flex to split it in a half
function CreepsAdd() {
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

      <Button_1.default size="small" onClick={handleClickOpen}>Add</Button_1.default>

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
exports.CreepsAdd = CreepsAdd;
//# sourceMappingURL=RyuutamaButton.jsx.map