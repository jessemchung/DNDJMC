"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreepsSingleCard = void 0;
var randomColor = require('randomcolor'); // import the script
var React = require("react");
var Box_1 = require("@mui/material/Box");
var Grid_1 = require("@mui/material/Grid");
var Card_1 = require("@mui/material/Card");
var CardContent_1 = require("@mui/material/CardContent");
var Button_1 = require("@mui/material/Button");
var Typography_1 = require("@mui/material/Typography");
;
//card likely needs to have flex to split it in a half
var CreepsSingleCard = function (prop) {
    // <Grid container spacing={1} columns={10}>
    return (<>

      <Card_1.default sx={{ display: 'flex' }} key={prop.creepInfo.name}>

        <Grid_1.default container spacing={1} columns={2}>

          <CardContent_1.default>
            <img src={prop.creepInfo.healthyImage} onClick={function () { console.log('click image'); }}/>
          </CardContent_1.default>


          <CardContent_1.default>
            <Typography_1.default variant="body1" component="div" color="primary">
              {prop.creepInfo.name}


            </Typography_1.default>


            <Box_1.default sx={{
            display: 'flex',
            justifyContent: 'space-between',
        }}>

              <Typography_1.default display="inline" variant="body2" align="left">
                HP
              </Typography_1.default>


              <Typography_1.default display="inline" variant="body2" align="left">
                {prop.creepInfo.hitpoints}


              </Typography_1.default>

            </Box_1.default>


            <Box_1.default sx={{
            display: 'flex',
            justifyContent: 'space-between',
        }}>

              <Typography_1.default display="inline" variant="body2" align="left">
                Init
              </Typography_1.default>


              <Typography_1.default display="inline" variant="body2" align="left">
                {prop.creepInfo.initiative}
              </Typography_1.default>

            </Box_1.default>


            <Box_1.default sx={{
            display: 'flex',
            justifyContent: 'space-between',
        }}>

              <Typography_1.default display="inline" variant="body2" align="left">
                Armor
              </Typography_1.default>


              <Typography_1.default display="inline" variant="body2" align="left">
                {prop.creepInfo.armor}
              </Typography_1.default>

            </Box_1.default>

            <Box_1.default sx={{
            display: 'flex',
            justifyContent: 'space-between',
        }}>


              <Typography_1.default display="inline" variant="body2" align="left">
                {prop.creepInfo.appearance}
              </Typography_1.default>

            </Box_1.default>


            <Button_1.default size="small">E</Button_1.default>



          </CardContent_1.default>

        </Grid_1.default>

      </Card_1.default>


    </>);
};
exports.CreepsSingleCard = CreepsSingleCard;
//# sourceMappingURL=CreepsSingleCard.jsx.map