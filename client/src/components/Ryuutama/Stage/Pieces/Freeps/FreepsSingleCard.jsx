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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FreepsSingleCard = void 0;
var React = __importStar(require("react"));
var react_1 = require("react");
var styles_1 = require("@mui/material/styles");
var Box_1 = __importDefault(require("@mui/material/Box"));
var Card_1 = __importDefault(require("@mui/material/Card"));
var CardContent_1 = __importDefault(require("@mui/material/CardContent"));
var CardMedia_1 = __importDefault(require("@mui/material/CardMedia"));
var Typography_1 = __importDefault(require("@mui/material/Typography"));
var AddCircleOutline_1 = __importDefault(require("@mui/icons-material/AddCircleOutline"));
var RemoveCircleOutline_1 = __importDefault(require("@mui/icons-material/RemoveCircleOutline"));
// should creeps and freeps be fused together?
var Cancel_1 = __importDefault(require("@mui/icons-material/Cancel"));
var UserContext_jsx_1 = __importDefault(require("../../../UserContext.jsx"));
var FreepsAdd_jsx_1 = require("./FreepsAdd.jsx");
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
        console.log(props.fullDataFreeps, "deletion in progress");
        var copyFullDataFreep = props.fullDataFreeps.filter(function (item, index) {
            if (index === props.index) {
                return false;
            }
            else {
                return true;
            }
        });
        props.setFullDataFreeps(copyFullDataFreep);
    };
    var handleIncrease = function () {
        var _a;
        var newNumber = freepInfo.hitpoints++;
        var newFreep = __assign(__assign({}, freepInfo), (_a = {}, _a[freepInfo.hitpoints] = newNumber, _a));
        var newArray = props.fullDataFreeps.map(function (item, index) {
            if (index === props.index) {
                return newFreep; // Update the specific object
            }
            return item; // Return the unchanged object
        });
        props.setFullDataFreeps(newArray);
    };
    var handleDecrease = function () {
        var _a;
        var newNumber = freepInfo.hitpoints--;
        var newFreep = __assign(__assign({}, freepInfo), (_a = {}, _a[freepInfo.hitpoints] = newNumber, _a));
        var newArray = props.fullDataFreeps.map(function (item, index) {
            if (index === props.index) {
                return newFreep; // Update the specific object
            }
            return item; // Return the unchanged object
        });
        props.setFullDataFreeps(newArray);
    };
    var handleClose = function () {
        setOpenChangeDialogue(false);
    };
    var handleOpen = function () {
        setOpenChangeDialogue(true);
    };
    var editing = <FreepsAdd_jsx_1.FreepsAdd index={props.index} edit={openChangeDialogue} setEdit={setOpenChangeDialogue} freepInfo={props.freepInfo} freepsOrCreeps={props.freepInfo.creepOrFreep} fullDataFreeps={props.fullDataFreeps} setFullDataFreeps={props.setFullDataFreeps}/>;
    return (<>
      {openChangeDialogue === true ? editing : ""}
      <Card_1.default className={"box ".concat(props.initiative === props.index ? 'highlight' : '')}>
        <Cancel_1.default className={"CancelButton"} sx={{ float: 'right' }} onClick={handleDeletion}/>
        <Box_1.default sx={{ display: "grid", gridTemplateColumns: '2fr 1fr', alignItems: 'center', }}>
          <CardContent_1.default>
            <Typography_1.default className={props.freepInfo.color !== null ? props.freepInfo.color : ""} component="div" variant="body2">
              {props.freepInfo.name}
            </Typography_1.default>
            <Box_1.default sx={{
            display: 'flex',
            justifyContent: 'space-between',
        }}>
              <Typography_1.default display="inline" variant="body2" align="left">
                HP
              </Typography_1.default>
              <RemoveCircleOutline_1.default onClick={function () { return handleDecrease(); }} sx={{
            cursor: 'pointer',
            fontSize: '1rem', // Set a custom font size (adjust as needed)
        }}/>            <Typography_1.default display="inline" variant="body2" align="left">
                {props.freepInfo.hitpoints} / {props.freepInfo.maxHitpoints}
              </Typography_1.default>
              <AddCircleOutline_1.default onClick={function () { return handleIncrease(); }} sx={{
            cursor: 'pointer',
            fontSize: '1rem', // Set a custom font size (adjust as needed)
        }}/>          </Box_1.default>
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
                Defense
              </Typography_1.default>
              <Typography_1.default display="inline" variant="body2" align="left">
                {props.freepInfo.initiative > props.freepInfo.shield ? props.freepInfo.initiative : props.freepInfo.shield}
              </Typography_1.default>

            </Box_1.default>

          </CardContent_1.default>

          <CardMedia_1.default component="img" image={freepInfo.healthyImage} className="creature-image" onClick={function () { return handleOpen(); }} alt="A freep, a hero, a main honcho"/>
        </Box_1.default>

      </Card_1.default>
    </>);
}
exports.FreepsSingleCard = FreepsSingleCard;
//# sourceMappingURL=FreepsSingleCard.jsx.map