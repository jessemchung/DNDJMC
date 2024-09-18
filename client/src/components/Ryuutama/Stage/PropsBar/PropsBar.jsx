"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var randomColor = require('randomcolor'); // import the script
var React = require("react");
var Grid_1 = require("@mui/material/Grid");
var Box_1 = require("@mui/material/Box");
var PropsBarIndividualCard_jsx_1 = require("./PropsBarIndividualCard.jsx");
var UserContext_jsx_1 = require("../../UserContext.jsx");
function PropsBar() {
    var _a = (0, react_1.useContext)(UserContext_jsx_1.default), title1 = _a.title1, setTitle1 = _a.setTitle1, benefit1 = _a.benefit1, setBenefit1 = _a.setBenefit1, benefitPermanent1 = _a.benefitPermanent1, setBenefitPermanent1 = _a.setBenefitPermanent1, title2 = _a.title2, setTitle2 = _a.setTitle2, benefit2 = _a.benefit2, setBenefit2 = _a.setBenefit2, benefitPermanent2 = _a.benefitPermanent2, setBenefitPermanent2 = _a.setBenefitPermanent2, title3 = _a.title3, setTitle3 = _a.setTitle3, benefit3 = _a.benefit3, setBenefit3 = _a.setBenefit3, benefitPermanent3 = _a.benefitPermanent3, setBenefitPermanent3 = _a.setBenefitPermanent3, title4 = _a.title4, setTitle4 = _a.setTitle4, benefit4 = _a.benefit4, setBenefit4 = _a.setBenefit4, benefitPermanent4 = _a.benefitPermanent4, setBenefitPermanent4 = _a.setBenefitPermanent4, title5 = _a.title5, setTitle5 = _a.setTitle5, benefit5 = _a.benefit5, setBenefit5 = _a.setBenefit5, benefitPermanent5 = _a.benefitPermanent5, setBenefitPermanent5 = _a.setBenefitPermanent5, title6 = _a.title6, setTitle6 = _a.setTitle6, benefit6 = _a.benefit6, setBenefit6 = _a.setBenefit6, benefitPermanent6 = _a.benefitPermanent6, setBenefitPermanent6 = _a.setBenefitPermanent6, title7 = _a.title7, setTitle7 = _a.setTitle7, benefit7 = _a.benefit7, setBenefit7 = _a.setBenefit7, benefitPermanent7 = _a.benefitPermanent7, setBenefitPermanent7 = _a.setBenefitPermanent7, title8 = _a.title8, setTitle8 = _a.setTitle8, benefit8 = _a.benefit8, setBenefit8 = _a.setBenefit8, benefitPermanent8 = _a.benefitPermanent8, setBenefitPermanent8 = _a.setBenefitPermanent8, title9 = _a.title9, setTitle9 = _a.setTitle9, benefit9 = _a.benefit9, setBenefit9 = _a.setBenefit9, benefitPermanent9 = _a.benefitPermanent9, setBenefitPermanent9 = _a.setBenefitPermanent9, title10 = _a.title10, setTitle10 = _a.setTitle10, benefit10 = _a.benefit10, setBenefit10 = _a.setBenefit10, benefitPermanent10 = _a.benefitPermanent10, setBenefitPermanent10 = _a.setBenefitPermanent10;
    return (<>
      <Box_1.default sx={{ flexGrow: 0 }}>
        <Grid_1.default container spacing={1} columns={10}>
          <Grid_1.default item xs={1}>


            <PropsBarIndividualCard_jsx_1.default title={title1} setTitle={setTitle1} benefit={benefit1} setBenefit={setBenefit1} benefitPermanent={benefitPermanent1} setBenefitPermanent={setBenefitPermanent1}/>


          </Grid_1.default>

          <Grid_1.default item xs={1}>
            <PropsBarIndividualCard_jsx_1.default title={title2} setTitle={setTitle2} benefit={benefit2} setBenefit={setBenefit2} benefitPermanent={benefitPermanent2} setBenefitPermanent={setBenefitPermanent2}/>
          </Grid_1.default>


          <Grid_1.default item xs={1}>
            <PropsBarIndividualCard_jsx_1.default title={title3} setTitle={setTitle3} benefit={benefit3} setBenefit={setBenefit3} benefitPermanent={benefitPermanent3} setBenefitPermanent={setBenefitPermanent3}/>
          </Grid_1.default>


          <Grid_1.default item xs={1}>
            <PropsBarIndividualCard_jsx_1.default title={title4} setTitle={setTitle4} benefit={benefit4} setBenefit={setBenefit4} benefitPermanent={benefitPermanent4} setBenefitPermanent={setBenefitPermanent4}/>
          </Grid_1.default>

          <Grid_1.default item xs={1}>
            <PropsBarIndividualCard_jsx_1.default title={title5} setTitle={setTitle5} benefit={benefit5} setBenefit={setBenefit5} benefitPermanent={benefitPermanent5} setBenefitPermanent={setBenefitPermanent5}/>
          </Grid_1.default>


          <Grid_1.default item xs={1}>
            <PropsBarIndividualCard_jsx_1.default title={title6} setTitle={setTitle6} benefit={benefit6} setBenefit={setBenefit6} benefitPermanent={benefitPermanent6} setBenefitPermanent={setBenefitPermanent6}/>
          </Grid_1.default>


          <Grid_1.default item xs={1}>
            <PropsBarIndividualCard_jsx_1.default title={title7} setTitle={setTitle7} benefit={benefit7} setBenefit={setBenefit7} benefitPermanent={benefitPermanent7} setBenefitPermanent={setBenefitPermanent7}/>
          </Grid_1.default>



          <Grid_1.default item xs={1}>
            <PropsBarIndividualCard_jsx_1.default title={title8} setTitle={setTitle8} benefit={benefit8} setBenefit={setBenefit8} benefitPermanent={benefitPermanent8} setBenefitPermanent={setBenefitPermanent8}/>
          </Grid_1.default>


          <Grid_1.default item xs={1}>
            <PropsBarIndividualCard_jsx_1.default title={title9} setTitle={setTitle9} benefit={benefit9} setBenefit={setBenefit9} benefitPermanent={benefitPermanent9} setBenefitPermanent={setBenefitPermanent9}/>
          </Grid_1.default>



          <Grid_1.default item xs={1}>
            <PropsBarIndividualCard_jsx_1.default title={title10} setTitle={setTitle10} benefit={benefit10} setBenefit={setBenefit10} benefitPermanent={benefitPermanent10} setBenefitPermanent={setBenefitPermanent10}/>
          </Grid_1.default>
        </Grid_1.default>
      </Box_1.default>
    </>);
}
exports.default = PropsBar;
//# sourceMappingURL=PropsBar.jsx.map