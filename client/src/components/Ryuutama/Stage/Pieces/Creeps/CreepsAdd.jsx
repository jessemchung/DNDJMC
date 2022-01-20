"use strict";
//purpose, to add a creep to the menu
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreepsAdd = void 0;
var react_1 = require("react");
var randomColor = require('randomcolor'); // import the script
var React = require("react");
var Button_1 = require("@mui/material/Button");
var TextField_1 = require("@mui/material/TextField");
var Dialog_1 = require("@mui/material/Dialog");
var DialogActions_1 = require("@mui/material/DialogActions");
var DialogContent_1 = require("@mui/material/DialogContent");
var DialogContentText_1 = require("@mui/material/DialogContentText");
var DialogTitle_1 = require("@mui/material/DialogTitle");
//!Jesse unfinished
function CreepsAdd(props) {
    var _a = (0, react_1.useState)(false), open = _a[0], setOpen = _a[1];
    var _b = (0, react_1.useState)({
        'armor': 10,
        'hitpoints': 10,
        'healthyImage': './image/Ryuutama/SampleIcons/BradGood.png',
        'bloodyImage': './image/Ryuutama/SampleIcons/BradBad.png',
        'initiative': 10,
        'name': "Bradford",
        'appearance': "purple hair, white skin",
    }), creepInfo = _b[0], setCreepInfo = _b[1];
    var onChange = function (e) {
        var _a;
        var _b = e.target, name = _b.name, value = _b.value;
        console.log(name, value);
        setCreepInfo(__assign(__assign({}, creepInfo), (_a = {}, _a[name] = value, _a)));
    };
    // 'armor': 6,
    // 'hitpoints':10,
    // 'healthyImage': './image/Ryuutama/SampleIcons/BradGood.png',
    // 'bloodyImage': './image/Ryuutama/SampleIcons/BradBad.png',
    // 'initiative': 2,
    // 'name': "Bradford",
    // 'appearance': "purple hair, white skin",
    var handleClickOpen = function () {
        setOpen(true);
    };
    var handleClose = function () {
        setOpen(false);
    };
    var onSubmit = function () {
        props.setFullDataCreeps(__spreadArray(__spreadArray([], props.fullDataCreeps, true), [creepInfo], false));
        handleClose();
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
          <TextField_1.default autoFocus margin="dense" onChange={onChange} value={creepInfo.name} id="name" name='name' label="Name" type="text" fullWidth variant="standard"/>

          <TextField_1.default autoFocus margin="dense" id="armor" onChange={onChange} value={creepInfo.armor} name='armor' label="Armor" type="text" fullWidth variant="standard"/>

          <TextField_1.default autoFocus margin="dense" onChange={onChange} value={creepInfo.initiative} id="initiative" name='initiative' label="Initiative" type="text" fullWidth variant="standard"/>

          <TextField_1.default autoFocus margin="dense" id="appearance" onChange={onChange} value={creepInfo.appearance} name='appearance' label="Appearance" type="text" fullWidth variant="standard"/>

          <TextField_1.default autoFocus margin="dense" id="bloodyImage" onChange={onChange} value={creepInfo.bloodyImage} name='bloodyImage' label="Bloody Image" type="text" fullWidth variant="standard"/>

          <TextField_1.default autoFocus margin="dense" id="healthyImage" onChange={onChange} value={creepInfo.healthyImage} name='healthyImage' label="Healthy Image" type="text" fullWidth variant="standard"/>



        </DialogContent_1.default>
        <DialogActions_1.default>
          <Button_1.default onClick={handleClose}>Cancel</Button_1.default>
          <Button_1.default onClick={onSubmit}>Add</Button_1.default>
        </DialogActions_1.default>
      </Dialog_1.default>


    </>);
}
exports.CreepsAdd = CreepsAdd;
//# sourceMappingURL=CreepsAdd.jsx.map