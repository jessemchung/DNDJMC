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
function FreepsSingleCard(props) {
    var theme = (0, styles_1.useTheme)();
    return (<Card_1.default>
      <Box_1.default sx={{ display: "grid", gridTemplateColumns: '2fr 1fr' }}>
        <CardContent_1.default>
          <Typography_1.default component="div" variant="h5">
            {props.freepInfo.maxHitpoints}
          </Typography_1.default>
        </CardContent_1.default>

        <CardMedia_1.default component="img" image="/image/Ryuutama/SampleIcons/BradBad.png" alt="Live from space album cover"/>
      </Box_1.default>

    </Card_1.default>);
}
exports.FreepsSingleCard = FreepsSingleCard;
//# sourceMappingURL=FreepsSingleCard.jsx.map