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
var CreepsSampleData_jsx_1 = require("./Stage/Pieces/Creeps/CreepsSampleData.jsx");
function Ryuutama() {
    // }
    // var color = randomColor(); // a hex code for an attractive color
    var _a = (0, react_1.useState)("yes"), value = _a[0], setValue = _a[1];
    var _b = (0, react_1.useState)(0), count = _b[0], setCount = _b[1];
    var _c = (0, react_1.useState)(""), color = _c[0], setColor = _c[1];
    var _d = (0, react_1.useState)(CreepsSampleData_jsx_1.CreepsSampleData), fullDataCreeps = _d[0], setFullDataCreeps = _d[1];
    var _e = (0, react_1.useState)(30), initiative = _e[0], setInitiative = _e[1];
    //if initiative is equal to the number it should be fixed
    var Item = (0, styles_1.styled)(Paper_1.default)(function (_a) {
        var theme = _a.theme;
        return (__assign(__assign({}, theme.typography.body2), { textAlign: 'center', color: theme.palette.text.secondary, lineHeight: '10px' }));
    });
    var darkTheme = (0, styles_1.createTheme)({ palette: { mode: 'dark' } });
    var lightTheme = (0, styles_1.createTheme)({ palette: { mode: 'light' } });
    // I would suspect we need to consider where initiative is decided.  It must start with the highest one I think.  If that is the case
    // then both values should start here I suppose, then it picks starting from the highest number
    //initiative will need to be tracked so that the next lowest one will be picked.
    // a roll can be given I suppose.  
    (0, react_1.useEffect)(function () {
        setColor(randomColor());
    }, [count]);
    //a dice roller on top to be implemented first
    return (<>


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
                      <div>Freeps</div>

                      <FreepsMain_jsx_1.default />

                    </Item>

                    <Item>
                      
                      <div>Stage</div>

                      <MainStage_jsx_1.default />

                    </Item>

                    <Item><div>Creeps </div>

                    <CreepsMain_jsx_1.default fullDataCreeps={fullDataCreeps} setFullDataCreeps={setFullDataCreeps}/>

                    </Item>

                  </Box_1.default>
                </styles_1.ThemeProvider>
              </Grid_1.default>); })}
          </Grid_1.default>





        </Box_1.default>



      </Paper_1.default>


    </>);
}
exports.default = Ryuutama;
//# sourceMappingURL=Ryuutama.jsx.map