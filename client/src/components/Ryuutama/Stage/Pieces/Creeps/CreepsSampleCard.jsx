"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var randomColor = require('randomcolor'); // import the script
var React = require("react");
var Box_1 = require("@mui/material/Box");
var Grid_1 = require("@mui/material/Grid");
var Card_1 = require("@mui/material/Card");
var CardContent_1 = require("@mui/material/CardContent");
var Button_1 = require("@mui/material/Button");
var Typography_1 = require("@mui/material/Typography");
//card likely needs to have flex to split it in a half
function FreepsSampleCard() {
    // <Grid container spacing={1} columns={10}>
    return (<>

      <Card_1.default sx={{ display: 'flex' }}>

        <Grid_1.default container spacing={1} columns={2}>

          <CardContent_1.default>
            <img src="./image/Ryuutama/SampleIcons/BradGood.png" onClick={function () { console.log('click image'); }}/>
          </CardContent_1.default>


          <CardContent_1.default>
            <Typography_1.default variant="body1" component="div" color="primary">
              Sample Card


            </Typography_1.default>


            <Box_1.default sx={{
            display: 'flex',
            justifyContent: 'space-between',
        }}>

              <Typography_1.default display="inline" variant="body2" align="left">
                HP
              </Typography_1.default>


              <Typography_1.default display="inline" variant="body2" align="left">
                5


              </Typography_1.default>

            </Box_1.default>


            <Box_1.default sx={{
            display: 'flex',
            justifyContent: 'space-between',
        }}>

              <Typography_1.default display="inline" variant="body2" align="left">
                Initiative
              </Typography_1.default>


              <Typography_1.default display="inline" variant="body2" align="left">
                0


              </Typography_1.default>

            </Box_1.default>


            <Typography_1.default variant="body2" align="left">
              Armor
            </Typography_1.default>

            <Button_1.default size="small">E</Button_1.default>



          </CardContent_1.default>

        </Grid_1.default>

      </Card_1.default>


    </>);
}
exports.default = FreepsSampleCard;
//# sourceMappingURL=CreepsSampleCard.jsx.map