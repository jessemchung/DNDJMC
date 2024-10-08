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
exports.CsvDownloadDialogue = void 0;
var randomColor = require('randomcolor'); // import the script
var React = __importStar(require("react"));
var Button_1 = __importDefault(require("@mui/material/Button"));
var TextField_1 = __importDefault(require("@mui/material/TextField"));
var Dialog_1 = __importDefault(require("@mui/material/Dialog"));
var DialogActions_1 = __importDefault(require("@mui/material/DialogActions"));
var DialogContent_1 = __importDefault(require("@mui/material/DialogContent"));
var DialogContentText_1 = __importDefault(require("@mui/material/DialogContentText"));
var DialogTitle_1 = __importDefault(require("@mui/material/DialogTitle"));
var material_1 = require("@mui/material");
var setForm_jsx_1 = require("../Common/setForm.jsx");
function CsvDownloadDialogue(props) {
    var _a = (0, setForm_jsx_1.useForm)({
        name: "myRyuutama.csv",
        freeps: true,
        creeps: false
    }), csvForm = _a[0], setCsvForm = _a[1];
    var downloadCsv = function () {
        var workingOn = props.fullDataFreeps;
        if (csvForm.freeps === false) {
            workingOn = props.fullDataFreeps.filter(function (x) {
                if (x.creepOrFreep === "freep") {
                    return false;
                }
                else {
                    return true;
                }
            });
        }
        if (csvForm.creeps === false) {
            workingOn = workingOn.filter(function (x) {
                if (x.creepOrFreep === "creep") {
                    return false;
                }
                else {
                    return true;
                }
            });
        }
        // bloodyImage: string,
        // healthyImage: string,
        // hitpoints:number,
        // maxHitpoints: number,
        // creepOrFreep: FreepOrCreep,
        // shield: number,
        // color: colorOptions,
        // position: positionsOptions
        var csvRows = [];
        var titleRow = ["bloodyImage", "color", "creepOrFreep", "healthyImage", "hitpoints", "initiative", "maxHitpoints", "name", "position", "shield"];
        csvRows.push(titleRow);
        for (var currentCreature = 0; currentCreature < workingOn.length; currentCreature++) {
            var newRow = [workingOn[currentCreature].bloodyImage, workingOn[currentCreature].color, workingOn[currentCreature].creepOrFreep, "\"".concat(workingOn[currentCreature].healthyImage.replace(",", '|'), "\""), workingOn[currentCreature].hitpoints, workingOn[currentCreature].initiative, workingOn[currentCreature].maxHitpoints, workingOn[currentCreature].name, workingOn[currentCreature].position, workingOn[currentCreature].shield];
            csvRows.push(newRow);
        }
        var csvContent = "data:text/csv;charset=utf-8,";
        csvRows.forEach(function (rowArray) {
            var row = rowArray.join(", ");
            csvContent += row + "\r\n";
        });
        var encodedUri = encodeURI(csvContent);
        var link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", csvForm.name);
        document.body.appendChild(link); // Required for FF
        link.click(); // This will download the data file named "my_data.csv".
    };
    var handleChange = function (event) {
        var _a;
        console.log(event.target.name, "the name");
        setCsvForm((_a = {},
            _a[event.target.name] = event.target.checked,
            _a));
    };
    var handleClose = function () {
        // this needs to handle the close but may not be needed
        props.onClose();
    };
    console.log("are we making it into this place");
    return (<>
      <Dialog_1.default open={true} onClose={handleClose}>
        <DialogTitle_1.default>Download</DialogTitle_1.default>
        <DialogContent_1.default>
          <DialogContentText_1.default>
            What do you wish to download?  Select name of file and contents.
          </DialogContentText_1.default>

          <TextField_1.default autoFocus margin="dense" id="csv-name" 
    // onChange={onChange}
    value={csvForm.name} name='name' label="File Name" type="text" fullWidth variant="standard"/>

          <material_1.FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
            <material_1.FormLabel component="legend">Select what to download</material_1.FormLabel>
            <material_1.FormGroup>
              <material_1.FormControlLabel control={<material_1.Checkbox checked={csvForm.freeps} onChange={handleChange} name="freeps"/>} label="Download Adventurers?"/>
              <material_1.FormControlLabel control={<material_1.Checkbox checked={csvForm.creeps} onChange={handleChange} name="creeps"/>} label="Download Enemies?"/>
            </material_1.FormGroup>
            <material_1.FormHelperText>These can then be reuploaded</material_1.FormHelperText>
          </material_1.FormControl>

        </DialogContent_1.default>
        <DialogActions_1.default>
          <Button_1.default onClick={handleClose}>Cancel</Button_1.default>
          <Button_1.default onClick={function () { downloadCsv(); }}>Add</Button_1.default>
        </DialogActions_1.default>
      </Dialog_1.default>
    </>);
}
exports.CsvDownloadDialogue = CsvDownloadDialogue;
//# sourceMappingURL=CsvDownloadDialogue.jsx.map