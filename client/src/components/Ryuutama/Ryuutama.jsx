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
var axios_1 = require("axios");
var styles_1 = require("@mui/material/styles");
var MainStage_jsx_1 = require("./Stage/MainStage.jsx");
function Ryuutama() {
    // }
    // var color = randomColor(); // a hex code for an attractive color
    var _a = (0, react_1.useState)("yes"), value = _a[0], setValue = _a[1];
    var _b = (0, react_1.useState)(0), count = _b[0], setCount = _b[1];
    var _c = (0, react_1.useState)(""), color = _c[0], setColor = _c[1];
    var Item = (0, styles_1.styled)(Paper_1.default)(function (_a) {
        var theme = _a.theme;
        return (__assign(__assign({}, theme.typography.body2), { textAlign: 'center', color: theme.palette.text.secondary, lineHeight: '10px' }));
    });
    var darkTheme = (0, styles_1.createTheme)({ palette: { mode: 'dark' } });
    var lightTheme = (0, styles_1.createTheme)({ palette: { mode: 'light' } });
    console.log(value, 'hello');
    axios_1.default.get('/favorites')
        .then(function (response) {
        // handle success
        console.log('should be the favorites', response.data);
    })
        .catch(function (error) {
        // handle error
        console.log(error);
    });
    function increment() {
        setCount(function (prevCount) { return prevCount + 1; });
    }
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


                    <Item>Freeps</Item>

                    <Item>
                      
                      <div>Stage</div>

                      <MainStage_jsx_1.default />



                    </Item>

                    <Item>Creeps</Item>

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