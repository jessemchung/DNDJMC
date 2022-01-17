"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElementalField = void 0;
var react_1 = require("react");
var React = require("react");
var styles_1 = require("@mui/material/styles");
var Button_1 = require("@mui/material/Button");
var Dialog_1 = require("@mui/material/Dialog");
var DialogActions_1 = require("@mui/material/DialogActions");
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
    var _b = (0, react_1.useState)('unset'), first = _b[0], setFirst = _b[1];
    var _c = (0, react_1.useState)('unset'), second = _c[0], setSecond = _c[1];
    var _d = (0, react_1.useState)('unset'), third = _d[0], setThird = _d[1];
    // const handleChange = (event: SelectChangeEvent) => {
    //   setAge(event.target.value as string);
    // };
    var handleClickOpen = function () {
        setOpen(true);
    };
    var handleClose = function (event) {
        if (event.target.src !== undefined) {
            //something
        }
        setOpen(false);
    };
    return (<>
      <div style={{
            backgroundColor: "".concat(first),
            height: '75%', borderRadius: '50%', width: '600%', display: 'flex',
            alignItems: 'center',
            border: '1px black solid',
        }} onClick={handleClickOpen}>

        <div style={{ backgroundColor: 'blue', height: '80%', borderRadius: '50%', width: '80%', display: 'flex', alignItems: 'center', border: '1px black solid', }}>

          <div style={{ backgroundColor: 'yellow', padding: '5px', height: '50%', borderRadius: '50%', width: '65%', border: '1px black solid' }}>

          </div>

        </div>

      </div>


      <Dialog_1.default open={open} onClose={handleClose}>
        <DialogTitle_1.default>Choose Color</DialogTitle_1.default>
        <DialogContent_1.default>

          <div style={{
            backgroundColor: 'red',
            height: '80px', borderRadius: '50%', width: '20%', display: 'flex',
            alignItems: 'center',
            border: '1px black solid',
            textAlign: 'center',
            margin: '0 auto',
        }} onClick={handleClickOpen}>

            <div style={{ backgroundColor: 'blue', height: '80%', borderRadius: '50%', width: '80%', display: 'flex', alignItems: 'center', border: '1px black solid', }}>

              <div style={{ backgroundColor: 'yellow', padding: '5px', height: '50%', borderRadius: '50%', width: '65%', border: '1px black solid' }}>

              </div>

            </div>

          </div>


          <img style={{ 'width': '20%' }} src="./image/Ryuutama/Elements/Aura.png" onClick={handleClose}/>

          <img style={{ 'width': '20%' }} src="./image/Ryuutama/Elements/Djinn.png" onClick={handleClose}/>

          <img style={{ 'width': '20%' }} src="./image/Ryuutama/Elements/Dryad.png" onClick={handleClose}/>

          <img style={{ 'width': '20%' }} src="./image/Ryuutama/Elements/Gnome.png" onClick={handleClose}/>

          <img style={{ 'width': '20%' }} src="./image/Ryuutama/Elements/Salamander.png" onClick={handleClose}/>

          <img style={{ 'width': '20%' }} src="./image/Ryuutama/Elements/Shade.png" onClick={handleClose}/>

          <img style={{ 'width': '20%' }} src="./image/Ryuutama/Elements/Undine.png" onClick={handleClose}/>

          <img style={{ 'width': '20%' }} src="./image/Ryuutama/Elements/Wisp.png" onClick={handleClose}/>


        </DialogContent_1.default>

        <DialogActions_1.default>
          <Button_1.default onClick={handleClose}>Cancel</Button_1.default>
          <Button_1.default onClick={handleClose}>Subscribe</Button_1.default>
        </DialogActions_1.default>


      </Dialog_1.default>


    </>);
}
exports.ElementalField = ElementalField;
//# sourceMappingURL=ElementalField.jsx.map