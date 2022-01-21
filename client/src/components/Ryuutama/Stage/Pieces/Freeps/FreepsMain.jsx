"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var randomColor = require('randomcolor'); // import the script
var React = require("react");
var FreepsSampleCard_jsx_1 = require("./FreepsSampleCard.jsx");
var FreepsSingleCard_jsx_1 = require("./FreepsSingleCard.jsx");
function FreepsMain(props) {
    var allCards = props.fullDataFreeps.map(function (singleCard, index) {
        return (<FreepsSingleCard_jsx_1.FreepsSingleCard freepInfo={singleCard} key={index + "freeps"}/>);
    });
    return (<>
      <div> Freeps </div>
      <FreepsSampleCard_jsx_1.default />

      <FreepsSingleCard_jsx_1.FreepsSingleCard />



    </>);
}
exports.default = FreepsMain;
//# sourceMappingURL=FreepsMain.jsx.map