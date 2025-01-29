"use strict";
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
var react_1 = require("react");
var randomColor = require('randomcolor'); // import the script
var React = __importStar(require("react"));
var Card_1 = __importDefault(require("@mui/material/Card"));
var CardActions_1 = __importDefault(require("@mui/material/CardActions"));
var CardContent_1 = __importDefault(require("@mui/material/CardContent"));
var Button_1 = __importDefault(require("@mui/material/Button"));
var Typography_1 = __importDefault(require("@mui/material/Typography"));
var TextField_1 = __importDefault(require("@mui/material/TextField"));
var Dialog_1 = __importDefault(require("@mui/material/Dialog"));
var DialogActions_1 = __importDefault(require("@mui/material/DialogActions"));
var DialogContent_1 = __importDefault(require("@mui/material/DialogContent"));
var DialogTitle_1 = __importDefault(require("@mui/material/DialogTitle"));
var arrayOfBenefits = ['Protective', 'Hampering', 'Offensive'];
var arrayOfPermanent = ['Permanent', 'One-Use', 'Temporal'];
// const theme = createTheme({
//   palette: {
//     primary: {
//       // Purple and green play nicely together.
//       main: purple[500],
//     },
//     secondary: {
//       // This is green.A700 as hex.
//       main: '#11cb5f',
//     },
//   },
// });
function PropsBarIndividualCard(props) {
    var terrainProp = props.terrainProp, setNewTerrainInformation = props.setNewTerrainInformation, index = props.index;
    var _a = (0, react_1.useState)(terrainProp.title), titleEdit = _a[0], setTitleEdit = _a[1];
    var _b = (0, react_1.useState)(terrainProp.description), description = _b[0], setDescription = _b[1];
    var maxDescriptionLength = 100;
    var _c = (0, react_1.useState)(false), open = _c[0], setOpen = _c[1];
    var handleClickOpen = function () {
        setOpen(true);
    };
    var handleClose = function () {
        setOpen(false);
    };
    var handleSubmit = function () {
        var newTerrainProp = terrainProp;
        terrainProp.title = titleEdit;
        terrainProp.description = description;
        setNewTerrainInformation(index, newTerrainProp);
        setOpen(false);
    };
    var handleChangeTitle = function (event) {
        setTitleEdit(event.target.value);
    };
    var handleChangeDescription = function (event) {
        setDescription(event.target.value);
    };
    var truncateText = function (text, maxLength) {
        if (text.length > maxLength) {
            return text.slice(0, maxLength) + '...'; // Add ellipsis if truncated
        }
        return text;
    };
    return (<>
    {/* <ThemeProvider theme={theme}> */}
      <Card_1.default sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: "100%", padding: 0 }}>
        <CardContent_1.default style={{ flexGrow: 1, maxHeight: '10em', overflow: 'auto', padding: 0 }}>
        <Typography_1.default variant="body1" component="div" gutterBottom>
          {terrainProp.title}
        </Typography_1.default>

        <Typography_1.default variant="body2" component="div" color="textSecondary" style={{ wordBreak: 'break-word' }}>
          {truncateText(terrainProp.description, maxDescriptionLength)}

        </Typography_1.default>

        </CardContent_1.default>
        <CardActions_1.default style={{ marginTop: 'auto', padding: 0 }}>
          <Button_1.default size="small" onClick={handleClickOpen}>Edit</Button_1.default>

          <Dialog_1.default open={open} onClose={handleClose}>
            <DialogTitle_1.default>Edit This Prop</DialogTitle_1.default>
            <DialogContent_1.default>
              <TextField_1.default autoFocus margin="dense" id="propName" label="prop name" color="success" type="email" fullWidth value={titleEdit} onChange={handleChangeTitle} variant="standard"/>

              <TextField_1.default autoFocus margin="dense" id="propDescription" color="success" label="description" type="text" multiline fullWidth value={description} onChange={handleChangeDescription} variant="standard"/>

            </DialogContent_1.default>
            <DialogActions_1.default>
              <Button_1.default onClick={handleClose}>Cancel</Button_1.default>
              <Button_1.default onClick={handleSubmit} type="submit">Submit</Button_1.default>
            </DialogActions_1.default>
          </Dialog_1.default>


        </CardActions_1.default>
      </Card_1.default>

      {/* </ThemeProvider> */}

    </>);
}
exports.default = PropsBarIndividualCard;
//# sourceMappingURL=PropsBarIndividualCard.jsx.map