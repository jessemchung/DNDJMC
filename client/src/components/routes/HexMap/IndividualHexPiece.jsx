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
var material_1 = require("@mui/material");
var CommonFunctions_jsx_1 = require("./CommonFunctions.jsx");
;
function IndividualHexPiece(props) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    var contextRef = (0, react_1.useRef)(null);
    // additional popup that happens when selecting stack hexes
    var expandedContextRef = (0, react_1.useRef)(null);
    //does this actually want to be a form like this though?
    var _j = (0, react_1.useState)(), form = _j[0], setForm = _j[1];
    var _k = (0, react_1.useState)(false), menuVisible = _k[0], setMenuVisible = _k[1];
    var _l = (0, react_1.useState)(false), expandedMenuPosition = _l[0], setExpandedMenuPosition = _l[1];
    var _m = (0, react_1.useState)({ x: 0, y: 0 }), menuPosition = _m[0], setMenuPosition = _m[1];
    var _o = (0, react_1.useState)(false), open = _o[0], setOpen = _o[1];
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
            setOpen(true);
        }
    };
    function handleClickOutside(event) {
        if (contextRef.current && !contextRef.current.contains(event.target) && (expandedContextRef.current === null || !expandedContextRef.current.contains(event.target))) {
            setMenuVisible(false);
            setExpandedMenuPosition(false);
            document.removeEventListener("mousedown", handleClickOutside);
        }
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
    // Functions that handle adjusting the appearance of the hexes
    function updateHexDialogueSubmit(terrain, index) {
        console.log("purpose is to update the form.  Maybe not needed quite yet?  Hard to say");
    }
    function convertRemToPixels(remValue) {
        return remValue * parseFloat(getComputedStyle(document.documentElement).fontSize);
    }
    function deleteHex() {
        props.hexInformation.terrain.pop();
        props.setHexGrid(__spreadArray([], props.hexGrid, true));
    }
    function checkIfLeavingAdvancedContext(event) {
        if (expandedContextRef.current && contextRef.current) {
            setExpandedMenuPosition(false);
        }
    }
    function addCharacter(event) {
        // I think a person quality should be added
        // this should just be basic for now.  With the current hero character
        // there can probably be only one hero?  I don't know.  Clicking the hero should allow moving it
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
        props.hexInformation.terrain.push(_Types_jsx_1.BaseFullTileEnum[item]);
        props.setHexGrid(__spreadArray([], props.hexGrid, true));
    };
    var BaseTileOptions = Object.keys(_Types_jsx_1.BaseTileEnum);
    //! this add a second arrow context menu for additional stacking and unstacking and deleting make it have a scroll wheel as well
    var BaseTileList = BaseTileOptions.map(function (item) {
        return (<li key={"basetile" + item} style={{ padding: "5px 10px", cursor: "pointer" }} onClick={function () { adjustAppearance(item); }}>{item}</li>);
    });
    function handleClose() {
        setOpen(false);
    }
    //! Currently being moved to a common function
    var generateAllTileOptions = function () {
        return Object.entries(_Types_jsx_1.BaseTileEnum)
            .filter(function (_a) {
            var key = _a[0], value = _a[1];
            return isNaN(Number(key));
        }) // Filter out reverse mappings (numeric keys)
            .map(function (_a) {
            var key = _a[0], value = _a[1];
            return (<material_1.MenuItem key={key} value={value}>
        {key}
      </material_1.MenuItem>);
        });
    };
    var FullTileOptions = Object.keys(_Types_jsx_1.BaseFullTileEnum);
    var FullTileList = FullTileOptions.map(function (item) {
        return (<li key={"fulltile " + item} style={{ padding: "5px 10px", cursor: "pointer" }} onClick={function () { addStack(item); }}>{item}</li>);
    });
    // This is to add the permanent options like deleting a hex and stuff
    BaseTileList.push(<>
      <li key={"hex-delete"} style={{ padding: "5px 10px", cursor: "pointer" }} onClick={function () { deleteHex(); }}>Delete</li>
      <li key={"hex-add-hero"} style={{ padding: "5px 10px", cursor: "pointer" }} onClick={function () { deleteHex(); }}>Add Hero</li>
      <li key={"hex-add-toppers"} style={{ padding: "5px 10px", cursor: "pointer" }} onClick={function () { deleteHex(); }}>Add Toppers</li>
    </>);
    var x = 1;
    var calculated = props.hexHeight * x;
    var stackedTerrain = [];
    var counter = 1;
    if (props.hexInformation !== null && props.hexInformation.terrain[1]) {
        for (counter = 1; counter < props.hexInformation.terrain.length; counter++) {
            stackedTerrain.push(<img key={"stack" + counter} id="my-image1" className={"hex-top-floors"} style={{ marginLeft: "1.5px", marginTop: "-".concat(calculated / 5 + (calculated * (counter - 1) / 4) + 1.5, "px") }} src={props.hexInformation.terrain[counter]}/>);
        }
    }
    // handle heros marginTop 25% can set it to middle if needed but using flying characters, maybe not needed?
    var character;
    if ((_a = props.characters) === null || _a === void 0 ? void 0 : _a.character) { // there are characters and we can try to do something
        character = (<img key={"character-marker"} className={"hex-character"} style={{ marginLeft: "25%", width: calculated / 3 + "px", height: "auto" }} src={"./image/map/shipPink_manned.png"}/>);
    }
    return (<>
      <material_1.Dialog open={open} onClose={handleClose}>
        <material_1.DialogTitle>Edit Hex</material_1.DialogTitle>
        <material_1.DialogContent>
          <material_1.Grid2 container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

  <material_1.Grid2 size={12}>
      <material_1.Grid2 container flexDirection={"column"} rowSpacing={0} columnSpacing={0}>
       <div style={{ display: "flex" }}>
        <img src={_Types_jsx_1.BaseFullTileEnum['Full Autumn']} alt="Image 1" style={{
            width: '100%',
            height: 'auto',
            objectFit: 'contain',
        }}/>


        <material_1.InputLabel id="demo-simple-select-label">Tile Type</material_1.InputLabel>
          <material_1.Select fullWidth id="demo-simple-select" label="Age" labelId="demo-simple-select-label" name="position" onChange={function () { updateHexDialogueSubmit(props.hexInformation.terrain[0], 0); }} value={(_b = props.hexInformation) === null || _b === void 0 ? void 0 : _b.terrain[0]}>
            {(0, CommonFunctions_jsx_1.getFromEnumSelectComponents)(_Types_jsx_1.BaseFullTileEnum, _Types_jsx_1.BaseTileEnum)}
        </material_1.Select>

      </div>

      </material_1.Grid2>
  </material_1.Grid2>
  <material_1.Grid2 size={6}>
    <div>Change Layer</div>
  </material_1.Grid2>
  <material_1.Grid2 size={6}>
    <div>size=4</div>
  </material_1.Grid2>
  <material_1.Grid2 size={6}>
    <div>size=8</div>
  </material_1.Grid2>
          </material_1.Grid2>
        </material_1.DialogContent>
        <material_1.DialogActions>
          <material_1.Button onClick={handleClose}>Cancel</material_1.Button>
          {/* <Button onClick={handleClose}>Subscribe</Button> */}
        </material_1.DialogActions>
      </material_1.Dialog>
      <span className="hex-span">
        {((_c = props.hexInformation) === null || _c === void 0 ? void 0 : _c.name) ? <p key={props.hexInformation.name + "-hex-title"} id={props.hexInformation.name + "-hex-title"} className={"hex-title"} style={{ marginLeft: "1.5px", maxWidth: "".concat(calculated / 2, "px"), zIndex: 999 }}> {props.hexInformation.name} </p> : null}

        <span style={{ position: "relative" }} title={props.indexArray[0] + ", " + props.indexArray[1]}>
          <img id="my-image" className={"hex-image ".concat(props.hexInformation === null ? "transparent" : "", " ").concat(((_e = (_d = props.hexInformation) === null || _d === void 0 ? void 0 : _d.terrain) === null || _e === void 0 ? void 0 : _e[0]) === _Types_jsx_1.BaseTileEnum.None ? "semi-transparent" : "")} onContextMenu={function (e) {
            e.preventDefault(); // prevent the default behaviour when right clicked
            handleRightClickHex(e);
        }} onClick={handleCanvasClick} src={((_f = props.hexInformation) === null || _f === void 0 ? void 0 : _f.terrain) ? (_g = props.hexInformation) === null || _g === void 0 ? void 0 : _g.terrain[0] : _Types_jsx_1.BaseTileEnum.Stone}/>
          {stackedTerrain}
          {character}
        </span>

        {menuVisible && ((_h = props.hexInformation) === null || _h === void 0 ? void 0 : _h.terrain) !== null && (<ul ref={contextRef} style={{
                position: "absolute",
                top: "".concat(menuPosition.y, "px"),
                left: "".concat(menuPosition.x, "px"),
                backgroundColor: "#fff",
                border: "1px solid #ccc",
                padding: "10px",
                listStyle: "none",
                zIndex: 1000
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

      </span>
    </>);
}
exports.default = IndividualHexPiece;
var styles = {
    container: {
        margin: '0 auto',
    },
};
//# sourceMappingURL=IndividualHexPiece.jsx.map