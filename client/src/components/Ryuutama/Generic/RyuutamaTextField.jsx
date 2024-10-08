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
exports.RyuutamaTextField = void 0;
var randomColor = require('randomcolor'); // import the script
var React = __importStar(require("react"));
var TextField_1 = __importDefault(require("@mui/material/TextField"));
//card likely needs to have flex to split it in a half
function RyuutamaTextField(props) {
    // <Grid container spacing={1} columns={10}>
    return (<>

      <TextField_1.default autoFocus margin="dense" id={props.name} onChange={props.onChange} value={props.value} name={props.name} label={props.label} type="text" fullWidth variant="standard"/>


    </>);
}
exports.RyuutamaTextField = RyuutamaTextField;
//# sourceMappingURL=RyuutamaTextField.jsx.map