"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var randomColor = require('randomcolor'); // import the script
var React = require("react");
var axios_1 = require("axios");
function Ryuutama() {
    // constructor(props) {
    //   super(props);
    //   this.state = {
    //     show: false
    //   }
    window.location.reload();
    var cheese;
    // }
    // var color = randomColor(); // a hex code for an attractive color
    var _a = (0, react_1.useState)("yes"), value = _a[0], setValue = _a[1];
    var _b = (0, react_1.useState)(0), count = _b[0], setCount = _b[1];
    var _c = (0, react_1.useState)(""), color = _c[0], setColor = _c[1];
    console.log(value, 'hello');
    axios_1.default.get('/favorites')
        .then(function (response) {
        // handle success
        console.log('should be the favorites', response.data);
    })
        .catch(function (error) {
        // handle error
        console.log(error);
    });
    function increment() {
        setCount(function (prevCount) { return prevCount + 1; });
    }
    (0, react_1.useEffect)(function () {
        setColor(randomColor());
    }, [count]);
    console.log('inside return');
    return (React.createElement(React.Fragment, null,
        React.createElement("div", null, "hello")));
}
exports.default = Ryuutama;
//# sourceMappingURL=Home.js.map