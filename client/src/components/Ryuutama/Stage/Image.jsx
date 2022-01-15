"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var randomColor = require('randomcolor'); // import the script
var React = require("react");
var Box_1 = require("@mui/material/Box");
var Grid_1 = require("@mui/material/Grid");
var Weather_jsx_1 = require("./ImageDecoration/Weather.jsx");
var Terrain_jsx_1 = require("./ImageDecoration/Terrain.jsx");
function Image() {
    //images are going to need to be there, it will likely need layers for a background which should be fine.
    //This is the main box
    //it will have the pieces of information in the corner
    //terrain feature needed
    return (<>
      <div style={{ position: 'relative' }}> Weather on left, Terrain on right </div>
      <Box_1.default sx={{
            display: 'flex',
            justifyContent: 'space-between',
            p: 1,
            m: 1,
            bgcolor: 'background.paper',
            borderRadius: 1,
        }}>
        <Grid_1.default container spacing={1} columns={8} sx={{
            display: 'flex',
            justifyContent: 'space-between',
            p: 1,
            m: 1,
            bgcolor: 'background.paper',
            borderRadius: 1,
        }}>

        <Weather_jsx_1.default />

        <Terrain_jsx_1.default />

        </Grid_1.default>

      </Box_1.default>





      <img src="./image/Ryuutama.png" onClick={function () { console.log('click image'); }}/>


      <div>Terrain Advantage left, Terrain Toggle Right</div>

      <Box_1.default sx={{
            display: 'flex',
            justifyContent: 'space-between',
            p: 1,
            m: 1,
            bgcolor: 'background.paper',
            borderRadius: 1,
        }}>

        <Weather_jsx_1.default />

        <Weather_jsx_1.default />

      </Box_1.default>

    </>);
}
exports.default = Image;
//# sourceMappingURL=Image.jsx.map