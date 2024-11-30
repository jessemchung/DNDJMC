"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var randomColor = require('randomcolor'); // import the script
var React = require("react");
var Grid_1 = require("@mui/material/Grid");
var Box_1 = require("@mui/material/Box");
var PropsBarIndividualCard_jsx_1 = require("./PropsBarIndividualCard.jsx");
;
function PropsBar(prop) {
    var setNewTerrainInformation = function (index, newTerrainValue) {
        prop.setTerrainProps(prop.terrainProps.map(function (item, originalIndex) { return (originalIndex === index ? newTerrainValue : item); }));
    };
    var finalConstruct = prop.terrainProps.map(function (item, index) {
        return (<Grid_1.default key={"propsBar" + index} item xs={1}>
        <PropsBarIndividualCard_jsx_1.default setNewTerrainInformation={setNewTerrainInformation} terrainProp={item} index={index}/>
      </Grid_1.default>);
    });
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