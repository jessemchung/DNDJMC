"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var randomColor = require('randomcolor'); // import the script
var React = require("react");
function Image() {
    var cheese;
    // }
    // var color = randomColor(); // a hex code for an attractive color
    //images are going to need to be there, it will likely need layers for a background which should be fine.
    //This is the main box
    //it will have the pieces of information in the corner
    //terrain feature needed
    return (<>
      <div> Weather on left, Time of Day of Right </div>



      <img src="./image/Ryuutama.png" onClick={function () { console.log('click image'); }}/>


      <div>Terrain Advantage left, Terrain Toggle Right</div>
    </>);
}
exports.default = Image;
//# sourceMappingURL=Image.jsx.map