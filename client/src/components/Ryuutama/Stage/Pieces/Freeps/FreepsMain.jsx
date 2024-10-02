"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var randomColor = require('randomcolor'); // import the script
var React = require("react");
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