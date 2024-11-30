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
var randomColor = require('randomcolor'); // import the script
var React = __importStar(require("react"));
var Grid_1 = __importDefault(require("@mui/material/Grid"));
var Box_1 = __importDefault(require("@mui/material/Box"));
var PropsBarIndividualCard_jsx_1 = __importDefault(require("./PropsBarIndividualCard.jsx"));
;
function PropsBar(prop) {
    var setNewTerrainInformation = function (index, newTerrainValue) {
        prop.setTerrainProps(prop.terrainProps.map(function (item, originalIndex) { return (originalIndex === index ? newTerrainValue : item); }));
    };
    var finalConstruct = prop.terrainProps.map(function (item, index) {
        return (<Grid_1.default key={"propsBar" + index} item xs={1}>
        <PropsBarIndividualCard_jsx_1.default setNewTerrainInformation={setNewTerrainInformation} terrainProp={item} index={index}/>
      </Grid_1.default>);
    });
    return (<>
      <Box_1.default sx={{ flexGrow: 0 }}>
        <Grid_1.default container spacing={0} columns={10}>
          {finalConstruct}
        </Grid_1.default>
      </Box_1.default>
    </>);
}
exports.default = PropsBar;
//# sourceMappingURL=PropsBar.jsx.map