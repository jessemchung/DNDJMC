"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var randomColor = require('randomcolor'); // import the script
var React = __importStar(require("react"));
var axios_1 = __importDefault(require("axios"));
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
    console.log('inside return');
    return (<>
    <div>hello</div>
      </>);
}
exports.default = Ryuutama;
//# sourceMappingURL=Home.jsx.map