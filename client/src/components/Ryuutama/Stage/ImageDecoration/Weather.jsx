"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var React = require("react");
var styles_1 = require("@mui/material/styles");
var colors_1 = require("@mui/material/colors");
var arrayOfBenefits = ['Sun', 'Rain', 'Snow', 'Windy'];
var theme = (0, styles_1.createTheme)({
    palette: {
        primary: {
            // Purple and green play nicely together.
            main: colors_1.purple[500],
        },
        secondary: {
            // This is green.A700 as hex.
            main: '#11cb5f',
        },
    },
});
function PropsBarIndividualCard() {
    var _a = (0, react_1.useState)(0), weather = _a[0], setWeather = _a[1];
    return (<>
    <h3> {arrayOfBenefits[weather]} </h3>
    </>);
}
exports.default = PropsBarIndividualCard;
//# sourceMappingURL=Weather.jsx.map