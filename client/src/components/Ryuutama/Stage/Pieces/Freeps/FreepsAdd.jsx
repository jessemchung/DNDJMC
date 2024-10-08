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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FreepsAdd = void 0;
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
var _Types_jsx_1 = require("../Common/_Types.jsx");
var material_1 = require("@mui/material");
var FreepsImageSelection_jsx_1 = __importDefault(require("./FreepsImageSelection.jsx"));
var FreepsUploadImage_jsx_1 = __importDefault(require("./FreepsUploadImage.jsx"));
function FreepsAdd(props) {
    var basicForm = {
        'shield': 0,
        'hitpoints': 10,
        'maxHitpoints': 10,
        'healthyImage': './image/Ryuutama/SampleIcons/BradGood.png',
        'bloodyImage': './image/Ryuutama/SampleIcons/BradBad.png',
        'initiative': 10,
        'name': "Bradford",
        creepOrFreep: props.freepsOrCreeps,
        color: null,
        position: 0
    };
    var _a = (0, react_1.useState)(false), openImage = _a[0], setOpenImage = _a[1];
    var _b = (0, react_1.useState)(false), openUploadImage = _b[0], setOpenUploadImage = _b[1];
    var _c = (0, react_1.useState)(props.edit || false), open = _c[0], setOpen = _c[1];
    var _d = (0, react_1.useState)(props.freepInfo ? props.freepInfo : basicForm), freepInfo = _d[0], setFreepInfo = _d[1];
    var onChange = function (e) {
        var _a;
        var _b = e.target, name = _b.name, value = _b.value;
        console.log(name, value, "something is wrong with the color");
        setFreepInfo(__assign(__assign({}, freepInfo), (_a = {}, _a[name] = value, _a)));
    };
    var onChangeSelect = function (e) {
        var _a;
        var _b = e.target, name = _b.name, value = _b.value;
        console.log(name, value);
        setFreepInfo(__assign(__assign({}, freepInfo), (_a = {}, _a[name] = value, _a)));
    };
    // Add field position
    // Also add color
    var handleClickOpen = function () {
        setOpen(true);
    };
    var handleOpening = function (toggleValue) {
        setOpenImage(toggleValue);
    };
    var handleOpeningUploadImage = function (toggleValue) {
        setOpenUploadImage(toggleValue);
    };
    var handleClose = function () {
        if (props.edit !== undefined) {
            props.setEdit(false);
        }
        else {
            setOpen(false);
        }
    };
    var onSubmit = function () {
        var test = __spreadArray(__spreadArray([], props.fullDataFreeps, true), [freepInfo], false);
        test.sort(function (a, b) {
            if (a.initiative > b.initiative) {
                return 0;
            }
            else {
                return 1;
            }
        });
        props.setFullDataFreeps(test);
        handleClose();
    };
    var onEditSubmit = function () {
        var test = __spreadArray([], props.fullDataFreeps, true);
        test[props.index] = freepInfo;
        test.sort(function (a, b) {
            if (a.initiative > b.initiative) {
                return 0;
            }
            else {
                return 1;
            }
        });
        props.setFullDataFreeps(test);
        props.setEdit(false);
    };
    var generateColorMenuItems = function () {
        return Object.entries(_Types_jsx_1.colorFreeps).map(function (_a) {
            var key = _a[0], value = _a[1];
            return (<material_1.MenuItem selected={key === freepInfo.color} key={key} value={value} style={{ color: value }}>
        {key} {/* Display the color name (e.g., Blue, Red) */}
      </material_1.MenuItem>);
        });
    };
    var generatePositionMenuItems = function () {
        return Object.entries(_Types_jsx_1.positionsOptions)
            .filter(function (_a) {
            var key = _a[0], value = _a[1];
            return isNaN(Number(key));
        }) // Filter out reverse mappings (numeric keys)
            .map(function (_a) {
            var key = _a[0], value = _a[1];
            return (<material_1.MenuItem key={key} value={value}>
        {key}
      </material_1.MenuItem>);
        });
    };
    return (<>
      {props.edit !== true ? <Button_1.default style={{ marginTop: "auto" }} size="small" onClick={handleClickOpen}>Add Freep/Creep</Button_1.default> : ""}

      <Dialog_1.default open={open} onClose={handleClose}>
        <DialogTitle_1.default>Add Creep</DialogTitle_1.default>
        <DialogContent_1.default>
          <DialogContentText_1.default>
            Fill Out Your Creep Here
          </DialogContentText_1.default>
          <TextField_1.default autoFocus margin="dense" onChange={onChange} value={freepInfo.name} id="name" name='name' label="Name" type="text" fullWidth variant="standard"/>

          <TextField_1.default autoFocus margin="dense" id="maxHitpoints" onChange={onChange} value={freepInfo.maxHitpoints} name='maxHitpoints' label="Max Hitpoints" type="text" fullWidth variant="standard"/>


          <TextField_1.default autoFocus margin="dense" id="hitpoints" onChange={onChange} value={freepInfo.hitpoints} name='hitpoints' label="Hitpoints" type="text" fullWidth variant="standard"/>

          {/* some sort of value must be here integrated into the value.  Maybe a button or box */}

          <TextField_1.default autoFocus margin="dense" onChange={onChange} value={freepInfo.initiative} id="initiative" name='initiative' label="Initiative" type="text" fullWidth variant="standard"/>

        {/*
                  <TextField
                    autoFocus
                    margin="dense"
                    id="bloodyImage"
                    onChange={onChange}
                    value={freepInfo.bloodyImage}
                    name='bloodyImage'
                    label="Bloody Image"
                    type="text"
                    fullWidth
                    variant="standard"
                  /> */}

          <material_1.ButtonGroup>
            <Button_1.default onClick={function () { return handleOpening(true); }}>Choose Default Image</Button_1.default>
            <Button_1.default onClick={function () { return handleOpeningUploadImage(true); }}>Upload Image</Button_1.default>

          </material_1.ButtonGroup>

          <TextField_1.default autoFocus margin="dense" id="healthyImage" onChange={onChange} value={freepInfo.healthyImage} name='healthyImage' label="Upload Simple" type="text" fullWidth variant="standard"/>

          <TextField_1.default autoFocus margin="dense" id="color" onChange={onChange} value={freepInfo.shield} name="shield" label="shield" type="number" fullWidth variant="standard"/>


          <material_1.InputLabel margin="dense" id="demo-simple-select-label">Color</material_1.InputLabel>
            <material_1.Select fullWidth id="demo-simple-select" label="Age" labelId="demo-simple-select-label" name="color" onChange={onChangeSelect} value={freepInfo.color}>
              <material_1.MenuItem selected={freepInfo.color === null} key={'nullColor'} value={null}>
                "Select Color" 
              </material_1.MenuItem>

              {generateColorMenuItems()}
          </material_1.Select>

          <material_1.InputLabel id="demo-simple-select-label">Position</material_1.InputLabel>
            <material_1.Select fullWidth id="demo-simple-select" label="Age" labelId="demo-simple-select-label" name="position" onChange={onChangeSelect} value={freepInfo.position}>
              {generatePositionMenuItems()}
          </material_1.Select>
        </DialogContent_1.default>
        <DialogActions_1.default>
          <Button_1.default onClick={handleClose}>Cancel</Button_1.default>
          {props.edit === true ? <Button_1.default onClick={onEditSubmit}>Edit</Button_1.default> : <Button_1.default onClick={onSubmit}>Add</Button_1.default>}
          {openImage ? <FreepsImageSelection_jsx_1.default edit={props.edit} freepInfo={freepInfo} setFreepInfo={setFreepInfo} open={openImage} setOpen={setOpenImage} title=''/> : ""}
          {openUploadImage ? <FreepsUploadImage_jsx_1.default edit={props.edit} freepInfo={freepInfo} setFreepInfo={setFreepInfo} open={openUploadImage} setOpen={setOpenUploadImage} title=''/> : ""}

        </DialogActions_1.default>
      </Dialog_1.default>

    </>);
}
exports.FreepsAdd = FreepsAdd;
//# sourceMappingURL=FreepsAdd.jsx.map