"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var randomColor = require('randomcolor'); // import the script
var React = require("react");
var Grid_1 = require("@mui/material/Grid");
var Box_1 = require("@mui/material/Box");
var PropsBarIndividualCard_jsx_1 = require("./PropsBarIndividualCard.jsx");
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