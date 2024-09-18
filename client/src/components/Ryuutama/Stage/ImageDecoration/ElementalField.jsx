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
var UserContext_jsx_1 = require("../../UserContext.jsx");
//add a color enum for all my things as well
var ElementalColors;
(function (ElementalColors) {
    ElementalColors["Aura"] = "yellow";
    ElementalColors["Djinn"] = "cyan";
    ElementalColors["Dryad"] = "green";
    ElementalColors["Gnome"] = "brown";
    ElementalColors["Salamander"] = "red";
    ElementalColors["Shade"] = "black";
    ElementalColors["Undine"] = "blue";
    ElementalColors["Wisp"] = "white";
})(ElementalColors || (ElementalColors = {}));
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
//! Jesse problem, so basically on clicking outside the box and closing the window, should reset all values in model to white
function ElementalField(prop) {
    var _a = (0, react_1.useState)(false), open = _a[0], setOpen = _a[1];
    var _b = (0, react_1.useContext)(UserContext_jsx_1.default), first = _b.first, setFirst = _b.setFirst, second = _b.second, setSecond = _b.setSecond, third = _b.third, setThird = _b.setThird;
    var _c = (0, react_1.useState)(first), modelFirst = _c[0], setModelFirst = _c[1];
    var _d = (0, react_1.useState)(second), modelSecond = _d[0], setModelSecond = _d[1];
    var _e = (0, react_1.useState)(third), modelThird = _e[0], setModelThird = _e[1];
    // const handleChange = (event: SelectChangeEvent) => {
    //   setAge(event.target.value as string);
    // };
    var handleClickOpen = function () {
        setOpen(true);
    };
    var handleClose = function (event) {
        setOpen(false);
    };
    var handleFinish = function (event) {
        var newFirst = event.currentTarget.id;
        if (typeof (event.currentTarget.id) === 'string') {
            setThird(modelThird);
            setSecond(modelSecond);
            setFirst(modelFirst);
        }
    };
    var handleElementalChange = function (event) {
        var newFirst = event.currentTarget.id;
        if (typeof (event.currentTarget.id) === 'string') {
            setModelThird(modelSecond);
            setModelSecond(modelFirst);
            setModelFirst(ElementalColors[newFirst]);
        }
    };
    return (<>
      <div style={{
            backgroundColor: "".concat(third),
            height: '75%', borderRadius: '50%', width: '600%', display: 'flex',
            alignItems: 'center',
            border: '1px black solid',
        }} onClick={handleClickOpen}>
        <div style={{ backgroundColor: "".concat(second), height: '80%', borderRadius: '50%', width: '80%', display: 'flex', alignItems: 'center', border: '1px black solid', }}>
          <div style={{ backgroundColor: "".concat(first), padding: '5px', height: '50%', borderRadius: '50%', width: '65%', border: '1px black solid' }}></div>
        </div>
      </div>


      <Dialog_1.default open={open} onClose={handleClose}>
        <DialogTitle_1.default>Choose Color</DialogTitle_1.default>
        <DialogContent_1.default>

          <div style={{
            backgroundColor: "".concat(modelThird),
            height: '80px', borderRadius: '50%', width: '20%', display: 'flex',
            alignItems: 'center',
            border: '1px black solid',
            textAlign: 'center',
            margin: '0 auto',
        }} onClick={handleClickOpen}>

            <div style={{ backgroundColor: "".concat(modelSecond), height: '80%', borderRadius: '50%', width: '80%', display: 'flex', alignItems: 'center', border: '1px black solid', }}>

              <div style={{ backgroundColor: "".concat(modelFirst), padding: '5px', height: '50%', borderRadius: '50%', width: '65%', border: '1px black solid' }}>

              </div>

            </div>
          </div>

          <img id={'Aura'} style={{ 'width': '20%' }} src="./image/Ryuutama/Elements/Aura.png" onClick={handleElementalChange}/>

          <img id={'Djinn'} style={{ 'width': '20%' }} src="./image/Ryuutama/Elements/Djinn.png" onClick={handleElementalChange}/>

          <img id={'Dryad'} style={{ 'width': '20%' }} src="./image/Ryuutama/Elements/Dryad.png" onClick={handleElementalChange}/>

          <img id={'Gnome'} style={{ 'width': '20%' }} src="./image/Ryuutama/Elements/Gnome.png" onClick={handleElementalChange}/>

          <img id={'Salamander'} style={{ 'width': '20%' }} src="./image/Ryuutama/Elements/Salamander.png" onClick={handleElementalChange}/>

          <img id={'Shade'} style={{ 'width': '20%' }} src="./image/Ryuutama/Elements/Shade.png" onClick={handleElementalChange}/>

          <img id={'Undine'} style={{ 'width': '20%' }} src="./image/Ryuutama/Elements/Undine.png" onClick={handleElementalChange}/>

          <img id={'Wisp'} style={{ 'width': '20%' }} src="./image/Ryuutama/Elements/Wisp.png" onClick={handleElementalChange}/>

        </DialogContent_1.default>

        <DialogActions_1.default>
          <Button_1.default onClick={handleFinish}>Finish</Button_1.default>
        </DialogActions_1.default>

      </Dialog_1.default>


    </>);
}
exports.ElementalField = ElementalField;
//# sourceMappingURL=ElementalField.jsx.map