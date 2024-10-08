"use strict";
//goal here.
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BattleDialogue = void 0;
//purpose, to add a creep to the menu
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
function BattleDialogue(props) {
    var _a = (0, react_1.useState)(false), open = _a[0], setOpen = _a[1];
    var _b = (0, react_1.useState)({
        'shield': 10,
        'hitpoints': 10,
        'maxHitpoints': 12,
        'healthyImage': './image/Ryuutama/SampleIcons/BradGood.png',
        'bloodyImage': './image/Ryuutama/SampleIcons/BradBad.png',
        'initiative': 10,
        'name': "Bradford",
        creepOrFreep: "creep",
        position: null,
        color: null
    }), creepInfo = _b[0], setCreepInfo = _b[1];
    var onChange = function (e) {
        var _a;
        var _b = e.target, name = _b.name, value = _b.value;
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
        // props.setFullDataCreeps([...props.fullDataCreeps, creepInfo])
        handleClose();
    };
    // <Grid container spacing={1} columns={10}>
    return (<>

      <Button_1.default id={"AddCreeps"} style={{ width: "100%" }} size="small" onClick={handleClickOpen}>Add Creeps</Button_1.default>

      <Dialog_1.default open={open} onClose={handleClose}>
        <DialogTitle_1.default>Add Creep</DialogTitle_1.default>
        <DialogContent_1.default>
          <DialogContentText_1.default>
            Fill Out Your Creep Here
          </DialogContentText_1.default>
          <TextField_1.default autoFocus margin="dense" onChange={onChange} value={creepInfo.name} id="name" name='name' label="Name" type="text" fullWidth variant="standard"/>

          <TextField_1.default autoFocus margin="dense" id="shield" onChange={onChange} value={creepInfo.shield} name='shield' label="Shield" type="text" fullWidth variant="standard"/>

          <TextField_1.default autoFocus margin="dense" onChange={onChange} value={creepInfo.initiative} id="initiative" name='initiative' label="Initiative" type="text" fullWidth variant="standard"/>




    <TextField_1.default autoFocus margin="dense" onChange={onChange} value={creepInfo.hitpoints} id="hitpoints" name='hitpoints' label="hitpoints" type="text" fullWidth variant="standard"/>
          {/* <TextField
          autoFocus
          margin="dense"
          id="appearance"
          onChange={onChange}
          value={creepInfo.appearance}
          name='appearance'
          label="Appearance"
          type="text"
          fullWidth
          variant="standard"
        /> */}

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
exports.BattleDialogue = BattleDialogue;
//# sourceMappingURL=BattleDialogue.jsx.map