"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElementalField = void 0;
var react_1 = require("react");
var React = require("react");
var styles_1 = require("@mui/material/styles");
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
    var _a = React.useState(''), age = _a[0], setAge = _a[1];
    var _b = (0, react_1.useState)(false), open = _b[0], setOpen = _b[1];
    var handleChange = function (event) {
        setAge(event.target.value);
    };
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
      <div style={{ backgroundColor: 'red',
            height: '75%', borderRadius: '50%', width: '800%', display: 'flex',
            alignItems: 'center',
            border: '1px black solid', }}>

        <div style={{ backgroundColor: 'blue', height: '80%', borderRadius: '50%', width: '80%', display: 'flex', alignItems: 'center', border: '1px black solid', }}>

          <div style={{ backgroundColor: 'yellow', padding: '5px', height: '50%', borderRadius: '50%', width: '65%', border: '1px black solid' }}>

          </div>

          </div>

        </div>

        {/* <img style={{ 'width': '1000%', zIndex: '5' }} src={prop.terrainType} onClick={handleClickOpen} />

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Choose Color</DialogTitle>
        <DialogContent>

          <img style={{ 'width': '30%' }} src="./image/Ryuutama/Terrain/Ryuutama_Alpine.png" onClick={handleClose} />

          <img style={{ 'width': '30%' }} src="./image/Ryuutama/Terrain/Ryuutama_Deep_Forest.png" onClick={handleClose} />

          <img style={{ 'width': '30%' }} src="./image/Ryuutama/Terrain/Ryuutama_Desert.png" onClick={handleClose} />

          <img style={{ 'width': '30%' }} src="./image/Ryuutama/Terrain/Ryuutama_Grassland.png" onClick={handleClose} />

          <img style={{ 'width': '30%' }} src="./image/Ryuutama/Terrain/Ryuutama_Highlands.png" onClick={handleClose} />

          <img style={{ 'width': '30%' }} src="./image/Ryuutama/Terrain/Ryuutama_Jungle.png" onClick={handleClose} />

          <img style={{ 'width': '30%' }} src="./image/Ryuutama/Terrain/Ryuutama_Mountain.png" onClick={handleClose} />

          <img style={{ 'width': '30%' }} src="./image/Ryuutama/Terrain/Ryuutama_Rocky_Terrain.png" onClick={handleClose} />

          <img style={{ 'width': '30%' }} src="./image/Ryuutama/Terrain/Ryuutama_Swamp.png" onClick={handleClose} />

          <img style={{ 'width': '30%' }} src="./image/Ryuutama/Terrain/Ryuutama_Wasteland.png" onClick={handleClose} />

          <img style={{ 'width': '30%' }} src="./image/Ryuutama/Terrain/Ryuutama_Woodland.png" onClick={handleClose} />

          <img style={{ 'width': '30%' }} src="./image/Ryuutama/Terrain/Ryuutama_Village.png" onClick={handleClose} />

          <img style={{ 'width': '30%' }} src="./image/Ryuutama/Terrain/Ryuutama_Town.png" onClick={handleClose} />

          <img style={{ 'width': '30%' }} src="./image/Ryuutama/Terrain/Ryuutama_City.png" onClick={handleClose} />

          <img style={{ 'width': '30%' }} src="./image/Ryuutama/Terrain/Ryuutama_Large_City.png" onClick={handleClose} />

        </DialogContent>

      </Dialog>
 */}

      </>);
}
exports.ElementalField = ElementalField;
//# sourceMappingURL=ElementalField.jsx.map