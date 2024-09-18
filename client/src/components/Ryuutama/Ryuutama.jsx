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
var react_1 = require("react");
var randomColor = require('randomcolor'); // import the script
var React = require("react");
var Box_1 = require("@mui/material/Box");
var Paper_1 = require("@mui/material/Paper");
var Grid_1 = require("@mui/material/Grid");
var styles_1 = require("@mui/material/styles");
var MainStage_jsx_1 = require("./Stage/MainStage.jsx");
var FreepsMain_jsx_1 = require("./Stage/Pieces/Freeps/FreepsMain.jsx");
var CreepsMain_jsx_1 = require("./Stage/Pieces/Creeps/CreepsMain.jsx");
var FreepsSampleData_jsx_1 = require("./Stage/Pieces/Freeps/FreepsSampleData.jsx");
var material_1 = require("@mui/material");
var UserContext_jsx_1 = require("./UserContext.jsx");
var Dice_jsx_1 = require("./Dice/Dice.jsx");
var quickTest = <MainStage_jsx_1.default key={'MainStage'}/>;
function Ryuutama() {
    // }
    // var color = randomColor(); // a hex code for an attractive color
    var _a = (0, react_1.useState)([]), fullDataCreeps = _a[0], setFullDataCreeps = _a[1];
    var _b = (0, react_1.useState)(FreepsSampleData_jsx_1.FreepsSampleData), fullDataFreeps = _b[0], setFullDataFreeps = _b[1];
    var _c = (0, react_1.useState)(30), initiative = _c[0], setInitiative = _c[1];
    var _d = (0, react_1.useState)('./image/Ryuutama/Weather/Ryuutama_Clear_Skies.png'), weather = _d[0], setWeather = _d[1];
    var _e = (0, react_1.useState)('./image/Ryuutama/Terrain/Ryuutama_Alpine.png'), terrainType = _e[0], setTerrainType = _e[1];
    var _f = (0, react_1.useState)(1), round = _f[0], setRound = _f[1];
    var _g = (0, react_1.useState)('unset'), first = _g[0], setFirst = _g[1];
    var _h = (0, react_1.useState)('white'), second = _h[0], setSecond = _h[1];
    var _j = (0, react_1.useState)('white'), third = _j[0], setThird = _j[1];
    var _k = (0, react_1.useState)('Title'), title1 = _k[0], setTitle1 = _k[1];
    var _l = (0, react_1.useState)(0), benefit1 = _l[0], setBenefit1 = _l[1];
    var _m = (0, react_1.useState)(0), benefitPermanent1 = _m[0], setBenefitPermanent1 = _m[1];
    var _o = (0, react_1.useState)('Title'), title2 = _o[0], setTitle2 = _o[1];
    var _p = (0, react_1.useState)(0), benefit2 = _p[0], setBenefit2 = _p[1];
    var _q = (0, react_1.useState)(0), benefitPermanent2 = _q[0], setBenefitPermanent2 = _q[1];
    var _r = (0, react_1.useState)('Title'), title3 = _r[0], setTitle3 = _r[1];
    var _s = (0, react_1.useState)(0), benefit3 = _s[0], setBenefit3 = _s[1];
    var _t = (0, react_1.useState)(0), benefitPermanent3 = _t[0], setBenefitPermanent3 = _t[1];
    var _u = (0, react_1.useState)('Title'), title4 = _u[0], setTitle4 = _u[1];
    var _v = (0, react_1.useState)(0), benefit4 = _v[0], setBenefit4 = _v[1];
    var _w = (0, react_1.useState)(0), benefitPermanent4 = _w[0], setBenefitPermanent4 = _w[1];
    var _x = (0, react_1.useState)('Title'), title5 = _x[0], setTitle5 = _x[1];
    var _y = (0, react_1.useState)(0), benefit5 = _y[0], setBenefit5 = _y[1];
    var _z = (0, react_1.useState)(0), benefitPermanent5 = _z[0], setBenefitPermanent5 = _z[1];
    var _0 = (0, react_1.useState)('Title'), title6 = _0[0], setTitle6 = _0[1];
    var _1 = (0, react_1.useState)(0), benefit6 = _1[0], setBenefit6 = _1[1];
    var _2 = (0, react_1.useState)(0), benefitPermanent6 = _2[0], setBenefitPermanent6 = _2[1];
    var _3 = (0, react_1.useState)('Title'), title7 = _3[0], setTitle7 = _3[1];
    var _4 = (0, react_1.useState)(0), benefit7 = _4[0], setBenefit7 = _4[1];
    var _5 = (0, react_1.useState)(0), benefitPermanent7 = _5[0], setBenefitPermanent7 = _5[1];
    var _6 = (0, react_1.useState)('Title'), title8 = _6[0], setTitle8 = _6[1];
    var _7 = (0, react_1.useState)(0), benefit8 = _7[0], setBenefit8 = _7[1];
    var _8 = (0, react_1.useState)(0), benefitPermanent8 = _8[0], setBenefitPermanent8 = _8[1];
    var _9 = (0, react_1.useState)('Title'), title9 = _9[0], setTitle9 = _9[1];
    var _10 = (0, react_1.useState)(0), benefit9 = _10[0], setBenefit9 = _10[1];
    var _11 = (0, react_1.useState)(0), benefitPermanent9 = _11[0], setBenefitPermanent9 = _11[1];
    var _12 = (0, react_1.useState)('Title'), title10 = _12[0], setTitle10 = _12[1];
    var _13 = (0, react_1.useState)(0), benefit10 = _13[0], setBenefit10 = _13[1];
    var _14 = (0, react_1.useState)(0), benefitPermanent10 = _14[0], setBenefitPermanent10 = _14[1];
    //readability probably trumps in thise case, I don't want to necessarilly have everything together
    //intitiative can be check both
    var _15 = (0, react_1.useState)(0), indexFreeps = _15[0], setIndexFreeps = _15[1];
    //!Jesse this is important there needs to be something that will clean the deleted items (aka, null) at loading time
    //if initiative is equal to the number it should be fixed
    var testClick = function () {
        console.log(fullDataCreeps, 'were these changed fullDataCreeps?');
        console.log(fullDataFreeps, 'fullDataFreeps');
        setFullDataFreeps([]);
        //I predict this will delete everything... Hopefully.
        //we need to delete
    };
    var initiativeCheck = function (event, thisInitiative) {
        //this will check initiative.  A button must be somewhere to also help this with a reset.  Perhaps
        // a crude float or something.  Perhaps in the bottom part of the ryuutama thingx
        if (thisInitiative === void 0) { thisInitiative = initiative; }
        if (fullDataCreeps.length === 0 && fullDataFreeps.length === 0) {
            return;
        }
        var foundCreep = -10;
        var foundFreep = -10;
        for (var nextCreep = 0; nextCreep < fullDataCreeps.length; nextCreep++) {
            if (fullDataCreeps[nextCreep].initiative < thisInitiative && fullDataCreeps[nextCreep].initiative > foundCreep) {
                foundCreep = fullDataCreeps[nextCreep].initiative;
            }
            else {
                continue;
            }
        }
        for (var nextFreep = 0; nextFreep < fullDataFreeps.length; nextFreep++) {
            if (fullDataFreeps[nextFreep].initiative < thisInitiative && fullDataFreeps[nextFreep].initiative > foundFreep) {
                foundFreep = fullDataFreeps[nextFreep].initiative;
            }
        }
        console.log(Math.max((foundFreep || -10), (foundCreep || -10)), 'this houdl be bigger');
        if (Math.max((foundFreep || -10), (foundCreep || -10)) === -10) {
            setInitiative(30);
            console.log(thisInitiative, 'this needs to be set to 30 first but it is not');
            setRound(round + 1);
            initiativeCheck(null, 30);
        }
        else {
            setInitiative(Math.max((foundFreep || -10), (foundCreep || -10)));
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
              {[lightTheme].map(function (theme, index) { return (<Grid_1.default item xs={6} sm={6} columns={6} key={index}>
                  <styles_1.ThemeProvider theme={theme}>
                    <Box_1.default sx={{
                p: 1,
                bgcolor: 'background.default',
                display: 'grid',
                gridTemplateColumns: { md: '1fr 4fr 1fr' },
                gap: 2,
            }}>


                      <Item>

                        <FreepsMain_jsx_1.default key={'FreepsMain'} indexPieces={indexFreeps} setIndexPieces={setIndexFreeps} fullDataFreeps={fullDataFreeps} setFullDataFreeps={setFullDataFreeps}/>

                      </Item>

                      <Item>

                        <div>Stage</div>

                        {quickTest}

                      </Item>

                      <Item>

                        <CreepsMain_jsx_1.default key={'CreepsMain'} fullDataCreeps={fullDataCreeps} setFullDataCreeps={setFullDataCreeps}/>

                      </Item>

                    </Box_1.default>
                  </styles_1.ThemeProvider>
                </Grid_1.default>); })}
            </Grid_1.default>





          </Box_1.default>



        </Paper_1.default>

        <material_1.Button onClick={testClick}>Test Button</material_1.Button>
        <material_1.Button onClick={initiativeCheck}>Initiative Check</material_1.Button>
        <span>Rounds </span>

        <div>Dice will be at the bottom and a bit sticky</div>
        <Dice_jsx_1.default />

      </UserContext_jsx_1.default.Provider>

    </>);
}
exports.default = Ryuutama;
//# sourceMappingURL=Ryuutama.jsx.map