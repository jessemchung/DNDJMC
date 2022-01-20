"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var randomColor = require('randomcolor'); // import the script
var React = require("react");
var CreepsSampleData_jsx_1 = require("./CreepsSampleData.jsx");
var CreepsSingleCard_jsx_1 = require("./CreepsSingleCard.jsx");
var CreepsAdd_jsx_1 = require("./CreepsAdd.jsx");
;
//cards will be an array of objects
function Creeps() {
    var _a = (0, react_1.useState)(CreepsSampleData_jsx_1.CreepsSampleData), fullDataCreeps = _a[0], setFullDataCreeps = _a[1];
    var allCards = fullDataCreeps.map(function (singleCard, index) {
        return (<CreepsSingleCard_jsx_1.CreepsSingleCard creepInfo={singleCard} key={index}/>);
    });
    return (<>
      <div> Freeps </div>
      {allCards}
      {/* <CreepsSampleCard /> */}

      <CreepsAdd_jsx_1.CreepsAdd />
    </>);
}
exports.default = Creeps;
//# sourceMappingURL=CreepsMain.jsx.map