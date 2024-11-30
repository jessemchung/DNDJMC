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
var react_1 = __importStar(require("react"));
var Styles_jsx_1 = require("./Styles.jsx");
var Menu_1 = __importDefault(require("./Menu"));
var MenuContext = function (_a) {
    var data = _a.data;
    var _b = (0, react_1.useState)(false), clicked = _b[0], setClicked = _b[1];
    var _c = (0, react_1.useState)({
        x: 0,
        y: 0,
    }), points = _c[0], setPoints = _c[1];
    (0, react_1.useEffect)(function () {
        var handleClick = function () { return setClicked(false); };
        window.addEventListener("click", handleClick);
        return function () {
            window.removeEventListener("click", handleClick);
        };
    }, []);
    return (<div>
      {data.map(function (item) { return (<div onContextMenu={function (e) {
                e.preventDefault();
                setClicked(true);
                setPoints({
                    x: e.pageX,
                    y: e.pageY,
                });
                console.log("Right Click", e.pageX, e.pageY);
            }}>
          <Menu_1.default id={item.id} title={item.title}/>
        </div>); })}
      {clicked && (<Styles_jsx_1.MenuContextContainer top={points.y} left={points.x}>
          <ul>
            <li>Edit</li>
            <li>Copy</li>
            <li>Delete</li>
          </ul>
        </Styles_jsx_1.MenuContextContainer>)}
    </div>);
};
exports.default = MenuContext;
//# sourceMappingURL=HexMenuContext.jsx.map