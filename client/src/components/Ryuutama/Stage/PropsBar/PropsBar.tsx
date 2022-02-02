import { useContext } from 'react';
var randomColor = require('randomcolor'); // import the script
import * as React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import PropsBarIndividualCard from './PropsBarIndividualCard.jsx';
import UserContext from '../../UserContext.jsx';






export default function PropsBar() {

  const {   title1, setTitle1, benefit1, setBenefit1, benefitPermanent1, setBenefitPermanent1,
    title2, setTitle2, benefit2, setBenefit2, benefitPermanent2, setBenefitPermanent2,
    title3, setTitle3, benefit3, setBenefit3, benefitPermanent3, setBenefitPermanent3,
    title4, setTitle4, benefit4, setBenefit4, benefitPermanent4, setBenefitPermanent4,
    title5, setTitle5, benefit5, setBenefit5, benefitPermanent5, setBenefitPermanent5,
    title6, setTitle6, benefit6, setBenefit6, benefitPermanent6, setBenefitPermanent6,
    title7, setTitle7, benefit7, setBenefit7, benefitPermanent7, setBenefitPermanent7,
    title8, setTitle8, benefit8, setBenefit8, benefitPermanent8, setBenefitPermanent8,
    title9, setTitle9, benefit9, setBenefit9, benefitPermanent9, setBenefitPermanent9,
    title10, setTitle10, benefit10, setBenefit10, benefitPermanent10, setBenefitPermanent10, } = useContext(UserContext);




  return (
    <>
      <Box sx={{ flexGrow: 0 }}>
        <Grid container spacing={1} columns={10}>
          <Grid item xs={1} >


            <PropsBarIndividualCard title={title1} setTitle={setTitle1} benefit={benefit1} setBenefit={setBenefit1} benefitPermanent={benefitPermanent1} setBenefitPermanent={setBenefitPermanent1}/>


          </Grid>

          <Grid item xs={1}>
            <PropsBarIndividualCard title={title2} setTitle={setTitle2} benefit={benefit2} setBenefit={setBenefit2} benefitPermanent={benefitPermanent2} setBenefitPermanent={setBenefitPermanent2}/>
          </Grid>


          <Grid item xs={1}>
            <PropsBarIndividualCard title={title3} setTitle={setTitle3} benefit={benefit3} setBenefit={setBenefit3} benefitPermanent={benefitPermanent3} setBenefitPermanent={setBenefitPermanent3} />
          </Grid>


          <Grid item xs={1}>
            <PropsBarIndividualCard title={title4} setTitle={setTitle4} benefit={benefit4} setBenefit={setBenefit4} benefitPermanent={benefitPermanent4} setBenefitPermanent={setBenefitPermanent4}/>
          </Grid>

          <Grid item xs={1}>
            <PropsBarIndividualCard title={title5} setTitle={setTitle5} benefit={benefit5} setBenefit={setBenefit5} benefitPermanent={benefitPermanent5} setBenefitPermanent={setBenefitPermanent5}/>
          </Grid>


          <Grid item xs={1}>
            <PropsBarIndividualCard title={title6} setTitle={setTitle6} benefit={benefit6} setBenefit={setBenefit6} benefitPermanent={benefitPermanent6} setBenefitPermanent={setBenefitPermanent6}/>
          </Grid>


          <Grid item xs={1}>
            <PropsBarIndividualCard title={title7} setTitle={setTitle7} benefit={benefit7} setBenefit={setBenefit7} benefitPermanent={benefitPermanent7} setBenefitPermanent={setBenefitPermanent7}/>
          </Grid>



          <Grid item xs={1}>
            <PropsBarIndividualCard title={title8} setTitle={setTitle8} benefit={benefit8} setBenefit={setBenefit8} benefitPermanent={benefitPermanent8} setBenefitPermanent={setBenefitPermanent8}/>
          </Grid>


          <Grid item xs={1}>
            <PropsBarIndividualCard title={title9} setTitle={setTitle9} benefit={benefit9} setBenefit={setBenefit9} benefitPermanent={benefitPermanent9} setBenefitPermanent={setBenefitPermanent9} />
          </Grid>



          <Grid item xs={1}>
            <PropsBarIndividualCard title={title10} setTitle={setTitle10} benefit={benefit10} setBenefit={setBenefit10} benefitPermanent={benefitPermanent10} setBenefitPermanent={setBenefitPermanent10}/>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

