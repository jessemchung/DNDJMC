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
var Card_1 = require("@mui/material/Card");
var CardActions_1 = require("@mui/material/CardActions");
var CardContent_1 = require("@mui/material/CardContent");
var Button_1 = require("@mui/material/Button");
var Typography_1 = require("@mui/material/Typography");
var Item = (0, styles_1.styled)(Paper_1.default)(function (_a) {
    var theme = _a.theme;
    return (__assign(__assign({}, theme.typography.body2), { padding: theme.spacing(1), textAlign: 'center', color: theme.palette.text.secondary }));
});
var bull = (<Box_1.default component="span" sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
    •
  </Box_1.default>);
function PropsBar() {
    return (<>

      <Card_1.default sx={{ minWidth: 275, maxWidth: 275 }}>
        <CardContent_1.default>
          <Typography_1.default sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography_1.default>
          <Typography_1.default variant="h5" component="div">
            be{bull}nev{bull}o{bull}lent
          </Typography_1.default>
          <Typography_1.default sx={{ mb: 1.5 }} color="text.secondary">
            adjective
          </Typography_1.default>
          <Typography_1.default variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography_1.default>
        </CardContent_1.default>
        <CardActions_1.default>
          <Button_1.default size="small">Learn More</Button_1.default>
        </CardActions_1.default>
      </Card_1.default>

      <Box_1.default sx={{ flexGrow: 0 }}>
        <Grid_1.default container spacing={1} columns={10}>
          <Grid_1.default item xs={1}>



          <Card_1.default>
        <CardContent_1.default>
          <Typography_1.default sx={{ fontSize: 10 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography_1.default>
          <Typography_1.default variant="h5" component="div">
            be{bull}nev{bull}o{bull}lent
          </Typography_1.default>
          <Typography_1.default color="text.secondary">
            adjective
          </Typography_1.default>
          <Typography_1.default variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography_1.default>
        </CardContent_1.default>
        <CardActions_1.default>
          <Button_1.default size="small">Learn More</Button_1.default>
        </CardActions_1.default>
      </Card_1.default>



          </Grid_1.default>
          <Grid_1.default item xs={1}>
            <Item>xs=4</Item>
          </Grid_1.default>
          <Grid_1.default item xs={1}>
            <Item>xs=4</Item>
          </Grid_1.default>
          <Grid_1.default item xs={1}>
            <Item>xs=8</Item>
          </Grid_1.default>

          <Grid_1.default item xs={1}>
            <Item>xs=8</Item>
          </Grid_1.default>
          <Grid_1.default item xs={1}>
            <Item>xs=8</Item>
          </Grid_1.default>
          <Grid_1.default item xs={1}>
            <Item>xs=8</Item>
          </Grid_1.default>
          <Grid_1.default item xs={1}>
            <Item>xs=8</Item>
          </Grid_1.default>
          <Grid_1.default item xs={1}>
            <Item>xs=8</Item>
          </Grid_1.default>
          <Grid_1.default item xs={1}>
            <Item>xs=8</Item>
          </Grid_1.default>
        </Grid_1.default>
      </Box_1.default>
    </>);
}
exports.default = PropsBar;
//# sourceMappingURL=PropsBarIndividualCard.jsx.map