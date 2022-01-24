"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FreepsSingleCard = void 0;
var React = require("react");
var styles_1 = require("@mui/material/styles");
var Box_1 = require("@mui/material/Box");
var Card_1 = require("@mui/material/Card");
var CardContent_1 = require("@mui/material/CardContent");
var CardMedia_1 = require("@mui/material/CardMedia");
var Typography_1 = require("@mui/material/Typography");
var AddCircleOutline_1 = require("@mui/icons-material/AddCircleOutline");
var RemoveCircleOutline_1 = require("@mui/icons-material/RemoveCircleOutline");
function FreepsSingleCard(props) {
    var theme = (0, styles_1.useTheme)();
    return (<Card_1.default>
      <Box_1.default sx={{ display: "grid", gridTemplateColumns: '2fr 1fr', alignItems: 'center', }}>
        <CardContent_1.default>
          <Typography_1.default component="div" variant="body2">
            {props.freepInfo.name}
          </Typography_1.default>

          <Box_1.default sx={{
            display: 'flex',
            justifyContent: 'space-between',
        }}>




            <Typography_1.default display="inline" variant="body2" align="left">
              HP
            </Typography_1.default>

            <RemoveCircleOutline_1.default />
            <Typography_1.default display="inline" variant="body2" align="left">
             {props.freepInfo.hitpoints} / {props.freepInfo.maxHitpoints}


            </Typography_1.default>

            <AddCircleOutline_1.default />
          </Box_1.default>


          <Box_1.default sx={{
            display: 'flex',
            justifyContent: 'space-between',
        }}>

            <Typography_1.default display="inline" variant="body2" align="left">
              Init
            </Typography_1.default>


            <Typography_1.default display="inline" variant="body2" align="left">
              {props.freepInfo.initiative}
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
              {props.freepInfo.armor}
            </Typography_1.default>

          </Box_1.default>

        </CardContent_1.default>

        <CardMedia_1.default component="img" image="/image/Personal/Ra.png" alt="A freep, a hero, a main honcho"/>
      </Box_1.default>

    </Card_1.default>);
}
exports.FreepsSingleCard = FreepsSingleCard;
//# sourceMappingURL=FreepsSingleCard.jsx.map