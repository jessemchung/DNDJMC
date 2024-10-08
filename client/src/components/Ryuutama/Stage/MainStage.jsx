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
var Image_jsx_1 = __importDefault(require("./Image.jsx"));
var PropsBar_jsx_1 = __importDefault(require("./PropsBar/PropsBar.jsx"));
;
var RyuutamaMainStage = function (prop) {
    return (<>
      <Image_jsx_1.default creatureData={prop.creatureData} form={prop.form} setForm={prop.setForm} key={'MainImage'}/>
      <PropsBar_jsx_1.default terrainProps={prop.terrainProps} setTerrainProps={prop.setTerrainProps} key={'MainPropsBar'}/>
    </>);
};
exports.default = RyuutamaMainStage;
//# sourceMappingURL=MainStage.jsx.map