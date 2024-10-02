import { useState, useEffect } from 'react';
var randomColor = require('randomcolor'); // import the script
import * as React from 'react'
import * as THREE from "three";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Grid2 from "@mui/material/Grid2";
import axios from 'axios';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import MainStage from './Stage/MainStage.jsx'
import FreepsMain from './Stage/Pieces/Freeps/FreepsMain.jsx'
import { FreepsSampleData } from './Stage/Pieces/Freeps/FreepsSampleData.jsx'

import { CreepsCardData, EnvironmentPropsData, FreepsCardData, terrainPropsData } from './Stage/Pieces/Common/_Types.jsx'
import { Button } from '@mui/material';
import UserContext from './UserContext.jsx'
import { TerrainTypeInterface, TerrainTypeOptions, WeatherOptions } from './Stage/ImageDecoration/_Types.jsx';
import Dice from './Dice/Dice.jsx'
import { useForm } from '../Common/setForm.jsx';

//goal, should have everything we need.  Maybe this isn't needed here?
export interface RyuutamaForm {
  weather: WeatherOptions;
  terrainType: TerrainTypeOptions;
  initiative: number;
  round: number;
  creatureData: Array<FreepsCardData>;
}

export const defaultRyuutamaForm : RyuutamaForm = {
  weather: "./image/Ryuutama/Weather/Ryuutama_Clear_Skies.png",
  terrainType: "./image/Ryuutama/Terrain/Ryuutama_Alpine.png",
  initiative: 30,
  round: 0,
  creatureData: FreepsSampleData
}

export const defaultTerrainProp : terrainPropsData = {
  description: "Add description here",
  title: "Set Prop"
}

export default function Ryuutama() {
  const [form, setForm] = useForm<RyuutamaForm>(defaultRyuutamaForm);

  const [fullDataCreeps, setFullDataCreeps] = useState<(CreepsCardData)[]>([])
  const [fullDataFreeps, setFullDataFreeps] = useState<(FreepsCardData)[]>(FreepsSampleData)
  const [terrainProps, setTerrainProps] = useState<(terrainPropsData)[]>(Array.from({ length: 10 }, () => ({ ...defaultTerrainProp })))


  const mainStageComponent = <MainStage terrainProps={terrainProps} setTerrainProps={setTerrainProps} creatureData={fullDataFreeps} key={'MainStage'} form={form} setForm={setForm} />

  const [initiative, setInitiative] = useState<number>(0);
  const [weather, setWeather] = useState<string>('./image/Ryuutama/Weather/Ryuutama_Clear_Skies.png');
  const [terrainType, setTerrainType] = useState<TerrainTypeInterface['possibleURL']>('./image/Ryuutama/Terrain/Ryuutama_Alpine.png');

  const myObject = { id: 1, name: 'Example' };

// Create an array with 10 distinct copies of the object
const arrayWithCopies = Array.from({ length: 10 }, () => ({ ...myObject }));

console.log(arrayWithCopies);
  const [arrayProps, setArrayProps] = useState<Array<EnvironmentPropsData>>([]);
  const [first, setFirst] = useState<string | null>('unset');
  const [second, setSecond] = useState<string | null>('white');
  const [third, setThird] = useState<string | null>('white');

  const [title1, setTitle1] = useState<string>('Set Prop');
  const [benefit1, setBenefit1] = useState<number>(0);
  const [benefitPermanent1, setBenefitPermanent1] = useState<number>(0);

  const [title2, setTitle2] = useState<string>('Set Prop');
  const [benefit2, setBenefit2] = useState<number>(0);
  const [benefitPermanent2, setBenefitPermanent2] = useState<number>(0);

  const [title3, setTitle3] = useState<string>('Set Prop');
  const [benefit3, setBenefit3] = useState<number>(0);
  const [benefitPermanent3, setBenefitPermanent3] = useState<number>(0);

  const [title4, setTitle4] = useState<string>('Set Prop');
  const [benefit4, setBenefit4] = useState<number>(0);
  const [benefitPermanent4, setBenefitPermanent4] = useState<number>(0);

  const [title5, setTitle5] = useState<string>('Set Prop');
  const [benefit5, setBenefit5] = useState<number>(0);
  const [benefitPermanent5, setBenefitPermanent5] = useState<number>(0);

  const [title6, setTitle6] = useState<string>('Set Prop');
  const [benefit6, setBenefit6] = useState<number>(0);
  const [benefitPermanent6, setBenefitPermanent6] = useState<number>(0);

  const [title7, setTitle7] = useState<string>('Set Prop');
  const [benefit7, setBenefit7] = useState<number>(0);
  const [benefitPermanent7, setBenefitPermanent7] = useState<number>(0);

  const [title8, setTitle8] = useState<string>('Set Prop');
  const [benefit8, setBenefit8] = useState<number>(0);
  const [benefitPermanent8, setBenefitPermanent8] = useState<number>(0);

  const [title9, setTitle9] = useState<string>('Set Prop');
  const [benefit9, setBenefit9] = useState<number>(0);
  const [benefitPermanent9, setBenefitPermanent9] = useState<number>(0);

  const [title10, setTitle10] = useState<string>('Set Prop');
  const [benefit10, setBenefit10] = useState<number>(0);
  const [benefitPermanent10, setBenefitPermanent10] = useState<number>(0);
  //readability probably trumps in thise case, I don't want to necessarilly have everything together
  //intitiative can be check both
  const [indexFreeps, setIndexFreeps] = useState<number>(0)

  //!Jesse this is important there needs to be something that will clean the deleted items (aka, null) at loading time
  //if initiative is equal to the number it should be fixed


  const adjustCreatureSet = (indexOfChange: number, changedCard: FreepsCardData) => {
    const newArray = fullDataFreeps.map( (item: FreepsCardData, index: number) => {
      if (index === indexOfChange) {
        return changedCard; // Update the specific object by replacing it with the new object
      }
      return item; // Return the unchanged object
    });
    setFullDataFreeps(newArray);
  };

  const clearCreatures = () => {
    setFullDataFreeps([]);
  }

  const initiativeCheck = (event: any, thisInitiative: number = initiative) => {
    //this will check initiative.  A button must be somewhere to also help this with a reset.  Perhaps
    // a crude float or something.  Perhaps in the bottom part of the ryuutama thingx

    console.log(initiative, "initiative");
    const lengthOfMonsters = fullDataFreeps.length;
    if (initiative + 1 >= fullDataFreeps.length) {
      setInitiative(0);
    } else {
      setInitiative(initiative+1);
    }
    
  }


  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    lineHeight: '10px',

  }));

  const darkTheme = createTheme({ palette: { mode: 'dark' } });
  const lightTheme = createTheme({ palette: { mode: 'light' } });

  return (
    <>

      <UserContext.Provider value={{
        weather, setWeather, terrainType,
        setTerrainType, first, setFirst, second, setSecond, third, setThird, initiative,
        title1, setTitle1, benefit1, setBenefit1, benefitPermanent1, setBenefitPermanent1,
        title2, setTitle2, benefit2, setBenefit2, benefitPermanent2, setBenefitPermanent2,
        title3, setTitle3, benefit3, setBenefit3, benefitPermanent3, setBenefitPermanent3,
        title4, setTitle4, benefit4, setBenefit4, benefitPermanent4, setBenefitPermanent4,
        title5, setTitle5, benefit5, setBenefit5, benefitPermanent5, setBenefitPermanent5,
        title6, setTitle6, benefit6, setBenefit6, benefitPermanent6, setBenefitPermanent6,
        title7, setTitle7, benefit7, setBenefit7, benefitPermanent7, setBenefitPermanent7,
        title8, setTitle8, benefit8, setBenefit8, benefitPermanent8, setBenefitPermanent8,
        title9, setTitle9, benefit9, setBenefit9, benefitPermanent9, setBenefitPermanent9,
        title10, setTitle10, benefit10, setBenefit10, benefitPermanent10, setBenefitPermanent10,
      }}>

        <Paper>
          <Box>
            <Grid container spacing={2}>
              {[lightTheme].map((theme, index) => (
                <Grid2 columns={3} key={index}>
                  <ThemeProvider theme={theme}>
                    <Box
                      sx={{
                        p: 1,
                        bgcolor: 'background.default',
                        display: 'grid',
                        gridTemplateColumns: { md: '1fr 4fr 1fr' },
                        gap: 2,
                      }}
                    >

                      <Item id='Freeps' style={{ display: 'flex', flexDirection: 'column', maxHeight: "100%", overflowY: "auto" }}>

                        <FreepsMain adjustCreatureSet={adjustCreatureSet} form={form} freepsOrCreeps="freep" setForm={setForm} key={'FreepsMain'} indexPieces={initiative} setIndexPieces={setIndexFreeps} fullDataFreeps={fullDataFreeps} setFullDataFreeps={setFullDataFreeps} />

                      </Item>

                      <Item id="main-stage">

                        {mainStageComponent}

                      </Item>

                      <Item id="creeps" style={{ display: 'flex', flexDirection: 'column'}}>

                        <FreepsMain adjustCreatureSet={adjustCreatureSet} form={form} freepsOrCreeps="creep" setForm={setForm} key={'FreepsMain'} indexPieces={initiative} setIndexPieces={setIndexFreeps} fullDataFreeps={fullDataFreeps} setFullDataFreeps={setFullDataFreeps} />

                      </Item>

                    </Box>
                  </ThemeProvider>
                </Grid2>
              ))}
            </Grid>





          </Box>



        </Paper>

        <Button onClick={clearCreatures}>Clear All</Button>
        <Button onClick={initiativeCheck}>Next Initative</Button>
        <Dice />

      </UserContext.Provider >

    </>
  )
}

