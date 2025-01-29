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
var React = __importStar(require("react"));
var Dialog_1 = __importDefault(require("@mui/material/Dialog"));
var DialogContent_1 = __importDefault(require("@mui/material/DialogContent"));
var DialogTitle_1 = __importDefault(require("@mui/material/DialogTitle"));
var UserContext_jsx_1 = __importDefault(require("../../UserContext.jsx"));
//this might need to be a drop down
var arrayOfBenefits = [
    './image/Ryuutama/Weather/Ryuutama_Cold.png',
    './image/Ryuutama/Weather/Ryuutama_Cold.png',
    './image/Ryuutama/Weather/Ryuutama_Cold.png',
    './image/Ryuutama/Weather/Ryuutama_Cold.png',
    './image/Ryuutama/Weather/Ryuutama_Cold.png',
    './image/Ryuutama/Weather/Ryuutama_Cold.png',
    './image/Ryuutama/Weather/Ryuutama_Cold.png',
    './image/Ryuutama/Weather/Ryuutama_Cold.png',
    './image/Ryuutama/Weather/Ryuutama_Cold.png',
    './image/Ryuutama/Weather/Ryuutama_Cold.png',
];
function PropsBarIndividualCard() {
    var _a = React.useState(''), age = _a[0], setAge = _a[1];
    var _b = (0, react_1.useState)(false), open = _b[0], setOpen = _b[1];
    var _c = (0, react_1.useContext)(UserContext_jsx_1.default), weather = _c.weather, setWeather = _c.setWeather;
    var handleChange = function (event) {
        setAge(event.target.value);
    };
    var handleClickOpen = function () {
        setOpen(true);
    };
    var handleClose = function (event) {
        if (event.target.src !== undefined) {
            setWeather(event.target.src);
        }
        setOpen(false);
    };
    return (<>

      <img style={{ 'width': '6%' }} src={weather} onClick={handleClickOpen}/>

      <Dialog_1.default open={open} onClose={handleClose}>
        <DialogTitle_1.default>Choose Weather</DialogTitle_1.default>
        <DialogContent_1.default>

          <img style={{ 'width': '20%' }} src="./image/Ryuutama/Weather/Ryuutama_Clear_Skies.png" onClick={handleClose}/>

          <img style={{ 'width': '20%' }} src="./image/Ryuutama/Weather/Ryuutama_Cold.png" onClick={handleClose}/>

          <img style={{ 'width': '20%' }} src="./image/Ryuutama/Weather/Ryuutama_Blizzard.png" onClick={handleClose}/>

          <img style={{ 'width': '20%' }} src="./image/Ryuutama/Weather/Ryuutama_Cloudy.png" onClick={handleClose}/>

          <img style={{ 'width': '20%' }} src="./image/Ryuutama/Weather/Ryuutama_Cold.png" onClick={handleClose}/>

          <img style={{ 'width': '20%' }} src="./image/Ryuutama/Weather/Ryuutama_Darkness.png" onClick={handleClose}/>

          <img style={{ 'width': '20%' }} src="./image/Ryuutama/Weather/Ryuutama_Deep_Fog.png" onClick={handleClose}/>

          <img style={{ 'width': '20%' }} src="./image/Ryuutama/Weather/Ryuutama_Fog.png" onClick={handleClose}/>

          <img style={{ 'width': '20%' }} src="./image/Ryuutama/Weather/Ryuutama_Heavy_Rain.png" onClick={handleClose}/>

          <img style={{ 'width': '20%' }} src="./image/Ryuutama/Weather/Ryuutama_Hot.png" onClick={handleClose}/>

          <img style={{ 'width': '20%' }} src="./image/Ryuutama/Weather/Ryuutama_Hurricane.png" onClick={handleClose}/>

          <img style={{ 'width': '20%' }} src="./image/Ryuutama/Weather/Ryuutama_Rain.png" onClick={handleClose}/>

          <img style={{ 'width': '20%' }} src="./image/Ryuutama/Weather/Ryuutama_Snow.png" onClick={handleClose}/>

          <img style={{ 'width': '20%' }} src="./image/Ryuutama/Weather/Ryuutama_Strong_Wind.png" onClick={handleClose}/>

          <img style={{ 'width': '20%' }} src="./image/Ryuutama/Weather/Ryuutama_Thunderstorm.png" onClick={handleClose}/>

        </DialogContent_1.default>
        {/* <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions> */}
      </Dialog_1.default>


    </>);
}
exports.default = PropsBarIndividualCard;
//# sourceMappingURL=Weather.jsx.map