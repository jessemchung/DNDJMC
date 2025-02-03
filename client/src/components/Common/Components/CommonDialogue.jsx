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
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var material_1 = require("@mui/material");
var CommonDialog = function (_a) {
    var open = _a.open, onClose = _a.onClose, title = _a.title, _b = _a.textFields, textFields = _b === void 0 ? [] : _b, _c = _a.selectFields, selectFields = _c === void 0 ? [] : _c, _d = _a.buttons, buttons = _d === void 0 ? [] : _d;
    return (<material_1.Dialog open={open} onClose={onClose}>
      <material_1.DialogTitle>{title}</material_1.DialogTitle>
      <material_1.DialogContent>
        {/* Render Text Fields */}
        {textFields.map(function (field, index) { return (<material_1.TextField key={index} label={field.label} value={field.value} onChange={field.onChange} fullWidth margin="normal" variant="outlined" multiline={field.multiline}/>); })}

        {/* Render Select Fields */}
        {selectFields.map(function (field, index) { return (<material_1.Select key={index} value={field.value} onChange={field.onChange} fullWidth margin="none" variant="outlined" label={field.label}>
            {field.options.map(function (option, optionIndex) { return (<material_1.MenuItem key={optionIndex} value={option.value}>
                {option.label}
              </material_1.MenuItem>); })}
          </material_1.Select>); })}
      </material_1.DialogContent>
      <material_1.DialogActions>
        {/* Render Buttons */}
        {buttons.map(function (button, index) { return (<material_1.Button key={index} onClick={button.onClick} color={button.color || 'primary'}>
            {button.label}
          </material_1.Button>); })}
      </material_1.DialogActions>
    </material_1.Dialog>);
};
exports.default = CommonDialog;
//# sourceMappingURL=CommonDialogue.jsx.map