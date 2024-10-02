"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var randomColor = require('randomcolor'); // import the script
var React = require("react");
var Box_1 = require("@mui/material/Box");
var Paper_1 = require("@mui/material/Paper");
var Grid2_1 = require("@mui/material/Grid2");
var styles_1 = require("@mui/material/styles");
var Weather_jsx_1 = require("./ImageDecoration/Weather.jsx");
var TerrainType_jsx_1 = require("./ImageDecoration/TerrainType.jsx");
var ElementalField_jsx_1 = require("./ImageDecoration/ElementalField.jsx");
var UserContext_jsx_1 = require("../UserContext.jsx");
;
function Image(props) {
    // const [] = useState<TerrainTypeInterface['possibleURL']>('./image/Ryuutama/Terrain/Ryuutama_Alpine.png');
    var _a = (0, react_1.useContext)(UserContext_jsx_1.default), terrainType = _a.terrainType, setTerrainType = _a.setTerrainType;
    var constructedColorsFreeps = new Array(10).fill(null);
    var constructedColorsCreeps = new Array(10).fill(null);
    for (var color = 0; color < props.creatureData.length; color++) {
        if (props.creatureData[color].color !== null) {
            if (props.creatureData[color].position !== null) {
                if (props.creatureData[color].creepOrFreep === "creep") {
                    constructedColorsCreeps[props.creatureData[color].position] = props.creatureData[color].color;
                }
                else {
                    // must be a freep
                    constructedColorsFreeps[props.creatureData[color].position] = props.creatureData[color].color;
                }
            }
        }
    }
    var BackgroundPaper = (0, styles_1.styled)(Paper_1.default)(function (_a) {
        var theme = _a.theme;
        return ({
            textAlign: 'center',
            position: 'relative',
            backgroundImage: "url(".concat(terrainType, ")"),
            width: '100%',
            aspectRatio: '1.5 / 1',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        });
    });
    //images are going to need to be there, it will likely need layers for a background which should be fine.
    //This is the main box
    //it will have the pieces of information in the corner
    //terrain feature needed
    return (<>
      <BackgroundPaper>
        {/* Freep Dots */}
    {/*  */}
        {/* Electric Blue (#007AFF) – Bold and energetic, great for a standout player.
            Fiery Red (#FF3B30) – A strong, attention-grabbing color perfect for a competitive player.
            Sunflower Yellow (#FFCC00) – Bright and cheerful, ideal for a positive or cheerful player.
            Emerald Green (#34C759) – A fresh, lively green that symbolizes growth and vitality.
            Vivid Purple (#AF52DE) – A rich, playful color for a unique player.
            Tangerine Orange (#FF9500) – Warm and energetic, ideal for someone who's quick or dynamic. */}

    {/* className={`box ${props.indexInitiative === props.index ? 'highlight' : ''}`} */}

      <div className={"marker ".concat(constructedColorsFreeps[0] !== null ? constructedColorsFreeps[0] : '')} style={{ "top": "45%", "left": "41%" }}></div>
      <div className={"marker ".concat(constructedColorsFreeps[1] !== null ? constructedColorsFreeps[1] : '')} style={{ "top": "50%", "left": "40%" }}></div>
      <div className={"marker ".concat(constructedColorsFreeps[2] !== null ? constructedColorsFreeps[2] : '')} style={{ "top": "40%", "left": "42%" }}></div>
      <div className={"marker ".concat(constructedColorsFreeps[3] !== null ? constructedColorsFreeps[3] : '')} style={{ "top": "55%", "left": "41%" }}></div>
      <div className={"marker ".concat(constructedColorsFreeps[4] !== null ? constructedColorsFreeps[4] : '')} style={{ "top": "60%", "left": "42%" }}></div>
      <div className={"marker ".concat(constructedColorsFreeps[5] !== null ? constructedColorsFreeps[5] : '')} style={{ "top": "50%", "left": "25%" }}></div>
      <div className={"marker ".concat(constructedColorsFreeps[6] !== null ? constructedColorsFreeps[6] : '')} style={{ "top": "35%", "left": "30%" }}></div>
      <div className={"marker ".concat(constructedColorsFreeps[7] !== null ? constructedColorsFreeps[7] : '')} style={{ "top": "25%", "left": "40%" }}></div>
      <div className={"marker ".concat(constructedColorsFreeps[8] !== null ? constructedColorsFreeps[8] : '')} style={{ "top": "65%", "left": "30%" }}></div>
      <div className={"marker ".concat(constructedColorsFreeps[9] !== null ? constructedColorsFreeps[9] : '')} style={{ "top": "75%", "left": "40%" }}></div>

      <div className={"marker ".concat(constructedColorsCreeps[0] !== null ? constructedColorsCreeps[0] : '')} style={{ "top": "45%", "left": "59%" }}></div>
      <div className={"marker ".concat(constructedColorsCreeps[1] !== null ? constructedColorsCreeps[1] : '')} style={{ "top": "50%", "left": "60%" }}></div>
      <div className={"marker ".concat(constructedColorsCreeps[2] !== null ? constructedColorsCreeps[2] : '')} style={{ "top": "40%", "left": "58%" }}></div>
      <div className={"marker ".concat(constructedColorsCreeps[3] !== null ? constructedColorsCreeps[3] : '')} style={{ "top": "55%", "left": "59%" }}></div>
      <div className={"marker ".concat(constructedColorsCreeps[4] !== null ? constructedColorsCreeps[4] : '')} style={{ "top": "60%", "left": "58%" }}></div>
      <div className={"marker ".concat(constructedColorsCreeps[5] !== null ? constructedColorsCreeps[5] : '')} style={{ "top": "50%", "left": "75%" }}></div>
      <div className={"marker ".concat(constructedColorsCreeps[6] !== null ? constructedColorsCreeps[6] : '')} style={{ "top": "35%", "left": "70%" }}></div>
      <div className={"marker ".concat(constructedColorsCreeps[7] !== null ? constructedColorsCreeps[7] : '')} style={{ "top": "25%", "left": "60%" }}></div>
      <div className={"marker ".concat(constructedColorsCreeps[8] !== null ? constructedColorsCreeps[8] : '')} style={{ "top": "65%", "left": "70%" }}></div>
      <div className={"marker ".concat(constructedColorsCreeps[9] !== null ? constructedColorsCreeps[9] : '')} style={{ "top": "75%", "left": "60%" }}></div>

        <Box_1.default sx={{
            position: 'absolute',
            display: 'flex',
            justifyContent: 'space-between',
            top: 0,
        }}>
          <Grid2_1.default container spacing={1} columns={8} sx={{
            display: 'flex',
            justifyContent: 'space-between',
            p: 1,
            m: 1,
            borderRadius: 1,
        }}>

            <Weather_jsx_1.default key={'Weather'}/>

            <div> <ElementalField_jsx_1.ElementalField key={'ElementalField'}/> </div>


            <TerrainType_jsx_1.TerrainType key={'TerrainType'} terrainType={terrainType} setTerrainType={setTerrainType}/>



          </Grid2_1.default>



        </Box_1.default>

        <Box_1.default sx={{
            position: 'absolute',
            display: 'flex',
            justifyContent: 'space-between',
            top: 0,
        }}>
          <Grid2_1.default container spacing={1} sx={{
            display: 'flex',
            justifyContent: 'space-between',
            p: 1,
            m: 1,
            borderRadius: 1,
        }}>
            <Weather_jsx_1.default key={'Weather'}/>
            <div> <ElementalField_jsx_1.ElementalField key={'ElementalField'}/> </div>
            <TerrainType_jsx_1.TerrainType key={'TerrainType'} terrainType={terrainType} setTerrainType={setTerrainType}/>
          </Grid2_1.default>

        </Box_1.default>



        <img style={{
            height: '80%'
        }} src="./image/Ryuutama.png" onClick={function () { console.log('click image'); }}/>
      </BackgroundPaper>
    </>);
}
exports.default = Image;
//# sourceMappingURL=Image.jsx.map