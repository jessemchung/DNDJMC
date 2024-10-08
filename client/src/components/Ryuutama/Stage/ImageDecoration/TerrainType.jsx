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
exports.TerrainType = void 0;
var react_1 = require("react");
var React = __importStar(require("react"));
var styles_1 = require("@mui/material/styles");
var Dialog_1 = __importDefault(require("@mui/material/Dialog"));
var DialogContent_1 = __importDefault(require("@mui/material/DialogContent"));
var DialogTitle_1 = __importDefault(require("@mui/material/DialogTitle"));
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
function TerrainType(prop) {
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
            prop.setTerrainType(event.target.src);
        }
        setOpen(false);
    };
    return (<>

      <img style={{ 'height': '90%', 'width': '10%' }} src={prop.terrainType} onClick={handleClickOpen}/>

      <Dialog_1.default open={open} onClose={handleClose}>
        <DialogTitle_1.default>Choose Weather</DialogTitle_1.default>
        <DialogContent_1.default>

          <img style={{ 'width': '30%' }} src="./image/Ryuutama/Terrain/Ryuutama_Alpine.png" onClick={handleClose}/>

          <img style={{ 'width': '30%' }} src="./image/Ryuutama/Terrain/Ryuutama_Deep_Forest.png" onClick={handleClose}/>

          <img style={{ 'width': '30%' }} src="./image/Ryuutama/Terrain/Ryuutama_Desert.png" onClick={handleClose}/>

          <img style={{ 'width': '30%' }} src="./image/Ryuutama/Terrain/Ryuutama_Grassland.png" onClick={handleClose}/>

          <img style={{ 'width': '30%' }} src="./image/Ryuutama/Terrain/Ryuutama_Highlands.png" onClick={handleClose}/>

          <img style={{ 'width': '30%' }} src="./image/Ryuutama/Terrain/Ryuutama_Jungle.png" onClick={handleClose}/>

          <img style={{ 'width': '30%' }} src="./image/Ryuutama/Terrain/Ryuutama_Mountain.png" onClick={handleClose}/>

          <img style={{ 'width': '30%' }} src="./image/Ryuutama/Terrain/Ryuutama_Rocky_Terrain.png" onClick={handleClose}/>

          <img style={{ 'width': '30%' }} src="./image/Ryuutama/Terrain/Ryuutama_Swamp.png" onClick={handleClose}/>

          <img style={{ 'width': '30%' }} src="./image/Ryuutama/Terrain/Ryuutama_Wasteland.png" onClick={handleClose}/>

          <img style={{ 'width': '30%' }} src="./image/Ryuutama/Terrain/Ryuutama_Woodland.png" onClick={handleClose}/>

          <img style={{ 'width': '30%' }} src="./image/Ryuutama/Terrain/Ryuutama_Village.png" onClick={handleClose}/>

          <img style={{ 'width': '30%' }} src="./image/Ryuutama/Terrain/Ryuutama_Town.png" onClick={handleClose}/>

          <img style={{ 'width': '30%' }} src="./image/Ryuutama/Terrain/Ryuutama_City.png" onClick={handleClose}/>

          <img style={{ 'width': '30%' }} src="./image/Ryuutama/Terrain/Ryuutama_Large_City.png" onClick={handleClose}/>

        </DialogContent_1.default>

      </Dialog_1.default>


    </>);
}
exports.TerrainType = TerrainType;
//# sourceMappingURL=TerrainType.jsx.map