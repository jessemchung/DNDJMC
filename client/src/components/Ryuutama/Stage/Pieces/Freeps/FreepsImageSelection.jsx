"use strict";
//purpose, to add a creep to the menu
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
var react_1 = require("react");
var randomColor = require('randomcolor'); // import the script
var React = __importStar(require("react"));
var Button_1 = __importDefault(require("@mui/material/Button"));
var Dialog_1 = __importDefault(require("@mui/material/Dialog"));
var DialogActions_1 = __importDefault(require("@mui/material/DialogActions"));
var DialogContent_1 = __importDefault(require("@mui/material/DialogContent"));
var DialogContentText_1 = __importDefault(require("@mui/material/DialogContentText"));
var DialogTitle_1 = __importDefault(require("@mui/material/DialogTitle"));
var _Types_jsx_1 = require("../../ImageDecoration/_Types.jsx");
var FreepsImageSelection = function (props) {
    var _a = (0, react_1.useState)(props.freepInfo.healthyImage), selectImage = _a[0], setSelectImage = _a[1];
    var _b = (0, react_1.useState)(false), openUploadDialogue = _b[0], setOpenUploadDialogue = _b[1];
    var submitImageUrl = function () {
        props.freepInfo.healthyImage = selectImage;
        props.setFreepInfo(__assign({}, props.freepInfo));
        props.setOpen(false);
    };
    var chooseImage = function (chosenImage) {
        setSelectImage(chosenImage);
    };
    var closeImageDialog = function () {
        props.setOpen(false);
    };
    // open upload dialogue
    var toggleUploadDialogue = function (toggle) {
        setOpenUploadDialogue(toggle);
    };
    return (<Dialog_1.default open={props.open} onClose={closeImageDialog}>
      <DialogTitle_1.default>Add Creep</DialogTitle_1.default>
      <DialogContent_1.default>
        <DialogContentText_1.default>
          Select A Default Image or upload your own or enter the url of an image to use.  Cropper coming eventually.
        </DialogContentText_1.default>
        <img className={"box ".concat((selectImage === _Types_jsx_1.SampleCharacterOptions.Bradford) ? 'highlight' : '')} style={{ 'width': '20%' }} src={_Types_jsx_1.SampleCharacterOptions.Bradford} onClick={function () { return chooseImage(_Types_jsx_1.SampleCharacterOptions.Bradford); }}/>
        <img className={"box ".concat((selectImage === _Types_jsx_1.SampleCharacterOptions.Mariner) ? 'highlight' : '')} style={{ 'width': '20%' }} src={_Types_jsx_1.SampleCharacterOptions.Mariner} onClick={function () { return chooseImage(_Types_jsx_1.SampleCharacterOptions.Mariner); }}/>
        <img className={"box ".concat((selectImage === _Types_jsx_1.SampleCharacterOptions.Tendi) ? 'highlight' : '')} style={{ 'width': '20%' }} src={_Types_jsx_1.SampleCharacterOptions.Tendi} onClick={function () { return chooseImage(_Types_jsx_1.SampleCharacterOptions.Tendi); }}/>
        <img className={"box ".concat((selectImage === _Types_jsx_1.SampleCharacterOptions.Sam) ? 'highlight' : '')} style={{ 'width': '20%' }} src={_Types_jsx_1.SampleCharacterOptions.Sam} onClick={function () { return chooseImage(_Types_jsx_1.SampleCharacterOptions.Sam); }}/>

      </DialogContent_1.default>
      <DialogActions_1.default>
        <Button_1.default onClick={closeImageDialog}>Cancel</Button_1.default>
        <Button_1.default onClick={function () { return toggleUploadDialogue(true); }}>Upload</Button_1.default>
        <Button_1.default onClick={submitImageUrl}>Select</Button_1.default>
      </DialogActions_1.default>
    </Dialog_1.default>);
};
exports.default = FreepsImageSelection;
//# sourceMappingURL=FreepsImageSelection.jsx.map