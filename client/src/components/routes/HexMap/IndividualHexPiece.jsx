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
var HexMapCommon_jsx_1 = require("./HexMapCommon.jsx");
;
function IndividualHexPiece(props) {
<<<<<<< HEAD
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
    var contextRef = (0, react_1.useRef)(null);
    var expandedContextRef = (0, react_1.useRef)(null);
    var _u = (0, react_1.useState)(JSON.parse(JSON.stringify(props.hexInformation))), form = _u[0], setForm = _u[1];
    var _v = (0, react_1.useState)(false), menuVisible = _v[0], setMenuVisible = _v[1];
    var _w = (0, react_1.useState)(false), expandedMenuPosition = _w[0], setExpandedMenuPosition = _w[1];
    var _x = (0, react_1.useState)({ x: 0, y: 0 }), menuPosition = _x[0], setMenuPosition = _x[1];
    var _y = (0, react_1.useState)(false), open = _y[0], setOpen = _y[1];
=======
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    var contextRef = (0, react_1.useRef)(null);
    var expandedContextRef = (0, react_1.useRef)(null);
    var _l = (0, react_1.useState)(JSON.parse(JSON.stringify(props.hexInformation))), form = _l[0], setForm = _l[1];
    var _m = (0, react_1.useState)(false), menuVisible = _m[0], setMenuVisible = _m[1];
    var _o = (0, react_1.useState)(false), expandedMenuPosition = _o[0], setExpandedMenuPosition = _o[1];
    var _p = (0, react_1.useState)({ x: 0, y: 0 }), menuPosition = _p[0], setMenuPosition = _p[1];
    var _q = (0, react_1.useState)(false), open = _q[0], setOpen = _q[1];
>>>>>>> 40a19f6 (more fixing)
    var getFromEnumSelectComponents = function (selected) {
        var enums = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            enums[_i - 1] = arguments[_i];
        }
        return enums.flatMap(function (enumObj) {
            var options = Object.keys(enumObj).filter(function (key) { return isNaN(Number(key)); });
            return options.map(function (key, index) { return (<material_1.MenuItem key={key + index} value={enumObj[key]}>{key}</material_1.MenuItem>); });
        });
    };
    var handleCanvasClick = function (e) {
        var img = document.getElementById('my-image');
        var canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        canvas.getContext('2d').drawImage(img, 0, 0, img.width, img.height);
        var ctx = canvas.getContext('2d');
        if (ctx) {
            ctx.drawImage(img, 0, 0, img.width, img.height);
            var _a = e.nativeEvent, offsetX = _a.offsetX, offsetY = _a.offsetY;
            var pixelData = ctx.getImageData(offsetX, offsetY, 1, 1).data;
            if (pixelData[3] === 0) {
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
    /**
     * Handles the right-click event on a hexagon.
     * Prevents the default context menu, calculates the menu position, and updates the state to show the menu.
     * @param event - The mouse event that triggered the right-click.
     */
    function handleRightClickHex(event) {
        event.preventDefault();
        document.addEventListener("mousedown", handleClickOutside);
        var menuPosition = calculateMenuPosition(event);
        setMenuPosition(menuPosition);
        setMenuVisible(true);
    }
    ;
    /**
     * Calculates the position of the menu to ensure it stays within the screen bounds.
     * @param event - The mouse event that triggered the right-click.
     * @returns An object containing the adjusted x and y coordinates for the menu position.
     */
    function calculateMenuPosition(event) {
        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;
        var posX = event.pageX;
        var posY = event.pageY;
        if (posX + HexMapCommon_jsx_1.MENU_WIDTH > windowWidth) {
            posX = windowWidth - HexMapCommon_jsx_1.MENU_WIDTH;
        }
        if (posY + HexMapCommon_jsx_1.MENU_HEIGHT > windowHeight) {
            posY = windowHeight - HexMapCommon_jsx_1.MENU_HEIGHT;
        }
        return { x: posX, y: posY };
    }
    function updateTitle(title) {
        form.name = title;
        setForm(__assign({}, form));
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
    var adjustAppearance = function (item) {
        var isFirstLayerEmpty = false;
        if (props.hexInformation.terrain[0] === _Types_jsx_1.BaseTileEnum.None) {
            isFirstLayerEmpty = true;
        }
        props.hexInformation.terrain[props.hexInformation.terrain.length - 1] = _Types_jsx_1.BaseTileEnum[item];
        if (isFirstLayerEmpty) {
            props.addSurroundingGhostHexes(props.hexGrid, props.indexArray[0], props.indexArray[1]);
        }
        props.setHexGrid(__spreadArray([], props.hexGrid, true));
    };
    var addStack = function (item) {
        props.hexInformation.terrain.push(_Types_jsx_1.BaseFullTileEnum[item]);
        props.setHexGrid(__spreadArray([], props.hexGrid, true));
    };
    var BaseTileOptions = Object.keys(_Types_jsx_1.BaseTileEnum);
    var BaseTileList = BaseTileOptions.map(function (item) {
        return (<li key={"basetile" + item} style={{ padding: "5px 10px", cursor: "pointer" }} onClick={function () { adjustAppearance(item); }}>{item}</li>);
    });
    function handleClose() {
        setOpen(false);
    }
    function handleSave() {
        props.hexGrid[props.indexArray[1]][props.indexArray[0]] = form;
        props.setHexGrid(__spreadArray([], props.hexGrid, true));
        setOpen(false);
    }
    function addTopLayer() {
        form.terrain.push(_Types_jsx_1.BaseTileEnum.Grass);
        setForm(__assign({}, form));
    }
    function removeTopLayer() {
<<<<<<< HEAD
        if (form.terrain.length > 1) {
            var undoPossible = form.terrain.pop();
        }
        else {
            form.terrain[0] = _Types_jsx_1.BaseTileEnum.None;
        }
=======
        var undoPossible = form.terrain.pop();
>>>>>>> 40a19f6 (more fixing)
        setForm(__assign({}, form));
    }
    function updateHexForm(terrain, index) {
        form.terrain[index] = terrain;
        setForm(__assign({}, form));
    }
<<<<<<< HEAD
    function updateToppings(topping, index) {
        form.topping = [topping];
        setForm(__assign({}, form));
    }
=======
>>>>>>> 40a19f6 (more fixing)
    var FullTileOptions = Object.keys(_Types_jsx_1.BaseFullTileEnum);
    var FullTileList = FullTileOptions.map(function (item) {
        return (<li key={"fulltile " + item} style={{ padding: "5px 10px", cursor: "pointer" }} onClick={function () { addStack(item); }}>{item}</li>);
    });
    BaseTileList.push(<>
      <li key={"hex-delete"} style={{ padding: "5px 10px", cursor: "pointer" }} onClick={function () { deleteHex(); }}>Delete</li>
      <li key={"hex-place-hero"} style={{ padding: "5px 10px", cursor: "pointer" }} onClick={function () { props.moveCharacter(props.indexArray); }}>Place Hero</li>
      <li key={"hex-add-toppers"} style={{ padding: "5px 10px", cursor: "pointer" }} onClick={function () { deleteHex(); }}>Add Toppers</li>
    </>);
    var x = 1;
    var calculated = props.hexHeight * x;
    var stackedTerrain = [];
    var counter = 1;
    if (props.hexInformation !== null && props.hexInformation.terrain[1]) {
        for (counter = 1; counter < props.hexInformation.terrain.length; counter++) {
<<<<<<< HEAD
            stackedTerrain.push(<img key={"stack" + counter} className={"hex-top-floors hex-image"} style={{ marginLeft: "1.5px", marginTop: "-".concat(calculated / 5 + (calculated * (counter - 1) / 4) + 1.5, "px") }} src={(_a = props.hexInformation) === null || _a === void 0 ? void 0 : _a.terrain[counter]}/>);
=======
            stackedTerrain.push(<img key={"stack" + counter} id="my-image1" className={"hex-top-floors"} style={{ marginLeft: "1.5px", marginTop: "-".concat(calculated / 5 + (calculated * (counter - 1) / 4) + 1.5, "px") }} src={(_a = props.hexInformation) === null || _a === void 0 ? void 0 : _a.terrain[counter]}/>);
>>>>>>> 40a19f6 (more fixing)
        }
    }
    var character;
    if (((_b = props.hexInformation) === null || _b === void 0 ? void 0 : _b.character) && ((_d = (_c = props.hexInformation) === null || _c === void 0 ? void 0 : _c.character) === null || _d === void 0 ? void 0 : _d[0])) {
<<<<<<< HEAD
        // hmm strange, something is off.  Needs to multiply by height I think
        character = (<img key={"character-marker"} className={"hex-character"} style={{ marginLeft: "25%", width: calculated / 3 + "px", height: "auto", marginTop: "-".concat(calculated / 5 + (calculated * (counter - 1) / 4) + 1.5, "px") }} src={"./image/map/shipPink_manned.png"}/>);
    }
    var toppings;
    // now to handle toppings
    // hmm strange, something is off.  Needs to multiply by height I think
    console.log("why so many?", (_f = (_e = props.hexInformation) === null || _e === void 0 ? void 0 : _e.topping) === null || _f === void 0 ? void 0 : _f.length, ((_h = (_g = props.hexInformation) === null || _g === void 0 ? void 0 : _g.topping) === null || _h === void 0 ? void 0 : _h.length) > 0);
    if (((_k = (_j = props.hexInformation) === null || _j === void 0 ? void 0 : _j.topping) === null || _k === void 0 ? void 0 : _k.length) > 0) {
        toppings = (<img key={"character-marker"} className={"hex-character"} style={{ marginLeft: "25%", width: calculated / 3 + "px", marginTop: "-".concat(calculated / 5 + (calculated * (counter) / 4) + 1.5, "px") }} src={props.hexInformation.topping[0]}/>);
=======
        character = (<img key={"character-marker"} className={"hex-character"} style={{ marginLeft: "25%", width: calculated / 3 + "px", height: "auto" }} src={"./image/map/shipPink_manned.png"}/>);
>>>>>>> 40a19f6 (more fixing)
    }
    function editLayers() {
        var layerArray = [];
        var _loop_1 = function (currentLayer) {
<<<<<<< HEAD
            // check if first layer
=======
>>>>>>> 40a19f6 (more fixing)
            var index = currentLayer;
            var frontendLayer = currentLayer + 1;
            layerArray.push(<div style={{ display: "flex" }}>
          <material_1.Grid2 size={4}>
            <img src={(form === null || form === void 0 ? void 0 : form.terrain[index]) || _Types_jsx_1.BaseTileEnum.None} alt={"EditLayer" + frontendLayer} style={{ maxHeight: '100%', maxWidth: '100%', height: 'auto', objectFit: 'contain' }}/>
          </material_1.Grid2>
          <material_1.Grid2 size={8} style={{ marginLeft: "1em", marginBottom: "1em" }}>
            <material_1.InputLabel id={"select-label-select-layer" + frontendLayer}>{"Layer " + (frontendLayer)}</material_1.InputLabel>
            <material_1.Select style={{ width: "90%" }} labelId="demo-simple-select-label" id={"SelectLayer" + frontendLayer} label={"Layer " + frontendLayer} onChange={function (event) { updateHexForm(event.target.value, index); }} value={(form === null || form === void 0 ? void 0 : form.terrain[index]) || _Types_jsx_1.BaseTileEnum.None}>
              {getFromEnumSelectComponents("fish", _Types_jsx_1.BaseFullTileEnum, _Types_jsx_1.BaseTileEnum)}
            </material_1.Select>
          </material_1.Grid2>
        </div>);
        };
        for (var currentLayer = (form === null || form === void 0 ? void 0 : form.terrain.length) - 1; currentLayer >= 0; currentLayer--) {
            _loop_1(currentLayer);
        }
        return layerArray;
    }
    return (<>
      <material_1.Dialog open={open} onClose={handleClose}>
        <material_1.DialogTitle>{"Edit Hex ".concat(props.indexArray[0], ", ").concat(props.indexArray[1])}</material_1.DialogTitle>
        <material_1.DialogContent>
          <material_1.ButtonGroup size='small' variant="contained" aria-label="Adding and removing layers">
            <material_1.Button onClick={addTopLayer}>Add Top Layer</material_1.Button>
            <material_1.Button onClick={removeTopLayer}>Remove Top Layer</material_1.Button>
          </material_1.ButtonGroup>


          <material_1.TextField fullWidth id="outlined-basic" label="Hex Title" value={(form === null || form === void 0 ? void 0 : form.name) || ""} variant="outlined" onChange={function (e) { return updateTitle(e.target.value); }}/>
<<<<<<< HEAD
          
          
          <material_1.InputLabel id={"select-label-select-topping"}>{"layer-toppings"}</material_1.InputLabel>
            <material_1.Select style={{ width: "90%" }} labelId="demo-simple-select-topping-label" id={"select-topping"} label={"Topping Select"} onChange={function (event) { updateToppings(event.target.value, 0); }} value={((_l = form === null || form === void 0 ? void 0 : form.topping) === null || _l === void 0 ? void 0 : _l[0]) || ""}>
              {getFromEnumSelectComponents("fish", _Types_jsx_1.TerrainTopper)}
            </material_1.Select>

          
          <material_1.Grid2 container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <material_1.Grid2 size={12}>
              <material_1.Grid2 container flexDirection={"column"} rowSpacing={0} columnSpacing={0}>
                <div>
                <img key={"topping-select-display"} className={""} src={((_m = form === null || form === void 0 ? void 0 : form.topping) === null || _m === void 0 ? void 0 : _m[0]) || ""}/>

                </div>

=======
          <material_1.Grid2 container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <material_1.Grid2 size={12}>
              <material_1.Grid2 container flexDirection={"column"} rowSpacing={0} columnSpacing={0}>
>>>>>>> 40a19f6 (more fixing)
                {editLayers()}
              </material_1.Grid2>
            </material_1.Grid2>
          </material_1.Grid2>
        </material_1.DialogContent>
        <material_1.DialogActions>
          <material_1.Button onClick={handleClose}>Cancel</material_1.Button>
          <material_1.Button onClick={handleSave}>Save</material_1.Button>
        </material_1.DialogActions>
      </material_1.Dialog>
      <span className="hex-span">
<<<<<<< HEAD
        {((_o = props.hexInformation) === null || _o === void 0 ? void 0 : _o.name) ? <p key={props.hexInformation.name + "-hex-title"} id={props.hexInformation.name + "-hex-title"} className={"hex-title"} style={{ marginLeft: "1.5px", maxWidth: "".concat(calculated / 2, "px"), zIndex: 999 }}> {props.hexInformation.name} </p> : null}
        <span className='individual-hex' style={{ position: "relative" }} title={props.indexArray[0] + ", " + props.indexArray[1]}>
          <img id="my-image" className={"hex-image ".concat(props.hexInformation === null ? "transparent" : "", " ").concat(((_q = (_p = props.hexInformation) === null || _p === void 0 ? void 0 : _p.terrain) === null || _q === void 0 ? void 0 : _q[0]) === _Types_jsx_1.BaseTileEnum.None ? "semi-transparent" : "")} onContextMenu={function (e) { e.preventDefault(); handleRightClickHex(e); }} onClick={handleCanvasClick} src={((_r = props.hexInformation) === null || _r === void 0 ? void 0 : _r.terrain) ? (_s = props.hexInformation) === null || _s === void 0 ? void 0 : _s.terrain[0] : _Types_jsx_1.BaseTileEnum.Stone}/>
          {stackedTerrain}
          {toppings}
          {character}
        </span>
        {menuVisible && ((_t = props.hexInformation) === null || _t === void 0 ? void 0 : _t.terrain) !== null && (<ul ref={contextRef} style={{ position: "absolute", top: "".concat(menuPosition.y, "px"), left: "".concat(menuPosition.x, "px"), backgroundColor: "#fff", border: "1px solid #ccc", padding: "10px", listStyle: "none", zIndex: 1000 }}>
=======
        {((_e = props.hexInformation) === null || _e === void 0 ? void 0 : _e.name) ? <p key={props.hexInformation.name + "-hex-title"} id={props.hexInformation.name + "-hex-title"} className={"hex-title"} style={{ marginLeft: "1.5px", maxWidth: "".concat(calculated / 2, "px"), zIndex: 999 }}> {props.hexInformation.name} </p> : null}
        <span style={{ position: "relative" }} title={props.indexArray[0] + ", " + props.indexArray[1]}>
          <img id="my-image" className={"hex-image ".concat(props.hexInformation === null ? "transparent" : "", " ").concat(((_g = (_f = props.hexInformation) === null || _f === void 0 ? void 0 : _f.terrain) === null || _g === void 0 ? void 0 : _g[0]) === _Types_jsx_1.BaseTileEnum.None ? "semi-transparent" : "")} onContextMenu={function (e) { e.preventDefault(); handleRightClickHex(e); }} onClick={handleCanvasClick} src={((_h = props.hexInformation) === null || _h === void 0 ? void 0 : _h.terrain) ? (_j = props.hexInformation) === null || _j === void 0 ? void 0 : _j.terrain[0] : _Types_jsx_1.BaseTileEnum.Stone}/>
          {stackedTerrain}
          {character}
        </span>
        {menuVisible && ((_k = props.hexInformation) === null || _k === void 0 ? void 0 : _k.terrain) !== null && (<ul ref={contextRef} style={{ position: "absolute", top: "".concat(menuPosition.y, "px"), left: "".concat(menuPosition.x, "px"), backgroundColor: "#fff", border: "1px solid #ccc", padding: "10px", listStyle: "none", zIndex: 1000 }}>
>>>>>>> 40a19f6 (more fixing)
            <li onClick={function () { return setExpandedMenuPosition(true); }} style={{ padding: "5px 10px", cursor: "pointer" }}>Add Stack</li>
            {BaseTileList}
          </ul>)}
        {expandedMenuPosition && (<ul onMouseLeave={function (event) { return checkIfLeavingAdvancedContext(event); }} ref={expandedContextRef} style={{ position: "absolute", top: "".concat(menuPosition.y, "px"), left: "".concat(menuPosition.x + contextRef.current.clientWidth, "px"), backgroundColor: "#fff", border: "1px solid #ccc", padding: "10px", listStyle: "none", zIndex: 1001 }}>
            {FullTileList}
          </ul>)}
      </span>
    </>);
}
exports.default = IndividualHexPiece;
//# sourceMappingURL=IndividualHexPiece.jsx.map