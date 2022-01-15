"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var randomColor = require('randomcolor'); // import the script
var React = require("react");
var CreepsSampleCard_jsx_1 = require("./CreepsSampleCard.jsx");
var CreepsSampleData_jsx_1 = require("./CreepsSampleData.jsx");
var CreepsSingleCard_jsx_1 = require("./CreepsSingleCard.jsx");
var CreepsAdd_jsx_1 = require("./CreepsAdd.jsx");
//add creep button on the bottom
//this will need to grab from database or from sample data set
//cards will be an array of objects
function Creeps() {
    var _a = (0, react_1.useState)(CreepsSampleData_jsx_1.CreepsSampleData), fullDataCreeps = _a[0], setFullDataCreeps = _a[1];
    var allCards = fullDataCreeps.map(function (singleCard) {
        return (<CreepsSingleCard_jsx_1.CreepsSingleCard creepInfo={singleCard}/>);
    });
    return (<>
      <div> Freeps </div>
      {allCards}
      <CreepsSampleCard_jsx_1.default />

      <CreepsAdd_jsx_1.CreepsAdd />
    </>);
}
exports.default = Creeps;
//# sourceMappingURL=CreepsMain.jsx.map