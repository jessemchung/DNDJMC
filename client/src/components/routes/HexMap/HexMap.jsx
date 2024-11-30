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
var sampleHexGrid = [[null, { terrain: [_Types_jsx_1.BaseTileEnum.None], topping: ["fish"] }, { name: "Old Spring Town", terrain: [_Types_jsx_1.BaseTileEnum.Water], topping: ["fish"] }, { terrain: [_Types_jsx_1.BaseTileEnum.Dirt], topping: ["fish"] }, { terrain: [_Types_jsx_1.BaseTileEnum.Lava, _Types_jsx_1.BaseTileEnum.Lava, _Types_jsx_1.BaseTileEnum.Lava], topping: ["fish"] }, { terrain: [_Types_jsx_1.BaseTileEnum.Grass, _Types_jsx_1.BaseTileEnum.Grass], topping: ["fish"] }],
    [{ terrain: [_Types_jsx_1.BaseTileEnum.Magic], topping: ["fish"] }, { terrain: [_Types_jsx_1.BaseTileEnum.Magic], topping: ["fish"], character: [_Types_jsx_1.CharacterTileEnum.Blue, null] }, { terrain: [_Types_jsx_1.BaseTileEnum.Dirt], topping: ["fish"] }, { terrain: [_Types_jsx_1.BaseTileEnum.Dirt], topping: ["fish"] }, { terrain: [_Types_jsx_1.BaseTileEnum.Dirt], topping: ["fish"] }, { terrain: [_Types_jsx_1.BaseTileEnum.Dirt], topping: ["fish"] }],
    [{ terrain: [_Types_jsx_1.BaseTileEnum.Lava], topping: ["fish"] }, { terrain: [_Types_jsx_1.BaseTileEnum.Dirt], topping: ["fish"] }, { terrain: [_Types_jsx_1.BaseTileEnum.Dirt], topping: ["fish"] }, { terrain: [_Types_jsx_1.BaseTileEnum.Dirt], topping: ["fish"] }, { terrain: [_Types_jsx_1.BaseTileEnum.Dirt], topping: ["fish"] }, { terrain: [_Types_jsx_1.BaseTileEnum.Dirt], topping: ["fish"] }]];
var sampleCharacterGrid = new Map();
// Adding some sample data
sampleCharacterGrid.set("0,0", { character: _Types_jsx_1.CharacterTileEnum.Blue, highlight: true });
sampleCharacterGrid.set("0,1", { character: _Types_jsx_1.CharacterTileEnum['Pink Ship'], highlight: false });
sampleCharacterGrid.set("1,0", { character: _Types_jsx_1.CharacterTileEnum.Blue });
sampleCharacterGrid.set("1,1", { character: _Types_jsx_1.CharacterTileEnum['Pink Ship'], highlight: true });
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
    // instead, of hexgrid, storing as its own thing because characters need to be moveable from hex to hex easily
    var counter = (0, react_1.useRef)(0);
    var isRightTop = (0, react_1.useRef)(false);
    var _c = React.useState(new Map()), grid = _c[0], setGrid = _c[1];
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
    // Example Usage
    // updateCell(2, 3, { character: "My Value", highlight: true });
    (0, react_1.useEffect)(function () {
        var test = populateGhostHexes(sampleHexGrid);
        setHexGrid(__spreadArray([], test, true));
        setTimeout(function () {
            setHexHeight(ref.current.clientHeight);
        }, 500);
    }, []);
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
        //! Need to build a function hex thing that is an array.  Otherwise I have to check if empty first.  Might not need to though .?
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
    function moveHero() {
        //it must adjust the heroes as needed because the heroes are more problematic
        // they move from tile to to tile
    }
    function handleCanvasClick(e) {
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
            console.log(pixelData, "this is the console data");
        }
    }
    ;
    var hexComponents = hexGrid.map(function (item, index, actualArray) {
        var row = [];
        var hexHeightCalculation = hexHeight * 0.4;
        var pixel = "-" + hexHeightCalculation + "px";
        for (var i = 0; i < item.length; i++) {
            row.push(<IndividualHexPiece_jsx_1.default hexHeight={hexHeight} characters={getCell(i, index)} setHexGrid={setHexGrid} hexGrid={hexGrid} addSurroundingGhostHexes={addSurroundingGhostHexes} key={index.toString() + i.toString() + "hexKey"} hexInformation={item[i]} toggleThisHex={function () { }} indexArray={[i, index]}/>);
            //row is a given row, it will need to be enclosed in a div at some point
        }
        // the first value is just to calculate the height of the hexes to then caculate how much to increase the other hex rows by so that they can be proper
        if (index === 0) {
            return (<div key={index + "rowKey"} style={{ display: "flex", width: "100%" }} ref={ref}>
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
    //
    //i can use stop propgation if the top image is not transparent, then it knows not to dig deeper.
    return (<>
      <div>
        <div className="hex-map-slide-container">
          <input ref={widthRef} type="range" min="1" max="100" className="slider" id="myRange"/>
          {/* <input onChange={(e)=> {setGridHeight(parseInt(e.target.value))}} type="range" min="1" max="100" value={gridHeight} className="slider" id="myRange" />
      <p>Height: <input id="width" type="text" value={gridHeight} />{gridHeight}</p>
      <input onChange={(e)=> {setZoom(parseInt(e.target.value))}} type="range" min="1" max="100" value={zoom} className="slider" id="myRange" /> <span>zoom value</span>
      <p>Zoom: <input id="width" type="text" value={zoom} />{zoom}</p> */}

        </div>
      </div>
      <div className='hex-map-container'>
        <div id="hex-map-canvas">
          {hexComponents}
        </div>
        <button onClick={downloadJSON}>Download for later</button>
        <material_1.Button component="label" role={undefined} variant="contained" tabIndex={-1} startIcon={<CloudUpload_1.default />}>
          Upload JSON file
          <VisuallyHiddenInput type="file" onChange={function (event) { return uploadJSON(event.target.files); }} multiple/>
        </material_1.Button>

      </div>


    </>);
}
exports.default = HexMap;
// this margin is adjusted?  hmm.  Something to think about.  Especially as I zoom in.  I think a max height is probably preferable?
var styles = {
    container: {
        margin: '0 auto',
    },
};
//# sourceMappingURL=HexMap.jsx.map