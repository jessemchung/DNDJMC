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
//this is going to take in a button press
//output will be a number
//6 different buttons.  
//maybe a preset or save feature so that in a given session i can save a dice set
//a total must also be given.  with a reset button
//this can all likely be done just here... maybe.  Context should include an array of objects
//containing information for additional buttons
var react_1 = require("react");
var randomColor = require('randomcolor'); // import the script
var React = __importStar(require("react"));
var material_1 = require("@mui/material");
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
    var numberGenerator = function (max, selectedDice) {
        var _a;
        var newNumber = (Math.ceil(Math.random() * max));
        // thing(newNumber);
        setDiceValues(__assign(__assign({}, diceValues), (_a = {}, _a[selectedDice] = newNumber, _a)));
    };
    // probably better for a table adjustment
    return (<>
      {/* 6 columns each */}
      <table style={{ "width": "100%" }}>

        <tbody style={{ "width": "100%", textAlign: "center" }}>
          <tr style={{ "width": "100%" }}>
            <td>
              D4
            </td>
            <td>
              D6
            </td>
            <td>
              D8
            </td>
            <td>
              D10
            </td>
            <td>
              D12
            </td>
            <td>
              D20
            </td>
          </tr>
          <tr>
            <td>
              <material_1.Button onClick={function () { numberGenerator(4, 'd4'); }}>{diceValues.d4}</material_1.Button>

            </td>
            <td>

              <material_1.Button onClick={function () { numberGenerator(6, 'd6'); }}>{diceValues.d6}</material_1.Button>

            </td>
            <td>
              <material_1.Button onClick={function () { numberGenerator(8, 'd8'); }}>{diceValues.d8}</material_1.Button>

            </td>
            <td>
              <material_1.Button onClick={function () { numberGenerator(10, 'd10'); }}>{diceValues.d10}</material_1.Button>

            </td>
            <td>
              <material_1.Button onClick={function () { numberGenerator(12, 'd12'); }}>{diceValues.d12}</material_1.Button>

            </td>
            <td>
              <material_1.Button onClick={function () { numberGenerator(20, 'd20'); }}>{diceValues.d20}</material_1.Button>
            </td>

          </tr>
        </tbody>

      </table>


    </>);
}
exports.default = Dice;
//# sourceMappingURL=Dice.jsx.map