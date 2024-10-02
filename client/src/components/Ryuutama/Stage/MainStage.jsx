"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var randomColor = require('randomcolor'); // import the script
var React = require("react");
var Image_jsx_1 = require("./Image.jsx");
var PropsBar_jsx_1 = require("./PropsBar/PropsBar.jsx");
;
var RyuutamaMainStage = function (prop) {
    return (<>
      <Image_jsx_1.default creatureData={prop.creatureData} form={prop.form} setForm={prop.setForm} key={'MainImage'}/>
      <PropsBar_jsx_1.default terrainProps={prop.terrainProps} setTerrainProps={prop.setTerrainProps} key={'MainPropsBar'}/>
    </>);
};
exports.default = RyuutamaMainStage;
//# sourceMappingURL=MainStage.jsx.map