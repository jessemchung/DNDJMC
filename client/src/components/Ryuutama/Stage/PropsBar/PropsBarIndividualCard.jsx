"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var randomColor = require('randomcolor'); // import the script
var React = require("react");
var styles_1 = require("@mui/material/styles");
var Card_1 = require("@mui/material/Card");
var CardActions_1 = require("@mui/material/CardActions");
var CardContent_1 = require("@mui/material/CardContent");
var Button_1 = require("@mui/material/Button");
var Typography_1 = require("@mui/material/Typography");
var TextField_1 = require("@mui/material/TextField");
var Dialog_1 = require("@mui/material/Dialog");
var DialogActions_1 = require("@mui/material/DialogActions");
var DialogContent_1 = require("@mui/material/DialogContent");
var DialogTitle_1 = require("@mui/material/DialogTitle");
var colors_1 = require("@mui/material/colors");
var arrayOfBenefits = ['Protective', 'Hampering', 'Offensive'];
var arrayOfPermanent = ['Permanent', 'One-Use', 'Temporal'];
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
    <styles_1.ThemeProvider theme={theme}>
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

      </styles_1.ThemeProvider>

    </>);
}
exports.default = PropsBarIndividualCard;
//# sourceMappingURL=PropsBarIndividualCard.jsx.map