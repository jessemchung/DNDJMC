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
var randomColor = require('randomcolor'); // import the script
var React = __importStar(require("react"));
var Card_1 = __importDefault(require("@mui/material/Card"));
var CardContent_1 = __importDefault(require("@mui/material/CardContent"));
var Typography_1 = __importDefault(require("@mui/material/Typography"));
//card likely needs to have flex to split it in a half
function FreepsSampleCard() {
    return (<>

      <Card_1.default sx={{ display: 'flex' }}>
        <CardContent_1.default>
          <Typography_1.default variant="body1" component="div">
            Sample Card
          </Typography_1.default>
          <Typography_1.default variant="body2" color="error">
            details
          </Typography_1.default>
        </CardContent_1.default>


        <CardContent_1.default>
          <Typography_1.default variant="body1" component="div">
            Sample Card
          </Typography_1.default>

          <Typography_1.default variant="body2" color="error">
            details
          </Typography_1.default>
        </CardContent_1.default>



      </Card_1.default>


    </>);
}
exports.default = FreepsSampleCard;
//# sourceMappingURL=FreepsSampleCard.jsx.map