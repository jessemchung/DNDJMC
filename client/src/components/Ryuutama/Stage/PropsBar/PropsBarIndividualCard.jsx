"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var randomColor = require('randomcolor'); // import the script
var React = require("react");
var styles_1 = require("@mui/material/styles");
var Box_1 = require("@mui/material/Box");
var Card_1 = require("@mui/material/Card");
var CardActions_1 = require("@mui/material/CardActions");
var CardContent_1 = require("@mui/material/CardContent");
var Button_1 = require("@mui/material/Button");
var Typography_1 = require("@mui/material/Typography");
var TextField_1 = require("@mui/material/TextField");
var Dialog_1 = require("@mui/material/Dialog");
var DialogActions_1 = require("@mui/material/DialogActions");
var DialogContent_1 = require("@mui/material/DialogContent");
var DialogContentText_1 = require("@mui/material/DialogContentText");
var DialogTitle_1 = require("@mui/material/DialogTitle");
var colors_1 = require("@mui/material/colors");
var bull = (<Box_1.default component="span" sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
    •
  </Box_1.default>);
var arrayOfBenefits = ['Protective', 'Hampering', 'Offensive'];
var arrayOfPermanent = ['Permanent', 'One-Use', 'Temporal'];
var theme = (0, styles_1.createTheme)({
    palette: {
        primary: {
            // Purple and green play nicely together.
            main: colors_1.purple[500],
        },
        secondary: {
            // This is green.A700 as hex.
            main: '#11cb5f',
        },
    },
});
function PropsBarIndividualCard(props) {
    var title = props.title, setTitle = props.setTitle, benefit = props.benefit, setBenefit = props.setBenefit, benefitPermanent = props.benefitPermanent, setBenefitPermanent = props.setBenefitPermanent;
    // const [title, setTitle] = useState<string>('Title');
    // const [benefit, setBenefit] = useState<number>(0);
    // const [benefitPermanent, setBenefitPermanent] = useState<number>(0);
    //this is to allow saving I think?
    var _a = (0, react_1.useState)('Title'), titleEdit = _a[0], setTitleEdit = _a[1];
    var _b = (0, react_1.useState)(false), open = _b[0], setOpen = _b[1];
    var handleClickOpen = function () {
        setOpen(true);
    };
    var toggleBenefit = function () {
        if (benefit < arrayOfBenefits.length - 1) {
            setBenefit(benefit + 1);
        }
        else {
            setBenefit(0);
        }
    };
    var togglePermBenefit = function () {
        if (benefitPermanent < arrayOfPermanent.length - 1) {
            setBenefitPermanent(benefitPermanent + 1);
        }
        else {
            console.log('what the heck');
            setBenefitPermanent(0);
        }
    };
    var handleClose = function () {
        setOpen(false);
    };
    var handleSubmit = function () {
        setTitle(titleEdit);
        setOpen(false);
    };
    var handleChange = function (event) {
        setTitleEdit(event.target.value);
    };
    return (<>
    <styles_1.ThemeProvider theme={theme}>
      <Card_1.default>
        <CardContent_1.default>
          <Typography_1.default variant="body1" component="div">
            {title}
          </Typography_1.default>

          <Typography_1.default variant="body2" color="error">
            {arrayOfBenefits[benefit]}
          </Typography_1.default>
        </CardContent_1.default>
        <CardActions_1.default>
          <Button_1.default size="small" onClick={handleClickOpen}>Edit</Button_1.default>

          <Dialog_1.default open={open} onClose={handleClose}>
            <DialogTitle_1.default>Prop</DialogTitle_1.default>
            <DialogContent_1.default>
              <DialogContentText_1.default>

                Edit this card
              </DialogContentText_1.default>
              <TextField_1.default autoFocus margin="dense" id="name" color="success" type="email" fullWidth value={titleEdit} onChange={handleChange} variant="standard"/>

              <Button_1.default onClick={toggleBenefit}>
                {arrayOfBenefits[benefit]}
              </Button_1.default>

              <Button_1.default onClick={togglePermBenefit}>
                {arrayOfPermanent[benefitPermanent]}
              </Button_1.default>

              arrayOfPermanent
            </DialogContent_1.default>
            <DialogActions_1.default>
              <Button_1.default onClick={handleClose}>Cancel</Button_1.default>
              <Button_1.default onClick={handleSubmit} type="submit">Submit</Button_1.default>
            </DialogActions_1.default>
          </Dialog_1.default>


        </CardActions_1.default>
      </Card_1.default>

      </styles_1.ThemeProvider>

    </>);
}
exports.default = PropsBarIndividualCard;
//# sourceMappingURL=PropsBarIndividualCard.jsx.map