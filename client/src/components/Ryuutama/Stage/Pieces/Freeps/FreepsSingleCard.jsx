"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var RyuutamaTextField_jsx_1 = require("../../../Generic/RyuutamaTextField.jsx");
//for canceling icons, it may be useful to index values so that things can have
// the same name and be deleted quickly
// should creeps and freeps be fused together?
var Cancel_1 = require("@mui/icons-material/Cancel");
var material_1 = require("@mui/material");
var UserContext_jsx_1 = require("../../../UserContext.jsx");
function FreepsSingleCard(props) {
    var theme = (0, styles_1.useTheme)();
    var _a = (0, react_1.useState)(false), invisible = _a[0], setInvisible = _a[1];
    var _b = (0, react_1.useState)(false), openChangeDialogue = _b[0], setOpenChangeDialogue = _b[1];
    var _c = (0, react_1.useState)('name'), nameOfEdit = _c[0], setNameOfEdit = _c[1];
    var _d = (0, react_1.useState)(props.freepInfo), freepInfo = _d[0], setFreepInfo = _d[1];
    var initiative = (0, react_1.useContext)(UserContext_jsx_1.default).initiative;
    var matchingInitiative = false;
    if (initiative === freepInfo.initiative) {
        matchingInitiative = true;
    }
    var handleDeletion = function (event) {
        event.preventDefault();
        var nameFreep = props.freepInfo.name;
        var copyFullDataFreep = JSON.parse(JSON.stringify(props.fullDataFreeps));
        var lengthFullDataFreep = props.fullDataFreeps.length;
        for (var singleCard = 0; singleCard < lengthFullDataFreep; singleCard++) {
            if (copyFullDataFreep[singleCard].name === nameFreep) {
                copyFullDataFreep.splice(singleCard, 1);
                props.setFullDataFreeps(copyFullDataFreep);
            }
        }
    };
    var handleIncrease = function () {
        var _a;
        var newNumber = freepInfo.hitpoints++;
        setFreepInfo(__assign(__assign({}, freepInfo), (_a = {}, _a[freepInfo.hitpoints] = newNumber, _a)));
    };
    var handleDecrease = function () {
        var _a;
        var newNumber = freepInfo.hitpoints--;
        setFreepInfo(__assign(__assign({}, freepInfo), (_a = {}, _a[freepInfo.hitpoints] = newNumber, _a)));
    };
    var handleClose = function () {
        setOpenChangeDialogue(false);
    };
    var handleOpen = function (name) {
        setNameOfEdit(name);
        setOpenChangeDialogue(true);
    };
    var onChange = function (event) {
        var _a;
        var _b = event.target, name = _b.name, value = _b.value;
        if (isNaN(parseInt(value))) {
            value = parseInt(value);
        }
        setFreepInfo(__assign(__assign({}, freepInfo), (_a = {}, _a[name] = value, _a)));
    };
    var buttonArray = [
        <material_1.Button key={'agree'} onClick={handleClose} autoFocus>Save</material_1.Button>
    ];
    var textFields = <RyuutamaTextField_jsx_1.RyuutamaTextField name={nameOfEdit} label={nameOfEdit} value={freepInfo[nameOfEdit]} onChange={onChange} type='string'/>;
    if (invisible === true) {
        return null;
    }
    return (<Card_1.default className={matchingInitiative ? 'MatchInitiative' : 'NotMatchInitiative'}>
      <Cancel_1.default className={"CancelButton"} sx={{ float: 'right' }} onClick={handleDeletion}/>
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
            <RemoveCircleOutline_1.default onClick={function () { return console.log("hello"); }}/>
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