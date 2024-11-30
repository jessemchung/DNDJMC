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
var RightClickMenu = function () {
    var _a = (0, react_1.useState)(false), menuVisible = _a[0], setMenuVisible = _a[1];
    var _b = (0, react_1.useState)({ x: 0, y: 0 }), menuPosition = _b[0], setMenuPosition = _b[1];
    // Handle right-click event
    var handleRightClick = function (event) {
        event.preventDefault(); // Prevent the default context menu
        setMenuPosition({ x: event.pageX, y: event.pageY });
        setMenuVisible(true);
    };
    // Close the menu when clicking anywhere else
    var handleClickOutside = function () {
        setMenuVisible(false);
    };
    return (<div onClick={handleClickOutside}>
      <button onContextMenu={handleRightClick} style={{ margin: "50px" }}>
        Right Click Me
      </button>

      {menuVisible && (<ul style={{
                position: "absolute",
                top: "".concat(menuPosition.y, "px"),
                left: "".concat(menuPosition.x, "px"),
                backgroundColor: "#fff",
                border: "1px solid #ccc",
                padding: "10px",
                listStyle: "none",
                zIndex: 1000,
            }}>
          <li style={{ padding: "5px 10px", cursor: "pointer" }}>Option 1</li>
          <li style={{ padding: "5px 10px", cursor: "pointer" }}>Option 2</li>
          <li style={{ padding: "5px 10px", cursor: "pointer" }}>Option 3</li>
        </ul>)}
    </div>);
};
exports.default = RightClickMenu;
//# sourceMappingURL=RightClickMenu.jsx.map