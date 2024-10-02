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
exports.defaultTerrainProp = exports.defaultRyuutamaForm = void 0;
var react_1 = require("react");
var randomColor = require('randomcolor'); // import the script
var React = require("react");
var Box_1 = require("@mui/material/Box");
var Paper_1 = require("@mui/material/Paper");
var Grid_1 = require("@mui/material/Grid");
var Grid2_1 = require("@mui/material/Grid2");
var styles_1 = require("@mui/material/styles");
var MainStage_jsx_1 = require("./Stage/MainStage.jsx");
var FreepsMain_jsx_1 = require("./Stage/Pieces/Freeps/FreepsMain.jsx");
var FreepsSampleData_jsx_1 = require("./Stage/Pieces/Freeps/FreepsSampleData.jsx");
var material_1 = require("@mui/material");
var UserContext_jsx_1 = require("./UserContext.jsx");
var Dice_jsx_1 = require("./Dice/Dice.jsx");
var setForm_jsx_1 = require("../Common/setForm.jsx");
exports.defaultRyuutamaForm = {
    weather: "./image/Ryuutama/Weather/Ryuutama_Clear_Skies.png",
    terrainType: "./image/Ryuutama/Terrain/Ryuutama_Alpine.png",
    initiative: 30,
    round: 0,
    creatureData: FreepsSampleData_jsx_1.FreepsSampleData
};
exports.defaultTerrainProp = {
    description: "Add description here",
    title: "Set Prop"
};
function Ryuutama() {
    var _a = (0, setForm_jsx_1.useForm)(exports.defaultRyuutamaForm), form = _a[0], setForm = _a[1];
    var _b = (0, react_1.useState)([]), fullDataCreeps = _b[0], setFullDataCreeps = _b[1];
    var _c = (0, react_1.useState)(FreepsSampleData_jsx_1.FreepsSampleData), fullDataFreeps = _c[0], setFullDataFreeps = _c[1];
    var _d = (0, react_1.useState)(Array.from({ length: 10 }, function () { return (__assign({}, exports.defaultTerrainProp)); })), terrainProps = _d[0], setTerrainProps = _d[1];
    var mainStageComponent = <MainStage_jsx_1.default terrainProps={terrainProps} setTerrainProps={setTerrainProps} creatureData={fullDataFreeps} key={'MainStage'} form={form} setForm={setForm}/>;
    var _e = (0, react_1.useState)(0), initiative = _e[0], setInitiative = _e[1];
    var _f = (0, react_1.useState)('./image/Ryuutama/Weather/Ryuutama_Clear_Skies.png'), weather = _f[0], setWeather = _f[1];
    var _g = (0, react_1.useState)('./image/Ryuutama/Terrain/Ryuutama_Alpine.png'), terrainType = _g[0], setTerrainType = _g[1];
    var myObject = { id: 1, name: 'Example' };
    // Create an array with 10 distinct copies of the object
    var arrayWithCopies = Array.from({ length: 10 }, function () { return (__assign({}, myObject)); });
    console.log(arrayWithCopies);
    var _h = (0, react_1.useState)([]), arrayProps = _h[0], setArrayProps = _h[1];
    var _j = (0, react_1.useState)('unset'), first = _j[0], setFirst = _j[1];
    var _k = (0, react_1.useState)('white'), second = _k[0], setSecond = _k[1];
    var _l = (0, react_1.useState)('white'), third = _l[0], setThird = _l[1];
    var _m = (0, react_1.useState)('Set Prop'), title1 = _m[0], setTitle1 = _m[1];
    var _o = (0, react_1.useState)(0), benefit1 = _o[0], setBenefit1 = _o[1];
    var _p = (0, react_1.useState)(0), benefitPermanent1 = _p[0], setBenefitPermanent1 = _p[1];
    var _q = (0, react_1.useState)('Set Prop'), title2 = _q[0], setTitle2 = _q[1];
    var _r = (0, react_1.useState)(0), benefit2 = _r[0], setBenefit2 = _r[1];
    var _s = (0, react_1.useState)(0), benefitPermanent2 = _s[0], setBenefitPermanent2 = _s[1];
    var _t = (0, react_1.useState)('Set Prop'), title3 = _t[0], setTitle3 = _t[1];
    var _u = (0, react_1.useState)(0), benefit3 = _u[0], setBenefit3 = _u[1];
    var _v = (0, react_1.useState)(0), benefitPermanent3 = _v[0], setBenefitPermanent3 = _v[1];
    var _w = (0, react_1.useState)('Set Prop'), title4 = _w[0], setTitle4 = _w[1];
    var _x = (0, react_1.useState)(0), benefit4 = _x[0], setBenefit4 = _x[1];
    var _y = (0, react_1.useState)(0), benefitPermanent4 = _y[0], setBenefitPermanent4 = _y[1];
    var _z = (0, react_1.useState)('Set Prop'), title5 = _z[0], setTitle5 = _z[1];
    var _0 = (0, react_1.useState)(0), benefit5 = _0[0], setBenefit5 = _0[1];
    var _1 = (0, react_1.useState)(0), benefitPermanent5 = _1[0], setBenefitPermanent5 = _1[1];
    var _2 = (0, react_1.useState)('Set Prop'), title6 = _2[0], setTitle6 = _2[1];
    var _3 = (0, react_1.useState)(0), benefit6 = _3[0], setBenefit6 = _3[1];
    var _4 = (0, react_1.useState)(0), benefitPermanent6 = _4[0], setBenefitPermanent6 = _4[1];
    var _5 = (0, react_1.useState)('Set Prop'), title7 = _5[0], setTitle7 = _5[1];
    var _6 = (0, react_1.useState)(0), benefit7 = _6[0], setBenefit7 = _6[1];
    var _7 = (0, react_1.useState)(0), benefitPermanent7 = _7[0], setBenefitPermanent7 = _7[1];
    var _8 = (0, react_1.useState)('Set Prop'), title8 = _8[0], setTitle8 = _8[1];
    var _9 = (0, react_1.useState)(0), benefit8 = _9[0], setBenefit8 = _9[1];
    var _10 = (0, react_1.useState)(0), benefitPermanent8 = _10[0], setBenefitPermanent8 = _10[1];
    var _11 = (0, react_1.useState)('Set Prop'), title9 = _11[0], setTitle9 = _11[1];
    var _12 = (0, react_1.useState)(0), benefit9 = _12[0], setBenefit9 = _12[1];
    var _13 = (0, react_1.useState)(0), benefitPermanent9 = _13[0], setBenefitPermanent9 = _13[1];
    var _14 = (0, react_1.useState)('Set Prop'), title10 = _14[0], setTitle10 = _14[1];
    var _15 = (0, react_1.useState)(0), benefit10 = _15[0], setBenefit10 = _15[1];
    var _16 = (0, react_1.useState)(0), benefitPermanent10 = _16[0], setBenefitPermanent10 = _16[1];
    //readability probably trumps in thise case, I don't want to necessarilly have everything together
    //intitiative can be check both
    var _17 = (0, react_1.useState)(0), indexFreeps = _17[0], setIndexFreeps = _17[1];
    //!Jesse this is important there needs to be something that will clean the deleted items (aka, null) at loading time
    //if initiative is equal to the number it should be fixed
    var adjustCreatureSet = function (indexOfChange, changedCard) {
        var newArray = fullDataFreeps.map(function (item, index) {
            if (index === indexOfChange) {
                return changedCard; // Update the specific object by replacing it with the new object
            }
            return item; // Return the unchanged object
        });
        setFullDataFreeps(newArray);
    };
    var clearCreatures = function () {
        setFullDataFreeps([]);
    };
    var initiativeCheck = function (event, thisInitiative) {
        //this will check initiative.  A button must be somewhere to also help this with a reset.  Perhaps
        // a crude float or something.  Perhaps in the bottom part of the ryuutama thingx
        if (thisInitiative === void 0) { thisInitiative = initiative; }
        console.log(initiative, "initiative");
        var lengthOfMonsters = fullDataFreeps.length;
        if (initiative + 1 >= fullDataFreeps.length) {
            setInitiative(0);
        }
        else {
            setInitiative(initiative + 1);
        }
    };
    var Item = (0, styles_1.styled)(Paper_1.default)(function (_a) {
        var theme = _a.theme;
        return (__assign(__assign({}, theme.typography.body2), { textAlign: 'center', color: theme.palette.text.secondary, lineHeight: '10px' }));
    });
    var darkTheme = (0, styles_1.createTheme)({ palette: { mode: 'dark' } });
    var lightTheme = (0, styles_1.createTheme)({ palette: { mode: 'light' } });
    return (<>

      <UserContext_jsx_1.default.Provider value={{
            weather: weather,
            setWeather: setWeather,
            terrainType: terrainType,
            setTerrainType: setTerrainType,
            first: first,
            setFirst: setFirst,
            second: second,
            setSecond: setSecond,
            third: third,
            setThird: setThird,
            initiative: initiative,
            title1: title1,
            setTitle1: setTitle1,
            benefit1: benefit1,
            setBenefit1: setBenefit1,
            benefitPermanent1: benefitPermanent1,
            setBenefitPermanent1: setBenefitPermanent1,
            title2: title2,
            setTitle2: setTitle2,
            benefit2: benefit2,
            setBenefit2: setBenefit2,
            benefitPermanent2: benefitPermanent2,
            setBenefitPermanent2: setBenefitPermanent2,
            title3: title3,
            setTitle3: setTitle3,
            benefit3: benefit3,
            setBenefit3: setBenefit3,
            benefitPermanent3: benefitPermanent3,
            setBenefitPermanent3: setBenefitPermanent3,
            title4: title4,
            setTitle4: setTitle4,
            benefit4: benefit4,
            setBenefit4: setBenefit4,
            benefitPermanent4: benefitPermanent4,
            setBenefitPermanent4: setBenefitPermanent4,
            title5: title5,
            setTitle5: setTitle5,
            benefit5: benefit5,
            setBenefit5: setBenefit5,
            benefitPermanent5: benefitPermanent5,
            setBenefitPermanent5: setBenefitPermanent5,
            title6: title6,
            setTitle6: setTitle6,
            benefit6: benefit6,
            setBenefit6: setBenefit6,
            benefitPermanent6: benefitPermanent6,
            setBenefitPermanent6: setBenefitPermanent6,
            title7: title7,
            setTitle7: setTitle7,
            benefit7: benefit7,
            setBenefit7: setBenefit7,
            benefitPermanent7: benefitPermanent7,
            setBenefitPermanent7: setBenefitPermanent7,
            title8: title8,
            setTitle8: setTitle8,
            benefit8: benefit8,
            setBenefit8: setBenefit8,
            benefitPermanent8: benefitPermanent8,
            setBenefitPermanent8: setBenefitPermanent8,
            title9: title9,
            setTitle9: setTitle9,
            benefit9: benefit9,
            setBenefit9: setBenefit9,
            benefitPermanent9: benefitPermanent9,
            setBenefitPermanent9: setBenefitPermanent9,
            title10: title10,
            setTitle10: setTitle10,
            benefit10: benefit10,
            setBenefit10: setBenefit10,
            benefitPermanent10: benefitPermanent10,
            setBenefitPermanent10: setBenefitPermanent10,
        }}>

        <Paper_1.default>
          <Box_1.default>
            <Grid_1.default container spacing={2}>
              {[lightTheme].map(function (theme, index) { return (<Grid2_1.default columns={3} key={index}>
                  <styles_1.ThemeProvider theme={theme}>
                    <Box_1.default sx={{
                p: 1,
                bgcolor: 'background.default',
                display: 'grid',
                gridTemplateColumns: { md: '1fr 4fr 1fr' },
                gap: 2,
            }}>

                      <Item id='Freeps' style={{ display: 'flex', flexDirection: 'column', maxHeight: "100%", overflowY: "auto" }}>

                        <FreepsMain_jsx_1.default adjustCreatureSet={adjustCreatureSet} form={form} freepsOrCreeps="freep" setForm={setForm} key={'FreepsMain'} indexPieces={initiative} setIndexPieces={setIndexFreeps} fullDataFreeps={fullDataFreeps} setFullDataFreeps={setFullDataFreeps}/>

                      </Item>

                      <Item id="main-stage">

                        {mainStageComponent}

                      </Item>

                      <Item id="creeps" style={{ display: 'flex', flexDirection: 'column' }}>

                        <FreepsMain_jsx_1.default adjustCreatureSet={adjustCreatureSet} form={form} freepsOrCreeps="creep" setForm={setForm} key={'FreepsMain'} indexPieces={initiative} setIndexPieces={setIndexFreeps} fullDataFreeps={fullDataFreeps} setFullDataFreeps={setFullDataFreeps}/>

                      </Item>

                    </Box_1.default>
                  </styles_1.ThemeProvider>
                </Grid2_1.default>); })}
            </Grid_1.default>





          </Box_1.default>



        </Paper_1.default>

        <material_1.Button onClick={clearCreatures}>Clear All</material_1.Button>
        <material_1.Button onClick={initiativeCheck}>Next Initative</material_1.Button>
        <Dice_jsx_1.default />

      </UserContext_jsx_1.default.Provider>

    </>);
}
exports.default = Ryuutama;
//# sourceMappingURL=Ryuutama.jsx.map