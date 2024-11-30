"use strict";
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
var Paper_1 = __importDefault(require("@mui/material/Paper"));
var styles_1 = require("@mui/material/styles");
var Box_1 = __importDefault(require("@mui/material/Box"));
var Card_1 = __importDefault(require("@mui/material/Card"));
var CardActions_1 = __importDefault(require("@mui/material/CardActions"));
var CardContent_1 = __importDefault(require("@mui/material/CardContent"));
var Button_1 = __importDefault(require("@mui/material/Button"));
var Typography_1 = __importDefault(require("@mui/material/Typography"));
var TextField_1 = __importDefault(require("@mui/material/TextField"));
var Dialog_1 = __importDefault(require("@mui/material/Dialog"));
var DialogActions_1 = __importDefault(require("@mui/material/DialogActions"));
var DialogContent_1 = __importDefault(require("@mui/material/DialogContent"));
var DialogContentText_1 = __importDefault(require("@mui/material/DialogContentText"));
var DialogTitle_1 = __importDefault(require("@mui/material/DialogTitle"));
var Item = (0, styles_1.styled)(Paper_1.default)(function (_a) {
    var theme = _a.theme;
    return (__assign(__assign({}, theme.typography.body2), { padding: theme.spacing(1), textAlign: 'center', color: theme.palette.text.secondary }));
});
var bull = (<Box_1.default component="span" sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
    •
  </Box_1.default>);
// const Item = styled(Paper)(({ theme }) => ({
//   ...theme.typography.body2,
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
//   lineHeight: '10px',
// }));
function PropsBarIndividualCard() {
    var _a = (0, react_1.useState)('Title'), title = _a[0], setTitle = _a[1];
    var _b = (0, react_1.useState)(0), benefit = _b[0], setBenefit = _b[1];
    var _c = (0, react_1.useState)(false), open = _c[0], setOpen = _c[1];
    var handleClickOpen = function () {
        setOpen(true);
    };
    var handleClose = function () {
        setOpen(false);
    };
    return (<>

      <Card_1.default>
        <CardContent_1.default>
          <Typography_1.default variant="body1" component="div">
            {title}
          </Typography_1.default>

          <Typography_1.default variant="body2">
            Beneficial
          </Typography_1.default>
        </CardContent_1.default>
        <CardActions_1.default>
          <Button_1.default size="small" onClick={handleClickOpen}>Edit</Button_1.default>

          <Dialog_1.default open={open} onClose={handleClose}>
            <DialogTitle_1.default>Subscribe</DialogTitle_1.default>
            <DialogContent_1.default>
              <DialogContentText_1.default>
                To subscribe to this website, please enter your email address here. We
                will send updates occasionally.
              </DialogContentText_1.default>
              <TextField_1.default autoFocus margin="dense" id="name" label="Email Address" type="email" fullWidth variant="standard"/>

              <Button_1.default>

                fix
              </Button_1.default>
            </DialogContent_1.default>
            <DialogActions_1.default>
              <Button_1.default onClick={handleClose}>Cancel</Button_1.default>
              <Button_1.default onClick={handleClose}>Subscribe</Button_1.default>
            </DialogActions_1.default>
          </Dialog_1.default>


        </CardActions_1.default>
      </Card_1.default>



    </>);
}
exports.default = PropsBarIndividualCard;
//# sourceMappingURL=PropsBarDialogue.jsx.map