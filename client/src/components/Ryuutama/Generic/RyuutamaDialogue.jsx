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
exports.RyuutamaDialogue = void 0;
var randomColor = require('randomcolor'); // import the script
var React = __importStar(require("react"));
var Dialog_1 = __importDefault(require("@mui/material/Dialog"));
var DialogActions_1 = __importDefault(require("@mui/material/DialogActions"));
var DialogContent_1 = __importDefault(require("@mui/material/DialogContent"));
var DialogContentText_1 = __importDefault(require("@mui/material/DialogContentText"));
var DialogTitle_1 = __importDefault(require("@mui/material/DialogTitle"));
var RyuutamaTextField_jsx_1 = require("./RyuutamaTextField.jsx");
var RyuutamaDialogue = function (prop) {
    var open = prop.open, textFields = prop.textFields, handleClose = prop.handleClose, title = prop.title, body = prop.body, buttons = prop.buttons;
    //this requires certain options
    //needs a handleclose passed through
    //might need an option to determine if this is a form
    //will require an array that contains all of the textfields needed to populate
    var texts = null;
    //will need a map function to get all of the textfields working
    if (textFields !== undefined) {
        texts = textFields.map(function (eachText) {
            var name = eachText.name, value = eachText.value, onChange = eachText.onChange, type = eachText.type, label = eachText.label;
            <RyuutamaTextField_jsx_1.RyuutamaTextField name={name} label={label} type={type} onChange={onChange} value={value}/>;
        });
    }
    return (<>

          <Dialog_1.default open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
            <DialogTitle_1.default id="alert-dialog-title">
              {title}
            </DialogTitle_1.default>
            <DialogContent_1.default>
              <DialogContentText_1.default id="alert-dialog-description">
                {body}
              </DialogContentText_1.default>
              <DialogContent_1.default>{prop.children}</DialogContent_1.default>

            </DialogContent_1.default>
            <DialogActions_1.default>
              {buttons}
            </DialogActions_1.default>
          </Dialog_1.default>

        </>);
};
exports.RyuutamaDialogue = RyuutamaDialogue;
//# sourceMappingURL=RyuutamaDialogue.jsx.map