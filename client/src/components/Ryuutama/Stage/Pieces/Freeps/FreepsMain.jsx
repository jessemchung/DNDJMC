"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var randomColor = require('randomcolor'); // import the script
var React = require("react");
var FreepsSampleCard_jsx_1 = require("./FreepsSampleCard.jsx");
var FreepsSingleCard_jsx_1 = require("./FreepsSingleCard.jsx");
var FreepsAdd_jsx_1 = require("./FreepsAdd.jsx");
function FreepsMain(props) {
    var allCards = props.fullDataFreeps.map(function (singleCard, index) {
        return (<FreepsSingleCard_jsx_1.FreepsSingleCard freepInfo={singleCard} key={index + "freeps"} fullDataFreeps={props.fullDataFreeps} setFullDataFreeps={props.setFullDataFreeps}/>);
    });
    return (<>
      <div> Freeps </div>
      <FreepsSampleCard_jsx_1.default />

      {/* <FreepsSingleCard /> */}
      {allCards}

      <FreepsAdd_jsx_1.FreepsAdd indexPieces={props.indexPieces} setIndexPieces={props.setIndexPieces} fullDataFreeps={props.fullDataFreeps} setFullDataFreeps={props.setFullDataFreeps}/>
    </>);
}
exports.default = FreepsMain;
//# sourceMappingURL=FreepsMain.jsx.map