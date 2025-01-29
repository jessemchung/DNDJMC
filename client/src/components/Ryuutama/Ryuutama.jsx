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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultTerrainProp = exports.defaultRyuutamaForm = void 0;
var react_1 = require("react");
var randomColor = require('randomcolor'); // import the script
var React = __importStar(require("react"));
var Box_1 = __importDefault(require("@mui/material/Box"));
var Paper_1 = __importDefault(require("@mui/material/Paper"));
var Grid_1 = __importDefault(require("@mui/material/Grid"));
var Grid2_1 = __importDefault(require("@mui/material/Grid2"));
var styles_1 = require("@mui/material/styles");
var MainStage_jsx_1 = __importDefault(require("./Stage/MainStage.jsx"));
var FreepsMain_jsx_1 = __importDefault(require("./Stage/Pieces/Freeps/FreepsMain.jsx"));
var FreepsSampleData_jsx_1 = require("./Stage/Pieces/Freeps/FreepsSampleData.jsx");
var CloudUpload_1 = __importDefault(require("@mui/icons-material/CloudUpload"));
var material_1 = require("@mui/material");
var UserContext_jsx_1 = __importDefault(require("./UserContext.jsx"));
var Dice_jsx_1 = __importDefault(require("./Dice/Dice.jsx"));
var CsvDownloadDialogue_jsx_1 = require("./CsvDownloadDialogue.jsx");
var setForm_jsx_1 = require("../Common/setForm.jsx");
var colors_1 = require("@mui/material/colors");
exports.defaultRyuutamaForm = {
    weather: "./image/Ryuutama/Weather/Ryuutama_Clear_Skies.png",
    terrainType: "./image/Ryuutama/Terrain/Ryuutama_Alpine.png",
    initiative: 30,
    round: 0,
    creatureData: FreepsSampleData_jsx_1.FreepsSampleData
};
exports.defaultTerrainProp = {
    description: "Add description here",
    title: "Set Prop"
};
var VisuallyHiddenInput = (0, styles_1.styled)('input')({
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
function Ryuutama() {
    var _a = (0, setForm_jsx_1.useForm)(exports.defaultRyuutamaForm), form = _a[0], setForm = _a[1];
    var _b = (0, react_1.useState)(false), openCsvDialogue = _b[0], setOpenCsvDialogue = _b[1];
    var _c = (0, react_1.useState)(FreepsSampleData_jsx_1.FreepsSampleData), fullDataFreeps = _c[0], setFullDataFreeps = _c[1];
    var _d = (0, react_1.useState)(Array.from({ length: 10 }, function () { return (__assign({}, exports.defaultTerrainProp)); })), terrainProps = _d[0], setTerrainProps = _d[1];
    var mainStageComponent = <MainStage_jsx_1.default terrainProps={terrainProps} setTerrainProps={setTerrainProps} creatureData={fullDataFreeps} key={'MainStage'} form={form} setForm={setForm}/>;
    var _e = (0, react_1.useState)(0), initiative = _e[0], setInitiative = _e[1];
    var _f = (0, react_1.useState)('./image/Ryuutama/Weather/Ryuutama_Clear_Skies.png'), weather = _f[0], setWeather = _f[1];
    var _g = (0, react_1.useState)('./image/Ryuutama/Terrain/Ryuutama_Alpine.png'), terrainType = _g[0], setTerrainType = _g[1];
    var myObject = { id: 1, name: 'Example' };
    // Create an array with 10 distinct copies of the object
    var arrayWithCopies = Array.from({ length: 10 }, function () { return (__assign({}, myObject)); });
    console.log(arrayWithCopies);
    var _h = (0, react_1.useState)([]), arrayProps = _h[0], setArrayProps = _h[1];
    var _j = (0, react_1.useState)('unset'), first = _j[0], setFirst = _j[1];
    var _k = (0, react_1.useState)('white'), second = _k[0], setSecond = _k[1];
    var _l = (0, react_1.useState)('white'), third = _l[0], setThird = _l[1];
    var _m = (0, react_1.useState)(0), indexFreeps = _m[0], setIndexFreeps = _m[1];
    //!Jesse this is important there needs to be something that will clean the deleted items (aka, null) at loading time
    var adjustCreatureSet = function (indexOfChange, changedCard) {
        var newArray = fullDataFreeps.map(function (item, index) {
            if (index === indexOfChange) {
                return changedCard; // Update the specific object by replacing it with the new object
            }
            return item; // Return the unchanged object
        });
        setFullDataFreeps(newArray);
    };
    var clearCreatures = function () {
        setFullDataFreeps([]);
    };
    var handleFileUpload = function (item) {
        var files = item;
        if (files && files.length > 0) {
            var file = files[0];
            // Check if the file is a CSV
            if (file.type === 'text/csv') {
                var reader = new FileReader();
                reader.onload = function (e) {
                    var _a;
                    var text = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
                    console.log(text); // This is the CSV content
                    var lines = text.trim().split('\n');
                    // Skip the first line (header) and map each line to a character object
                    var characters = lines.slice(1).map(function (line) {
                        var _a = line.split(', '), bloodyImage = _a[0], color = _a[1], creepOrFreep = _a[2], healthyImage = _a[3], hitpoints = _a[4], initiative = _a[5], maxHitpoints = _a[6], name = _a[7], position = _a[8], shield = _a[9];
                        return {
                            bloodyImage: bloodyImage,
                            color: color,
                            creepOrFreep: creepOrFreep,
                            healthyImage: (healthyImage.replace("|", ",")).replace(/"/g, ""),
                            hitpoints: Number(hitpoints),
                            initiative: Number(initiative),
                            maxHitpoints: Number(maxHitpoints),
                            name: name,
                            position: Number(position),
                            shield: Number(shield),
                        };
                    });
                    setFullDataFreeps(characters);
                };
                reader.onerror = function () {
                    console.error("Failed to read file!");
                };
                reader.readAsText(file); // Read file as text
            }
            else {
                console.error("Uploaded file is not a CSV");
            }
        }
    };
    var nextInitiative = function () {
        if (initiative + 1 >= fullDataFreeps.length) {
            setInitiative(0);
        }
        else {
            setInitiative(initiative + 1);
        }
    };
    var Item = (0, styles_1.styled)(Paper_1.default)(function (_a) {
        var theme = _a.theme;
        return (__assign(__assign({}, theme.typography.body2), { textAlign: 'center', color: theme.palette.text.secondary, lineHeight: '10px' }));
    });
    var darkTheme = (0, styles_1.createTheme)({
        palette: {
            mode: 'dark',
            primary: {
                // Purple and green play nicely together.
                main: colors_1.purple[500],
            },
            secondary: {
                // This is green.A700 as hex.
                main: '#11cb5f',
            },
            background: {
                default: '#121212',
                paper: '#1D1D1D'
            }
        }
    });
    var lightTheme = (0, styles_1.createTheme)({ palette: { mode: 'light' } });
    var showCsvDownloadDialogue = null;
    if (openCsvDialogue) {
        showCsvDownloadDialogue = <CsvDownloadDialogue_jsx_1.CsvDownloadDialogue fullDataFreeps={fullDataFreeps} open={openCsvDialogue} onClose={function () { return setOpenCsvDialogue(false); }}/>;
    }
    return (<div className="lower-component">

      <UserContext_jsx_1.default.Provider value={{
            weather: weather,
            setWeather: setWeather,
            terrainType: terrainType,
            setTerrainType: setTerrainType,
            first: first,
            setFirst: setFirst,
            second: second,
            setSecond: setSecond,
            third: third,
            setThird: setThird,
            initiative: initiative
        }}>

        {showCsvDownloadDialogue}
        <Paper_1.default>
          <Box_1.default>
            <Grid_1.default container spacing={2}>
              {[darkTheme].map(function (theme, index) { return (<Grid2_1.default columns={3} key={index}>
                  <styles_1.ThemeProvider theme={theme}>
                    <Box_1.default sx={{
                p: 1,
                bgcolor: 'background.default',
                display: 'grid',
                gridTemplateColumns: { md: '1fr 4fr 1fr' },
                gap: 2,
            }}>

                      <Item id='Freeps' style={{ display: 'flex', flexDirection: 'column', maxHeight: "100%", overflowY: "auto" }}>

                        <FreepsMain_jsx_1.default adjustCreatureSet={adjustCreatureSet} form={form} freepsOrCreeps="freep" setForm={setForm} key={'FreepsMain'} indexPieces={initiative} setIndexPieces={setIndexFreeps} fullDataFreeps={fullDataFreeps} setFullDataFreeps={setFullDataFreeps}/>

                      </Item>

                      <Item id="main-stage">

                        {mainStageComponent}

                      </Item>

                      <Item id="creeps" style={{ display: 'flex', flexDirection: 'column' }}>

                        <FreepsMain_jsx_1.default adjustCreatureSet={adjustCreatureSet} form={form} freepsOrCreeps="creep" setForm={setForm} key={'FreepsMain'} indexPieces={initiative} setIndexPieces={setIndexFreeps} fullDataFreeps={fullDataFreeps} setFullDataFreeps={setFullDataFreeps}/>

                      </Item>

                    </Box_1.default>
                  </styles_1.ThemeProvider>
                </Grid2_1.default>); })}
            </Grid_1.default>

          </Box_1.default>



        </Paper_1.default>

        <material_1.Button onClick={clearCreatures} variant="contained">Clear All</material_1.Button>
        <material_1.Button onClick={nextInitiative} variant="contained">Next Initative</material_1.Button>
        <material_1.Button onClick={function () { return setOpenCsvDialogue(true); }} variant="contained">Download CSV</material_1.Button>
        <material_1.Button component="label" role={undefined} variant="contained" tabIndex={-1} startIcon={<CloudUpload_1.default />}>
          Upload CSV files
          <VisuallyHiddenInput type="file" onChange={function (event) { return handleFileUpload(event.target.files); }} multiple/>
        </material_1.Button>

        <Dice_jsx_1.default />

      </UserContext_jsx_1.default.Provider>

    </div>);
}
exports.default = Ryuutama;
//# sourceMappingURL=Ryuutama.jsx.map