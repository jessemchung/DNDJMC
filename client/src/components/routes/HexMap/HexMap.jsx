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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_1 = require("react");
var _Types_jsx_1 = require("./_Types.jsx");
var IndividualHexPiece_jsx_1 = __importDefault(require("./IndividualHexPiece.jsx"));
var material_1 = require("@mui/material");
var CloudUpload_1 = __importDefault(require("@mui/icons-material/CloudUpload"));
var sampleHexGrid = [[null, { terrain: [_Types_jsx_1.BaseTileEnum.None] }, { name: "Old Spring Town", terrain: [_Types_jsx_1.BaseTileEnum.Water] }, { terrain: [_Types_jsx_1.BaseTileEnum.Dirt] }, { terrain: [_Types_jsx_1.BaseTileEnum.Lava, _Types_jsx_1.BaseTileEnum.Lava, _Types_jsx_1.BaseTileEnum.Lava] }, { terrain: [_Types_jsx_1.BaseTileEnum.Grass, _Types_jsx_1.BaseTileEnum.Grass] }],
    [{ terrain: [_Types_jsx_1.BaseTileEnum.Magic], topping: [_Types_jsx_1.TerrainTopper.Blue_Tree] }, { terrain: [_Types_jsx_1.BaseTileEnum.Magic], character: [_Types_jsx_1.CharacterTileEnum.Blue, null] }, { terrain: [_Types_jsx_1.BaseTileEnum.Dirt] }, { terrain: [_Types_jsx_1.BaseTileEnum.Dirt] }, { terrain: [_Types_jsx_1.BaseTileEnum.Dirt] }, { terrain: [_Types_jsx_1.BaseTileEnum.Dirt] }],
    [{ terrain: [_Types_jsx_1.BaseTileEnum.Lava], topping: [_Types_jsx_1.TerrainTopper.Autumn_Tree] }, { terrain: [_Types_jsx_1.BaseTileEnum.Dirt] }, { terrain: [_Types_jsx_1.BaseTileEnum.Dirt], topping: [_Types_jsx_1.TerrainTopper.Autumn_Tree] }, { terrain: [_Types_jsx_1.BaseTileEnum.Dirt] }, { terrain: [_Types_jsx_1.BaseTileEnum.Dirt] }, { terrain: [_Types_jsx_1.BaseTileEnum.Dirt] }]];
var sampleCharacterGrid = new Map();
sampleCharacterGrid.set("3,4", { character: _Types_jsx_1.CharacterTileEnum.Blue, highlight: true });
sampleCharacterGrid.set("3,3", { character: _Types_jsx_1.CharacterTileEnum['Pink Ship'], highlight: false });
var VisuallyHiddenInput = (0, material_1.styled)('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});
function HexMap() {
    var _a = (0, react_1.useState)(0), hexHeight = _a[0], setHexHeight = _a[1];
    var ref = (0, react_1.useRef)(null);
    var widthRef = (0, react_1.useRef)(null);
    var heightRef = (0, react_1.useRef)(0);
    var _b = (0, react_1.useState)([[]]), hexGrid = _b[0], setHexGrid = _b[1];
    var _c = (0, react_1.useState)(), characterArray = _c[0], setCharacterArray = _c[1];
    var counter = (0, react_1.useRef)(0);
    var isRightTop = (0, react_1.useRef)(false);
    var _d = React.useState(new Map(sampleCharacterGrid)), grid = _d[0], setGrid = _d[1];
    function getCharacterArray(item) {
        var _a, _b;
        var returnArray = [];
        for (var y = 0; y < item.length; y++) {
            for (var x = 0; x < item[y].length; x++) {
                if (item[y][x] !== null && ((_b = (_a = item[y][x]) === null || _a === void 0 ? void 0 : _a.character) === null || _b === void 0 ? void 0 : _b[0])) {
                    var newValue = {
                        character: item[y][x].character,
                        coordinates: [x, y]
                    };
                    returnArray.push(newValue);
                }
            }
        }
        return returnArray;
    }
    // Get the value of a cell
    var getCell = function (x, y) { return grid.get((0, _Types_jsx_1.coordinateKey)(x, y)); };
    // Update the value or properties of a cell
    var updateCell = function (x, y, updates) {
        setGrid(function (prevGrid) {
            var key = (0, _Types_jsx_1.coordinateKey)(x, y);
            var existingCell = prevGrid.get(key) || { character: null };
            var updatedCell = __assign(__assign({}, existingCell), updates);
            var newGrid = new Map(prevGrid);
            newGrid.set(key, updatedCell);
            return newGrid;
        });
    };
    // maybe on hover.
    // Example Usage
    // updateCell(2, 3, { character: "My Value", highlight: true });
    (0, react_1.useEffect)(function () {
        var test = populateGhostHexes(sampleHexGrid);
        var newCharacterGrid = getCharacterArray(test);
        setHexGrid(__spreadArray([], test, true));
        setTimeout(function () {
            setHexHeight(ref.current.clientHeight);
        }, 500);
    }, []);
    function moveCharacter(destination) {
        var _a, _b;
        for (var y = 0; y < hexGrid.length; y++) {
            for (var x = 0; x < hexGrid[y].length; x++) {
                if (hexGrid[y][x] !== null && ((_b = (_a = hexGrid[y][x]) === null || _a === void 0 ? void 0 : _a.character) === null || _b === void 0 ? void 0 : _b[0])) {
                    hexGrid[y][x].character = null;
                }
            }
        }
        hexGrid[destination[1]][destination[0]].character = [_Types_jsx_1.CharacterTileEnum['Pink Ship'], null];
        setHexGrid(__spreadArray([], hexGrid, true));
    }
    function debug() {
        // purpose it to debug any issues that might occur for the user and recheck and set all values
    }
    function downloadJSON() {
        // goal is to first grab the data
        var jsonContent = "data:application/json;charset=utf-8," + encodeURIComponent(JSON.stringify(hexGrid, null, 2));
        var link = document.createElement("a");
        link.setAttribute("href", jsonContent);
        link.setAttribute("download", "".concat("hex-map", ".json"));
        document.body.appendChild(link); // Required for Firefox
        link.click(); // This will download the data file named "my_data.csv".
    }
    function uploadJSON(item) {
        var files = item;
        if (files && files.length > 0) {
            var file = files[0];
            // Check if the file is a CSV
            if (file.type === "application/json") {
                var reader = new FileReader();
                reader.onload = function (e) {
                    var _a;
                    try {
                        var text = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
                        console.log(JSON.parse(text)); // This is the JSON content
                        setHexGrid(JSON.parse(text));
                    }
                    catch (error) {
                        console.error("Failed to parse json");
                    }
                };
                reader.readAsText(file); // Read file as text
            }
            else {
                console.error("Uploaded file is not a JSON");
            }
        }
    }
    function clearMap() {
        //must clear the map
        setHexGrid([[{ terrain: [_Types_jsx_1.BaseTileEnum.None] }, { terrain: [_Types_jsx_1.BaseTileEnum.None] }],
            [{ terrain: [_Types_jsx_1.BaseTileEnum.None] }, { terrain: [_Types_jsx_1.BaseTileEnum.Dirt] }, { terrain: [_Types_jsx_1.BaseTileEnum.None] }],
            [{ terrain: [_Types_jsx_1.BaseTileEnum.None] }, { terrain: [_Types_jsx_1.BaseTileEnum.None] }]
        ]);
    }
    function populateGhostHexes(originalHexGrid) {
        // go through y axis starting from the top
        for (var yValues = 0; yValues < originalHexGrid.length; yValues++) {
            if (yValues === 0) {
                increaseHeight(originalHexGrid, true);
            }
            else {
                for (var xValues = 0; xValues < originalHexGrid[yValues].length; xValues++) {
                    // if the hex is not null or unefined or none
                    if (originalHexGrid[yValues][xValues] !== null && originalHexGrid[yValues][xValues] !== undefined && originalHexGrid[yValues][xValues].terrain[0] !== _Types_jsx_1.BaseTileEnum.None) {
                        addSurroundingGhostHexes(originalHexGrid, xValues, yValues);
                    }
                }
            }
        }
        return originalHexGrid;
    }
    function increaseHeight(originalHexGrid, top) {
        //increase as needed
        console.log("increasing Height", originalHexGrid);
        var arr = __spreadArray([], Array(originalHexGrid[0].length), true).fill(null);
        if (top) {
            var gridHeightCheck = (originalHexGrid.unshift(arr));
            console.log("we are changing top row?");
            isRightTop.current = !isRightTop.current;
            counter.current = counter.current + 1;
        }
        else {
            // what is going on here?
            var gridHeightCheck = (originalHexGrid.push(arr));
        }
    }
    function increaseWidth(originalHexGrid, left) {
        originalHexGrid.map(function (item, index) {
            // just the first row needs to be checked.
            if (left) {
                var gridWidthCheck = (item.unshift(null));
                if (index === 0 && gridWidthCheck > originalHexGrid[0].length) {
                }
            }
            else {
                var gridWidthCheck = (item.push(null));
                if (index === 0 && gridWidthCheck > originalHexGrid[0].length) {
                }
            }
        });
    }
    function addSurroundingGhostHexes(originalHexGrid, xValue, yValue) {
        var storedXValue = xValue;
        // what is going on?
        console.log("hell");
        var storedYValue = yValue;
        if (originalHexGrid[yValue][xValue] === null || originalHexGrid[yValue][xValue].terrain[0] === _Types_jsx_1.BaseTileEnum.None) {
            return;
        }
        if (storedXValue >= originalHexGrid[0].length - 1) {
            increaseWidth(originalHexGrid, false);
        }
        if (storedXValue === 0) {
            increaseWidth(originalHexGrid, true);
            storedXValue++;
        }
        if (storedYValue >= originalHexGrid.length - 1) {
            increaseHeight(originalHexGrid, false);
        }
        else if (storedYValue === 0) {
            increaseHeight(originalHexGrid, true);
            storedYValue++;
        }
        var numbero = 0;
        if (isRightTop.current) {
            if (storedYValue % 2 === 0) {
                //this is a right most component
                numbero = 1;
                // number is 1 because we need the right most tile to also be checked
            }
            else if (storedYValue % 2 === 1) {
                // the bottom so we need to check the left most tile
                numbero = -1;
            }
        }
        else {
            // top most is a left most component
            if (storedYValue % 2 === 0) {
                //this is a left most component
                numbero = -1;
            }
            else if (storedYValue % 2 === 1) {
                numbero = 1;
            }
        }
        // let isGreaterThan0 = (storedXValue + numbero - 1 >= 0);
        var isGreaterThan0 = storedXValue > 0;
        if (originalHexGrid[storedYValue + 1][storedXValue + numbero] === null) {
            originalHexGrid[storedYValue + 1][storedXValue + numbero] = {
                terrain: [_Types_jsx_1.BaseTileEnum.None]
            };
        }
        if (originalHexGrid[storedYValue + 1][storedXValue] === null && isGreaterThan0) {
            originalHexGrid[storedYValue + 1][storedXValue] = {
                terrain: [_Types_jsx_1.BaseTileEnum.None]
            };
        }
        // handle the top elements
        if (originalHexGrid[storedYValue - 1][storedXValue] === null) {
            originalHexGrid[storedYValue - 1][storedXValue] = {
                terrain: [_Types_jsx_1.BaseTileEnum.None]
            };
        }
        if (originalHexGrid[storedYValue - 1][storedXValue + numbero] === null && isGreaterThan0) {
            originalHexGrid[storedYValue - 1][storedXValue + numbero] = {
                terrain: [_Types_jsx_1.BaseTileEnum.None]
            };
        }
        // handle elements on the same row
        if (originalHexGrid[storedYValue][storedXValue - 1] === null && isGreaterThan0) {
            originalHexGrid[storedYValue][storedXValue - 1] = {
                terrain: [_Types_jsx_1.BaseTileEnum.None]
            };
        }
        if (originalHexGrid[storedYValue][storedXValue + 1] === null && isGreaterThan0) {
            originalHexGrid[storedYValue][storedXValue + 1] = {
                terrain: [_Types_jsx_1.BaseTileEnum.None]
            };
        }
    }
    var hexComponents = hexGrid.map(function (item, index, actualArray) {
        var row = [];
        var hexHeightCalculation = hexHeight * 0.4;
        var pixel = "-" + hexHeightCalculation + "px";
        for (var i = 0; i < item.length; i++) {
            row.push(<IndividualHexPiece_jsx_1.default hexHeight={hexHeight} characters={getCell(i, index)} setHexGrid={setHexGrid} hexGrid={hexGrid} moveCharacter={moveCharacter} addSurroundingGhostHexes={addSurroundingGhostHexes} key={index.toString() + i.toString() + "hexKey"} hexInformation={item[i]} toggleThisHex={function () { }} indexArray={[i, index]}/>);
            //row is a given row, it will need to be enclosed in a div at some point
        }
        // the first value is just to calculate the height of the hexes to then caculate how much to increase the other hex rows by so that they can be proper
        if (index === 0) {
            return (
            // flex-grow is problematic?
            <div key={index + "rowKey"} style={{ display: "flex", width: "100%" }} ref={ref}>
          {isRightTop.current ? <div className='half-hex'>hello</div> : ""}

          {row}
          {isRightTop.current ? "" : <div className='half-hex'>hello</div>}

        </div>);
        }
        if (index % 2 === 1) {
            return (<div key={index + "rowKey"} style={{ display: "flex", width: "100%", marginTop: pixel }}>

          {isRightTop.current ? "" : <div className='half-hex'>hello</div>}
          {row}
          {isRightTop.current ? <div className='half-hex'>hello</div> : ""}

        </div>);
        }
        else {
            return (<div key={index + "rowKey"} style={{ display: "flex", width: "100%", marginTop: pixel }}>
          {isRightTop.current ? <div className='half-hex'>hello</div> : ""}

          {row}
          {isRightTop.current ? "" : <div className='half-hex'>hello</div>}

        </div>);
        }
    });
    return (<>
      <div>
        <div className="hex-map-slide-container">
          <input ref={widthRef} type="range" min="1" max="100" className="slider" id="myRange"/>

        </div>
      </div>
      <div className='hex-map-container'>
        <div id="hex-map-canvas">
          {hexComponents}
        </div>

      </div>
      <material_1.ButtonGroup>
      <material_1.Button component="label" role={undefined} variant="contained" tabIndex={-1} startIcon={<CloudUpload_1.default />} onClick={downloadJSON}>
        Download for later</material_1.Button>
        <material_1.Button component="label" role={undefined} variant="contained" tabIndex={-1} startIcon={<CloudUpload_1.default />}>
          Upload JSON file
          <VisuallyHiddenInput type="file" onChange={function (event) { return uploadJSON(event.target.files); }} multiple/>
        </material_1.Button>

        <material_1.Button component="label" role={undefined} variant="contained" onClick={clearMap}>
          Clear Map
        </material_1.Button>



      </material_1.ButtonGroup>
      <a href="mailto:deeperwishingwell@gmail.com?subject=just-a-subject">Send me and e-mail for feedback!</a>
    </>);
}
exports.default = HexMap;
//# sourceMappingURL=HexMap.jsx.map