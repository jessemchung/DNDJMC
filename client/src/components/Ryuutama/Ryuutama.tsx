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
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

import { colorOptions, CreepsCardData, EnvironmentPropsData, FreepOrCreep, FreepsCardData, terrainPropsData } from './Stage/Pieces/Common/_Types.jsx'
import { Button } from '@mui/material';
import UserContext from './UserContext.jsx'
import { TerrainTypeInterface, TerrainTypeOptions, WeatherOptions } from './Stage/ImageDecoration/_Types.jsx';
import Dice from './Dice/Dice.jsx'
import { CsvDownloadDialogue } from './CsvDownloadDialogue.jsx';
import { useForm } from '../Common/setForm.jsx';


//goal, should have everything we need.  Maybe this isn't needed here?
export interface RyuutamaForm {
  weather: WeatherOptions;
  terrainType: TerrainTypeOptions;
  initiative: number;
  round: number;
  creatureData: Array<FreepsCardData>;
}

export const defaultRyuutamaForm: RyuutamaForm = {
  weather: "./image/Ryuutama/Weather/Ryuutama_Clear_Skies.png",
  terrainType: "./image/Ryuutama/Terrain/Ryuutama_Alpine.png",
  initiative: 30,
  round: 0,
  creatureData: FreepsSampleData
}

export const defaultTerrainProp: terrainPropsData = {
  description: "Add description here",
  title: "Set Prop"
}

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export default function Ryuutama() {
  const [form, setForm] = useForm<RyuutamaForm>(defaultRyuutamaForm);
  const [openCsvDialogue, setOpenCsvDialogue] = useState<boolean>(false);

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

  const [indexFreeps, setIndexFreeps] = useState<number>(0)

  //!Jesse this is important there needs to be something that will clean the deleted items (aka, null) at loading time


  const adjustCreatureSet = (indexOfChange: number, changedCard: FreepsCardData) => {
    const newArray = fullDataFreeps.map((item: FreepsCardData, index: number) => {
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

  const handleFileUpload = (item: FileList) => {
    const files = item;
    if (files && files.length > 0) {
      const file = files[0];
      
      // Check if the file is a CSV
      if (file.type === 'text/csv') {
        const reader = new FileReader();
        
        reader.onload = (e) => {
          const text = e.target?.result as string;
          console.log(text);  // This is the CSV content

          const lines = text.trim().split('\n');

          // Skip the first line (header) and map each line to a character object
          const characters: FreepsCardData[] = lines.slice(1).map(line => {
            const [
              bloodyImage,
              color,
              creepOrFreep,
              healthyImage,
              hitpoints,
              initiative,
              maxHitpoints,
              name,
              position,
              shield
            ] = line.split(', ');
        
            return {
              bloodyImage,
              color: color as colorOptions,
              creepOrFreep: creepOrFreep as FreepOrCreep,
              healthyImage: (healthyImage.replace("|", ",")).replace(/"/g, ""),
              hitpoints: Number(hitpoints),
              initiative: Number(initiative),
              maxHitpoints: Number(maxHitpoints),
              name,
              position: Number(position),
              shield: Number(shield),
            };
          });

          setFullDataFreeps(characters);


        };

        reader.onerror = () => {
          console.error("Failed to read file!");
        };
        
        reader.readAsText(file);  // Read file as text
      } else {
        console.error("Uploaded file is not a CSV");
      }
    }
  };

  const nextInitiative = () => {
    if (initiative + 1 >= fullDataFreeps.length) {
      setInitiative(0);
    } else {
      setInitiative(initiative + 1);
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

  let showCsvDownloadDialogue: React.JSX.Element | null = null;
  if (openCsvDialogue) {
    showCsvDownloadDialogue = <CsvDownloadDialogue fullDataFreeps={fullDataFreeps} open={openCsvDialogue} onClose={() => setOpenCsvDialogue(false)} />;
  }

  return (
    <div className="lower-component">

      <UserContext.Provider value={{
        weather, setWeather, terrainType,
        setTerrainType, first, setFirst, second, setSecond, third, setThird, initiative
      }}>

        {showCsvDownloadDialogue}
        <Paper >
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

                      <Item id="creeps" style={{ display: 'flex', flexDirection: 'column' }}>

                        <FreepsMain adjustCreatureSet={adjustCreatureSet} form={form} freepsOrCreeps="creep" setForm={setForm} key={'FreepsMain'} indexPieces={initiative} setIndexPieces={setIndexFreeps} fullDataFreeps={fullDataFreeps} setFullDataFreeps={setFullDataFreeps} />

                      </Item>

                    </Box>
                  </ThemeProvider>
                </Grid2>
              ))}
            </Grid>

          </Box>



        </Paper>

        <Button onClick={clearCreatures} variant="contained">Clear All</Button>
        <Button onClick={nextInitiative} variant="contained">Next Initative</Button>
        <Button onClick={() => setOpenCsvDialogue(true)} variant="contained">Download CSV</Button>
        <Button
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<CloudUploadIcon />}
        >
          Upload CSV files
          <VisuallyHiddenInput
            type="file"
            onChange={(event) => handleFileUpload(event.target.files)}
            multiple
          />
        </Button>

        <Dice />

      </UserContext.Provider >

    </div>
  )
}

