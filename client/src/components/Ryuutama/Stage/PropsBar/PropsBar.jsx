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
var randomColor = require('randomcolor'); // import the script
var React = require("react");
var Paper_1 = require("@mui/material/Paper");
var Grid_1 = require("@mui/material/Grid");
var styles_1 = require("@mui/material/styles");
var Box_1 = require("@mui/material/Box");
var PropsBarIndividualCard_jsx_1 = require("./PropsBarIndividualCard.jsx");
var Item = (0, styles_1.styled)(Paper_1.default)(function (_a) {
    var theme = _a.theme;
    return (__assign(__assign({}, theme.typography.body2), { padding: theme.spacing(1), textAlign: 'center', color: theme.palette.text.secondary }));
});
var bull = (<Box_1.default component="span" sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
    •
  </Box_1.default>);
function PropsBar() {
    return (<>



      <Box_1.default sx={{ flexGrow: 0 }}>
        <Grid_1.default container spacing={1} columns={10}>
          <Grid_1.default item xs={1}>


            <PropsBarIndividualCard_jsx_1.default />


          </Grid_1.default>

          <Grid_1.default item xs={1}>
            <PropsBarIndividualCard_jsx_1.default />
          </Grid_1.default>


          <Grid_1.default item xs={1}>
            <PropsBarIndividualCard_jsx_1.default />
          </Grid_1.default>


          <Grid_1.default item xs={1}>
            <PropsBarIndividualCard_jsx_1.default />
          </Grid_1.default>

          <Grid_1.default item xs={1}>
            <PropsBarIndividualCard_jsx_1.default />
          </Grid_1.default>


          <Grid_1.default item xs={1}>
            <PropsBarIndividualCard_jsx_1.default />
          </Grid_1.default>


          <Grid_1.default item xs={1}>
            <PropsBarIndividualCard_jsx_1.default />
          </Grid_1.default>



          <Grid_1.default item xs={1}>
            <PropsBarIndividualCard_jsx_1.default />
          </Grid_1.default>


          <Grid_1.default item xs={1}>
            <PropsBarIndividualCard_jsx_1.default />
          </Grid_1.default>



          <Grid_1.default item xs={1}>
            <PropsBarIndividualCard_jsx_1.default />
          </Grid_1.default>
        </Grid_1.default>
      </Box_1.default>
    </>);
}
exports.default = PropsBar;
//# sourceMappingURL=PropsBar.jsx.map