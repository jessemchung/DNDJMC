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
exports.CreepsSingleCard = void 0;
var react_1 = require("react");
var randomColor = require('randomcolor'); // import the script
var React = require("react");
var Box_1 = require("@mui/material/Box");
var CardMedia_1 = require("@mui/material/CardMedia");
var Cancel_1 = require("@mui/icons-material/Cancel");
var Card_1 = require("@mui/material/Card");
var CardContent_1 = require("@mui/material/CardContent");
var Button_1 = require("@mui/material/Button");
var Typography_1 = require("@mui/material/Typography");
var AddCircleOutline_1 = require("@mui/icons-material/AddCircleOutline");
var RemoveCircleOutline_1 = require("@mui/icons-material/RemoveCircleOutline");
var RyuutamaDialogue_jsx_1 = require("../../../Generic/RyuutamaDialogue.jsx");
var RyuutamaTextField_jsx_1 = require("../../../Generic/RyuutamaTextField.jsx");
var UserContext_jsx_1 = require("../../../UserContext.jsx");
;
//!Jesse unfinished
//creeps images should vibrate when taking damage or something to that effect
//card likely needs to have flex to split it in a half
var CreepsSingleCard = function (prop) {
    var _a = (0, react_1.useState)(false), invisible = _a[0], setInvisible = _a[1];
    var _b = (0, react_1.useState)(prop.creepInfo), creepInfo = _b[0], setCreepInfo = _b[1];
    var _c = (0, react_1.useState)(false), openChangeDialogue = _c[0], setOpenChangeDialogue = _c[1];
    var _d = (0, react_1.useState)('name'), nameOfEdit = _d[0], setNameOfEdit = _d[1];
    var initiative = (0, react_1.useContext)(UserContext_jsx_1.default).initiative;
    var matchingInitiative = false;
    if (initiative === creepInfo.initiative) {
        matchingInitiative = true;
    }
    var handleClick = function (event) {
        event.preventDefault();
        var nameCreeps = prop.creepInfo.name;
        var copyFullDataCreep = JSON.parse(JSON.stringify(prop.fullDataCreeps));
        var lengthFullDataCreep = prop.fullDataCreeps.length;
        for (var singleCard = 0; singleCard < lengthFullDataCreep; singleCard++) {
            if (copyFullDataCreep[singleCard].name === nameCreeps) {
                copyFullDataCreep.splice(singleCard, 1);
                prop.setFullDataCreeps(copyFullDataCreep);
            }
        }
    };
    var handleIncrease = function () {
        var _a;
        var newNumber = creepInfo.hitpoints++;
        setCreepInfo(__assign(__assign({}, creepInfo), (_a = {}, _a[creepInfo.hitpoints] = newNumber, _a)));
    };
    var handleDecrease = function () {
        var _a;
        var newNumber = creepInfo.hitpoints--;
        setCreepInfo(__assign(__assign({}, creepInfo), (_a = {}, _a[creepInfo.hitpoints] = newNumber, _a)));
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
        setCreepInfo(__assign(__assign({}, creepInfo), (_a = {}, _a[name] = value, _a)));
    };
    var buttonArray = [
        <Button_1.default key={'agree'} onClick={handleClose} autoFocus>Save</Button_1.default>
    ];
    var textFields = <RyuutamaTextField_jsx_1.RyuutamaTextField name={nameOfEdit} label={nameOfEdit} value={creepInfo[nameOfEdit]} onChange={onChange} type='string'/>;
    if (invisible) {
        return null;
    }
    return (<>
      <Card_1.default className={matchingInitiative ? 'MatchInitiative' : 'NotMatchInitiative'}>
        <Cancel_1.default className={"CancelButton"} sx={{ float: 'right' }} onClick={handleClick}/>
        <Box_1.default sx={{ display: "grid", gridTemplateColumns: '1fr 2fr', alignItems: 'center', }}>
          <CardMedia_1.default component="img" image={creepInfo.healthyImage} alt="A freep, a hero, a main honcho" onClick={function () { console.log('click image'); }}/>
          <CardContent_1.default>
            <Typography_1.default variant="body2" component="div" color="primary" onClick={function () { handleOpen('name'); }}>
              {creepInfo.name}
            </Typography_1.default>
            <Box_1.default sx={{
            display: 'flex',
            justifyContent: 'space-between',
        }}>
              <Typography_1.default display="inline" variant="body2" align="left">
                HP
              </Typography_1.default>
              <RemoveCircleOutline_1.default onClick={handleDecrease}/>
              <Typography_1.default display="inline" variant="body2" align="left">
                {creepInfo.hitpoints}


              </Typography_1.default>

              <AddCircleOutline_1.default onClick={handleIncrease}/>
            </Box_1.default>


            <Box_1.default sx={{
            display: 'flex',
            justifyContent: 'space-between',
        }}>

              <Typography_1.default display="inline" variant="body2" align="left" onClick={function () { handleOpen('initiative'); }}>
                Init
              </Typography_1.default>


              <Typography_1.default display="inline" variant="body2" align="left">
                {creepInfo.initiative}
              </Typography_1.default>

            </Box_1.default>


            <Box_1.default sx={{
            display: 'flex',
            justifyContent: 'space-between',
        }}>

              <Typography_1.default display="inline" variant="body2" align="left" onClick={function () { handleOpen('armor'); }}>
                Armor
              </Typography_1.default>


              <Typography_1.default display="inline" variant="body2" align="left">
                {creepInfo.armor}
              </Typography_1.default>

            </Box_1.default>

            <Box_1.default sx={{
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'nowrap',
        }}>


              <Typography_1.default display="inline" variant="body2" align="left" onClick={function () { handleOpen('appearance'); }}>
                {creepInfo.appearance}
              </Typography_1.default>

            </Box_1.default>
          </CardContent_1.default>

        </Box_1.default>
      </Card_1.default>
      <RyuutamaDialogue_jsx_1.RyuutamaDialogue open={openChangeDialogue} handleClose={handleClose} title={'Change Property'} body={'Once there was a war'} buttons={buttonArray}> 
        {textFields}
      </RyuutamaDialogue_jsx_1.RyuutamaDialogue>

    </>);
};
exports.CreepsSingleCard = CreepsSingleCard;
//# sourceMappingURL=CreepsSingleCard.jsx.map