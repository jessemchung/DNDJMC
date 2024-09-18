"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var randomColor = require('randomcolor'); // import the script
var React = require("react");
var Card_1 = require("@mui/material/Card");
var CardContent_1 = require("@mui/material/CardContent");
var Typography_1 = require("@mui/material/Typography");
//card likely needs to have flex to split it in a half
function FreepsSampleCard() {
    return (<>

      <Card_1.default sx={{ display: 'flex' }}>
        <CardContent_1.default>
          <Typography_1.default variant="body1" component="div">
            Sample Card
          </Typography_1.default>
          <Typography_1.default variant="body2" color="error">
            details
          </Typography_1.default>
        </CardContent_1.default>


        <CardContent_1.default>
          <Typography_1.default variant="body1" component="div">
            Sample Card
          </Typography_1.default>

          <Typography_1.default variant="body2" color="error">
            details
          </Typography_1.default>
        </CardContent_1.default>



      </Card_1.default>


    </>);
}
exports.default = FreepsSampleCard;
//# sourceMappingURL=FreepsSampleCard.jsx.map