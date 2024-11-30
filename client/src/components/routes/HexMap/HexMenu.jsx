"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Styles_jsx_1 = require("./Styles.jsx");
var HexMenu = function (_a) {
    var title = _a.title, key = _a.key;
    return (<>
      <Styles_jsx_1.MenuContextContainer key={key}>{title}</Styles_jsx_1.MenuContextContainer>
    </>);
};
exports.default = HexMenu;
//# sourceMappingURL=HexMenu.jsx.map