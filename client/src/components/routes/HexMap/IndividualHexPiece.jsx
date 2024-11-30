"use strict";
// Idea, individual work
// each one should possibly have multiple stacks of the same piece and possibly 
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_1 = require("react");
var _Types_jsx_1 = require("./_Types.jsx");
;
function IndividualHexPiece(props) {
    var _a, _b, _c, _d, _e;
    var contextRef = (0, react_1.useRef)(null);
    var expandedContextRef = (0, react_1.useRef)(null);
    //I think I need to add the hexInformation here so it can be updated more easily?  I think?
    var _f = (0, react_1.useState)(false), menuVisible = _f[0], setMenuVisible = _f[1];
    var _g = (0, react_1.useState)(false), expandedMenuPosition = _g[0], setExpandedMenuPosition = _g[1];
    var _h = (0, react_1.useState)({ x: 0, y: 0 }), menuPosition = _h[0], setMenuPosition = _h[1];
    // Handle clicks on the canvas
    var handleCanvasClick = function (e) {
        var img = document.getElementById('my-image');
        var canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        canvas.getContext('2d').drawImage(img, 0, 0, img.width, img.height);
        var ctx = canvas.getContext('2d');
        if (ctx) {
            ctx.drawImage(img, 0, 0, img.width, img.height);
            // Use nativeEvent to access offsetX and offsetY
            var _a = e.nativeEvent, offsetX = _a.offsetX, offsetY = _a.offsetY;
            var pixelData = ctx.getImageData(offsetX, offsetY, 1, 1).data;
            if (pixelData[3] === 0) {
                //if transparent go deeper.  Else, hmmmm.  What about trees?  
            }
            else {
                e.stopPropagation();
            }
        }
    };
    function handleClickOutside(event) {
        if (contextRef.current && !contextRef.current.contains(event.target) && (expandedContextRef.current === null || !expandedContextRef.current.contains(event.target))) {
            setMenuVisible(false);
            setExpandedMenuPosition(false);
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }
    function convertRemToPixels(remValue) {
        return remValue * parseFloat(getComputedStyle(document.documentElement).fontSize);
    }
    function handleRightClickHex(event) {
        event.preventDefault(); // Prevent the default context menu
        document.addEventListener("mousedown", handleClickOutside);
        var menuWidth = convertRemToPixels(20); // Assuming the width of the context menu
        var menuHeight = convertRemToPixels(20); // Assuming the height of the context menu
        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;
        var posX = event.pageX;
        var posY = event.pageY;
        if (posX + menuWidth > windowWidth) {
            posX = windowWidth - menuWidth;
        }
        // Adjust position if the menu overflows the bottom edge of the screen
        if (posY + menuHeight > windowHeight) {
            posY = windowHeight - menuHeight;
        }
        setMenuPosition({ x: posX, y: posY });
        setMenuVisible(true);
    }
    ;
    function deleteHex() {
    }
    function checkIfLeavingAdvancedContext(event) {
        console.log("hello?");
        if (expandedContextRef.current && contextRef.current) {
            setExpandedMenuPosition(false);
        }
    }
    var adjustAppearance = function (item) {
        // not properly offsetting the top
        var test = false;
        if (props.hexInformation.terrain[0] === _Types_jsx_1.BaseTileEnum.None) {
            test = true;
        }
        props.hexInformation.terrain[props.hexInformation.terrain.length - 1] = _Types_jsx_1.BaseTileEnum[item];
        if (test) {
            props.addSurroundingGhostHexes(props.hexGrid, props.indexArray[0], props.indexArray[1]);
        }
        props.setHexGrid(__spreadArray([], props.hexGrid, true));
    };
    var addStack = function (item) {
        // not properly offsetting the top
        props.hexInformation.terrain.push(_Types_jsx_1.BaseFullTileEnum[item]);
        console.log(props.hexInformation, "something weird?");
        props.setHexGrid(__spreadArray([], props.hexGrid, true));
    };
    var BaseTileOptions = Object.keys(_Types_jsx_1.BaseTileEnum);
    //! this add a second arrow context menu for additional stacking and unstacking and deleting make it have a scroll wheel as well
    var BaseTileList = BaseTileOptions.map(function (item) {
        return (<li key={"basetile" + item} style={{ padding: "5px 10px", cursor: "pointer" }} onClick={function () { adjustAppearance(item); }}>{item}</li>);
    });
    var FullTileOptions = Object.keys(_Types_jsx_1.BaseFullTileEnum);
    var FullTileList = FullTileOptions.map(function (item) {
        return (<li key={"fulltile " + item} style={{ padding: "5px 10px", cursor: "pointer" }} onClick={function () { addStack(item); }}>{item}</li>);
    });
    BaseTileList.push(<li key={"delete"} style={{ padding: "5px 10px", cursor: "pointer" }} onClick={function () { deleteHex(); }}>Delete</li>);
    var x = 1;
    var calculated = props.hexHeight * x;
    var stackedTerrain = [];
    if (props.hexInformation !== null && props.hexInformation.terrain[1]) {
        for (var i = 1; i < props.hexInformation.terrain.length; i++) {
            stackedTerrain.push(<img key={"stack" + i} id="my-image1" className={"hex-top-floors"} style={{ marginLeft: "1.5px", marginTop: "-".concat(calculated + (calculated * (i - 1) / 4) + 1.5, "px") }} src={props.hexInformation.terrain[i]}/>);
        }
    }
    return (<span>
      <span style={{ position: "relative" }} title={props.indexArray[0] + ", " + props.indexArray[1]}>
        <img id="my-image" className={"hex-image ".concat(props.hexInformation === null ? "transparent" : "", " ").concat(((_b = (_a = props.hexInformation) === null || _a === void 0 ? void 0 : _a.terrain) === null || _b === void 0 ? void 0 : _b[0]) === _Types_jsx_1.BaseTileEnum.None ? "semi-transparent" : "")} onContextMenu={function (e) {
            e.preventDefault(); // prevent the default behaviour when right clicked
            handleRightClickHex(e);
        }} onClick={handleCanvasClick} src={((_c = props.hexInformation) === null || _c === void 0 ? void 0 : _c.terrain) ? (_d = props.hexInformation) === null || _d === void 0 ? void 0 : _d.terrain[0] : _Types_jsx_1.BaseTileEnum.Stone}/>

        {stackedTerrain}
      </span>

      {menuVisible && ((_e = props.hexInformation) === null || _e === void 0 ? void 0 : _e.terrain) !== null && (<ul ref={contextRef} style={{
                position: "absolute",
                top: "".concat(menuPosition.y, "px"),
                left: "".concat(menuPosition.x, "px"),
                backgroundColor: "#fff",
                border: "1px solid #ccc",
                padding: "10px",
                listStyle: "none",
                zIndex: 1000,
            }}>
          <li onClick={function () { return setExpandedMenuPosition(true); }} style={{ padding: "5px 10px", cursor: "pointer" }}>Add Stack</li>
          {BaseTileList}

        </ul>)}

      {expandedMenuPosition && (<ul onMouseLeave={function (event) { return checkIfLeavingAdvancedContext(event); }} ref={expandedContextRef} style={{
                position: "absolute",
                top: "".concat(menuPosition.y, "px"),
                left: "".concat(menuPosition.x + contextRef.current.clientWidth, "px"),
                backgroundColor: "#fff",
                border: "1px solid #ccc",
                padding: "10px",
                listStyle: "none",
                zIndex: 1001,
            }}>
          {FullTileList}
        </ul>)}

    </span>);
}
exports.default = IndividualHexPiece;
var styles = {
    container: {
        margin: '0 auto',
    },
};
// suspicicion.  I need to check whenever it leaves if it is entering another component
//# sourceMappingURL=IndividualHexPiece.jsx.map