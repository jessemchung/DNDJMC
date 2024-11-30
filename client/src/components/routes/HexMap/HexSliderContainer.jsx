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
var react_1 = require("react");
function HexSliderContainer() {
    var canvasRef = React.useRef(null);
    var _a = (0, react_1.useState)(0), hexHeight = _a[0], setHexHeight = _a[1];
    var ref = (0, react_1.useRef)(null);
    var _b = (0, react_1.useState)([[]]), hexGrid = _b[0], setHexGrid = _b[1];
    var _c = (0, react_1.useState)(0), gridWidth = _c[0], setGridWidth = _c[1];
    var _d = (0, react_1.useState)(0), gridHeight = _d[0], setGridHeight = _d[1];
    //i can use stop propgation if the top image is not transparent, then it knows not to dig deeper.
    return (<>
      <div className="slidecontainer">
        <input type="range" min="1" max="100" value="50" className="slider" id="myRange"/>
        <p>Width: <input id="width" type="text"/></p>
        <input type="range" min="1" max="100" value="50" className="slider" id="myRange"/>
        <p>Height: <input id="width" type="text"/></p>
        <input type="range" min="1" max="100" value="50" className="slider" id="myRange"/> <span>zoom value</span>
        <p>Zoom: <input id="width" type="text"/></p>

      </div>

    </>);
}
exports.default = HexSliderContainer;
//# sourceMappingURL=HexSliderContainer.jsx.map