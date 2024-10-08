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
Object.defineProperty(exports, "__esModule", { value: true });
var randomColor = require('randomcolor'); // import the script
var React = __importStar(require("react"));
var FreepsSingleCard_jsx_1 = require("./FreepsSingleCard.jsx");
var FreepsAdd_jsx_1 = require("./FreepsAdd.jsx");
// this produces all the freep cards. 
function FreepsMain(props) {
    var allCards = props.fullDataFreeps.map(function (singleCard, index) {
        if (singleCard.creepOrFreep === props.freepsOrCreeps) {
            return (<FreepsSingleCard_jsx_1.FreepsSingleCard adjustCreatureSet={props.adjustCreatureSet} initiative={props.indexPieces} index={index} freepInfo={singleCard} key={index + "freeps"} fullDataFreeps={props.fullDataFreeps} setFullDataFreeps={props.setFullDataFreeps}/>);
        }
        else {
            return null;
        }
    });
    return (<>
    <div>
      {allCards}
    </div>
      <FreepsAdd_jsx_1.FreepsAdd freepsOrCreeps={props.freepsOrCreeps} fullDataFreeps={props.fullDataFreeps} setFullDataFreeps={props.setFullDataFreeps}/>
    </>);
}
exports.default = FreepsMain;
//# sourceMappingURL=FreepsMain.jsx.map