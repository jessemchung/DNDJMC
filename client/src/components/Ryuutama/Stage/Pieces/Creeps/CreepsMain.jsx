"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var randomColor = require('randomcolor'); // import the script
var React = require("react");
var CreepsSingleCard_jsx_1 = require("./CreepsSingleCard.jsx");
var CreepsAdd_jsx_1 = require("./CreepsAdd.jsx");
;
//cards will be an array of objects
function Creeps(props) {
    console.log(props.fullDataCreeps, 'this should be correct');
    var allCards = props.fullDataCreeps.map(function (singleCard, index) {
        return (<CreepsSingleCard_jsx_1.CreepsSingleCard creepInfo={singleCard} key={index}/>);
    });
    return (<>
      <div> Freeps </div>
      {allCards}
      {/* <CreepsSampleCard /> */}

      <CreepsAdd_jsx_1.CreepsAdd setFullDataCreeps={props.setFullDataCreeps} fullDataCreeps={props.fullDataCreeps}/>
    </>);
}
exports.default = Creeps;
//# sourceMappingURL=CreepsMain.jsx.map