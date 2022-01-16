"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var randomColor = require('randomcolor'); // import the script
var React = require("react");
var Box_1 = require("@mui/material/Box");
var Paper_1 = require("@mui/material/Paper");
var Grid_1 = require("@mui/material/Grid");
var styles_1 = require("@mui/material/styles");
var Weather_jsx_1 = require("./ImageDecoration/Weather.jsx");
var TerrainType_jsx_1 = require("./ImageDecoration/TerrainType.jsx");
function Image() {
    var _a = (0, react_1.useState)('./image/Ryuutama/Terrain/Ryuutama_Alpine.png'), terrainType = _a[0], setTerrainType = _a[1];
    var BackgroundPaper = (0, styles_1.styled)(Paper_1.default)(function (_a) {
        var theme = _a.theme;
        return ({
            textAlign: 'center',
            position: 'relative',
            border: '1px green solid',
            backgroundImage: "url(".concat(terrainType, ")"),
            width: '100%',
            aspectRatio: '1.5 / 1',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        });
    });
    //images are going to need to be there, it will likely need layers for a background which should be fine.
    //This is the main box
    //it will have the pieces of information in the corner
    //terrain feature needed
    return (<>
      {/* <div style={{ position: 'relative' }}> Weather on left, Terrain on right </div> */}
      {/* <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            p: 1,
            m: 1,
            bgcolor: 'background.paper',
            borderRadius: 1,
          }}
        >
          <Grid container spacing={1} columns={8}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              p: 1,
              m: 1,
              bgcolor: 'background.paper',
              borderRadius: 1,
            }}
          >
  
            <Weather />
  
            <TerrainType terrainType={terrainType} setTerrainType={setTerrainType} />
  
          </ Grid>
  
        </Box> */}



      <BackgroundPaper>

        <Box_1.default sx={{
            position: 'absolute',
            display: 'flex',
            justifyContent: 'space-between',
            top: 0,
        }}>
          <Grid_1.default container spacing={1} columns={8} sx={{
            display: 'flex',
            justifyContent: 'space-between',
            p: 1,
            m: 1,
            borderRadius: 1,
        }}>

            <Weather_jsx_1.default />

            <TerrainType_jsx_1.TerrainType terrainType={terrainType} setTerrainType={setTerrainType}/>

          </Grid_1.default>

        </Box_1.default>




        <img style={{
            height: '80%'
            // position: 'absolute',
            // top: 0,
            // left: 0,
            // border: '1px red solid',
        }} src="./image/Ryuutama.png" onClick={function () { console.log('click image'); }}/>

      </BackgroundPaper>
      {/* <div>Terrain Advantage left, Elemental Field</div>
  
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            p: 1,
            m: 1,
            bgcolor: 'background.paper',
            borderRadius: 1,
          }}
        >
  
          <Weather />
  
          <Weather />
  
        </Box> */}

    </>);
}
exports.default = Image;
//# sourceMappingURL=Image.jsx.map