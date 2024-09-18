"use strict";
//planning
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
//this is going to take in a button press
//output will be a number
//6 different buttons.  
//maybe a preset or save feature so that in a given session i can save a dice set
//a total must also be given.  with a reset button
//this can all likely be done just here... maybe.  Context should include an array of objects
//containing information for additional buttons
var react_1 = require("react");
var randomColor = require('randomcolor'); // import the script
var React = require("react");
var material_1 = require("@mui/material");
var Stack_1 = require("@mui/material/Stack");
function Dice() {
    var _a = (0, react_1.useState)(0), d4 = _a[0], setD4 = _a[1];
    var _b = (0, react_1.useState)(0), d6 = _b[0], setD6 = _b[1];
    var _c = (0, react_1.useState)({
        d4: 0,
        d6: 0,
        d8: 0,
        d10: 0,
        d12: 0,
        d20: 0,
    }), diceValues = _c[0], setDiceValues = _c[1];
    //should I hook them into the right things? so that I can build
    var numberGenerator = function (max, thing) {
        var _a;
        var newNumber = (Math.ceil(Math.random() * max));
        // thing(newNumber);
        setDiceValues(__assign(__assign({}, diceValues), (_a = {}, _a[thing] = newNumber, _a)));
    };
    return (<>
      <Stack_1.default direction="row" spacing={2}>


        <material_1.Button onClick={function () { numberGenerator(4, 'd4'); }}>{diceValues.d4}</material_1.Button>
        <material_1.Button onClick={function () { numberGenerator(6, 'd6'); }}>{diceValues.d6}</material_1.Button>
        <material_1.Button onClick={function () { numberGenerator(8, 'd8'); }}>{diceValues.d8}</material_1.Button>
        <material_1.Button onClick={function () { numberGenerator(10, 'd10'); }}>{diceValues.d10}</material_1.Button>
        <material_1.Button onClick={function () { numberGenerator(12, 'd12'); }}>{diceValues.d12}</material_1.Button>
        <material_1.Button onClick={function () { numberGenerator(20, 'd20'); }}>{diceValues.d20}</material_1.Button>

        {/* <Button onClick={()=> {numberGenerator(6, setD4)}}>{d4}</Button> */}


      </Stack_1.default>


    </>);
}
exports.default = Dice;
//# sourceMappingURL=Dice.jsx.map