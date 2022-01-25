"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FreepsSingleCard = void 0;
var React = require("react");
var react_1 = require("react");
var styles_1 = require("@mui/material/styles");
var Box_1 = require("@mui/material/Box");
var Card_1 = require("@mui/material/Card");
var CardContent_1 = require("@mui/material/CardContent");
var CardMedia_1 = require("@mui/material/CardMedia");
var Typography_1 = require("@mui/material/Typography");
var AddCircleOutline_1 = require("@mui/icons-material/AddCircleOutline");
var RemoveCircleOutline_1 = require("@mui/icons-material/RemoveCircleOutline");
//for canceling icons, it may be useful to index values so that things can have
// the same name and be deleted quickly
// should creeps and freeps be fused together?
var Cancel_1 = require("@mui/icons-material/Cancel");
function FreepsSingleCard(props) {
    var theme = (0, styles_1.useTheme)();
    var _a = (0, react_1.useState)(false), disappear = _a[0], setDisappear = _a[1];
    var handleClick = function (event) {
        event.preventDefault();
        console.log('click');
        //this must remove the dangerous element first
        setDisappear(true);
        //then it must clean up
        // let change = JSON.parse(JSON.stringify(props.fullDataFreeps));
        // let currentIndex = props.freepInfo.index;
        // for (let i = 0; i < props.fullDataFreeps.length; i++) {
        //   console.log(i, 'is this working');
        //   if (props.fullDataFreeps[i].index === currentIndex) {
        //     change.splice(i, 1);
        //   }
        //   if (change[i] === undefined) {
        //     break;
        //   }
        //   change[i].index = i;
        // }
        // console.log('did we make it here', change)
        // props.setFullDataFreeps(change);
    };
    if (disappear === true) {
        return null;
    }
    return (<Card_1.default>
      <Cancel_1.default className={"CancelButton"} sx={{ float: 'right' }} onClick={handleClick}/>

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