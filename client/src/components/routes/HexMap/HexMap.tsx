import * as React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { BaseTileEnum, characterInformation, CharacterTileEnum, TerrainTopper, Coordinate, coordinateKey, GridValue, hexInformation } from './_Types.jsx';
import IndividualHexPiece from './IndividualHexPiece.jsx';
import RightClickMenu from './RightClickMenu.jsx';
import { Button, ButtonGroup, styled } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const sampleHexGrid: Array<Array<hexInformation | null>> = [[null, { terrain: [BaseTileEnum.None] }, { name: "Old Spring Town", terrain: [BaseTileEnum.Water] }, { terrain: [BaseTileEnum.Dirt]}, { terrain: [BaseTileEnum.Lava, BaseTileEnum.Lava, BaseTileEnum.Lava] }, { terrain: [BaseTileEnum.Grass, BaseTileEnum.Grass]}],
[{ terrain: [BaseTileEnum.Magic], topping: [TerrainTopper.Blue_Tree] }, { terrain: [BaseTileEnum.Magic], character: [ CharacterTileEnum.Blue ,null] }, { terrain: [BaseTileEnum.Dirt] }, { terrain: [BaseTileEnum.Dirt] }, { terrain: [BaseTileEnum.Dirt]}, { terrain: [BaseTileEnum.Dirt] }],
[{ terrain: [BaseTileEnum.Lava], topping: [TerrainTopper.Autumn_Tree] }, { terrain: [BaseTileEnum.Dirt]}, { terrain: [BaseTileEnum.Dirt], topping: [TerrainTopper.Autumn_Tree] }, { terrain: [BaseTileEnum.Dirt] }, { terrain: [BaseTileEnum.Dirt] }, { terrain: [BaseTileEnum.Dirt]}]]

const sampleCharacterGrid = new Map<string, GridValue>();

sampleCharacterGrid.set("3,4", { character: CharacterTileEnum.Blue, highlight: true});
sampleCharacterGrid.set("3,3", { character: CharacterTileEnum['Pink Ship'], highlight: false});

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

type characterArrayItem = {
  character: [CharacterTileEnum | null, CharacterTileEnum | null],
  coordinates: [number, number]
} 

export default function HexMap() {
  const [hexHeight, setHexHeight] = useState(0);
  const ref = useRef(null);
  const widthRef = useRef<HTMLInputElement>(null);
  const heightRef = useRef(0);
  const [hexGrid, setHexGrid] = useState<Array<Array<hexInformation | null>>>([[]]);
  const [characterArray, setCharacterArray] = useState<Array<characterArrayItem>>();

  const counter = useRef(0);
  const isRightTop = useRef(false);
  const [grid, setGrid] = React.useState(new Map<string, GridValue>(sampleCharacterGrid));
  function getCharacterArray(item: Array<Array<hexInformation | null>>) : Array<characterArrayItem> {
    const returnArray: Array<characterArrayItem> = [];
    for (var y = 0; y < item.length; y++) {
      for (var x = 0; x < item[y].length; x++) {
        if (item[y][x] !== null && item[y][x]?.character?.[0]) {
          let newValue: characterArrayItem = {
            character: item[y][x].character,
            coordinates: [x, y]
          }
          returnArray.push(newValue);
        }
      }
    }
    return returnArray;
  }

  // Get the value of a cell
  const getCell = (x: number, y: number): GridValue | undefined => grid.get(coordinateKey(x, y));
  
  // Update the value or properties of a cell
  const updateCell = (x: number, y: number, updates: Partial<GridValue>): void => {
    setGrid(prevGrid => {
      const key = coordinateKey(x, y);
      const existingCell = prevGrid.get(key) || { character: null };
      const updatedCell = { ...existingCell, ...updates };
      const newGrid = new Map(prevGrid);
      newGrid.set(key, updatedCell);
      return newGrid;
    });
  };

  // maybe on hover.

  
  // Example Usage
  // updateCell(2, 3, { character: "My Value", highlight: true });


  useEffect(() => {
    let test = populateGhostHexes(sampleHexGrid);
    let newCharacterGrid = getCharacterArray(test);
    setHexGrid([...test])
    setTimeout(() => {
      setHexHeight(ref.current.clientHeight)
    }, 500)
  }, [])

  function moveCharacter(destination: [number, number]) {
    for (var y = 0; y < hexGrid.length; y++) {
      for (var x = 0; x < hexGrid[y].length; x++) {
        if (hexGrid[y][x] !== null && hexGrid[y][x]?.character?.[0]) {
          hexGrid[y][x].character = null;
        }
      }
    }
    hexGrid[destination[1]][destination[0]].character = [CharacterTileEnum['Pink Ship'], null];

    setHexGrid([...hexGrid]);
  }

  function debug () {
    // purpose it to debug any issues that might occur for the user and recheck and set all values
  }

  function downloadJSON() {
    // goal is to first grab the data
    let jsonContent = "data:application/json;charset=utf-8," + encodeURIComponent(JSON.stringify(hexGrid, null, 2));
    var link = document.createElement("a");
    link.setAttribute("href", jsonContent);
    link.setAttribute("download", `${"hex-map"}.json`); document.body.appendChild(link); // Required for Firefox

    link.click(); // This will download the data file named "my_data.csv".
  }

  function uploadJSON(item: FileList) {
    const files = item;
    if (files && files.length > 0) {
      const file = files[0];

      // Check if the file is a CSV
      if (file.type === "application/json") {
        const reader = new FileReader();

        reader.onload = (e) => {

          try {
            const text = e.target?.result as string;
            console.log(JSON.parse(text));  // This is the JSON content
            setHexGrid(JSON.parse(text));
  
          } catch (error) {
            console.error("Failed to parse json")
          }

        };

        reader.readAsText(file);  // Read file as text
      } else {
        console.error("Uploaded file is not a JSON");
      }
    }

  }

  function clearMap() {
    //must clear the map
    setHexGrid([[{ terrain: [BaseTileEnum.None]}, { terrain: [BaseTileEnum.None]}],
      [{ terrain: [BaseTileEnum.None]}, { terrain: [BaseTileEnum.Dirt]}, { terrain: [BaseTileEnum.None]}],
      [{ terrain: [BaseTileEnum.None]}, { terrain: [BaseTileEnum.None]}]
    ],
    );
  }

  function populateGhostHexes(originalHexGrid: Array<Array<hexInformation | null>>): Array<Array<hexInformation | null>> {
    // go through y axis starting from the top
    for (let yValues = 0; yValues < originalHexGrid.length; yValues++) {
      if (yValues === 0) {
        increaseHeight(originalHexGrid, true);
      } else {

        for (let xValues = 0; xValues < originalHexGrid[yValues].length; xValues++) {
          // if the hex is not null or unefined or none
          if (originalHexGrid[yValues][xValues] !== null && originalHexGrid[yValues][xValues] !== undefined && originalHexGrid[yValues][xValues].terrain[0] !== BaseTileEnum.None) {

            addSurroundingGhostHexes(originalHexGrid, xValues, yValues);
          }
        }
      }
    }
    return originalHexGrid;
  }

  function increaseHeight(originalHexGrid: Array<Array<hexInformation | null>>, top: boolean) {
    //increase as needed
    console.log("increasing Height", originalHexGrid)
    let arr: Array<hexInformation | null> = [...Array(originalHexGrid[0].length)].fill(null);
    if (top) {
      let gridHeightCheck = (originalHexGrid.unshift(arr))
      console.log("we are changing top row?")
      isRightTop.current = !isRightTop.current;
      counter.current = counter.current + 1;
    } else {
      // what is going on here?
      let gridHeightCheck = (originalHexGrid.push(arr))
    }
  }

  function increaseWidth(originalHexGrid: Array<Array<hexInformation | null>>, left: boolean) {
    originalHexGrid.map((item, index) => {
      // just the first row needs to be checked.
      if (left) {
        let gridWidthCheck = (item.unshift(null))
        if (index === 0 && gridWidthCheck > originalHexGrid[0].length) {
        }
      } else {
        let gridWidthCheck = (item.push(null))
        if (index === 0 && gridWidthCheck > originalHexGrid[0].length) {
        }
      }
    })
  }

  function addSurroundingGhostHexes(originalHexGrid: Array<Array<hexInformation>>, xValue: number, yValue: number) {
    let storedXValue = xValue;

    // what is going on?

    console.log("hell")
    let storedYValue = yValue;
    if (originalHexGrid[yValue][xValue] === null || originalHexGrid[yValue][xValue].terrain[0] === BaseTileEnum.None) {
      return;
    }
    if (storedXValue >= originalHexGrid[0].length - 1) {
      increaseWidth(originalHexGrid, false);
    }

    if (storedXValue === 0) {
      increaseWidth(originalHexGrid, true);
      storedXValue++;
    }

    if (storedYValue >= originalHexGrid.length - 1) {
      increaseHeight(originalHexGrid, false);
    }
    else if (storedYValue === 0) {
      increaseHeight(originalHexGrid, true);
      storedYValue++;
    }
    let numbero: number = 0;
    if (isRightTop.current) {

      if (storedYValue % 2 === 0) {
        //this is a right most component
        numbero = 1;
        // number is 1 because we need the right most tile to also be checked

      } else if (storedYValue % 2 === 1) {
        // the bottom so we need to check the left most tile
        numbero = -1;
      }
    } else {
      // top most is a left most component
      if (storedYValue % 2 === 0) {
        //this is a left most component
        numbero = -1;
      } else if (storedYValue % 2 === 1) {
        numbero = 1;
      }
    }

    // let isGreaterThan0 = (storedXValue + numbero - 1 >= 0);
    let isGreaterThan0 = storedXValue > 0;

    if (originalHexGrid[storedYValue + 1][storedXValue + numbero] === null) {
      originalHexGrid[storedYValue + 1][storedXValue + numbero] = {
        terrain: [BaseTileEnum.None]
      }
    }

    if (originalHexGrid[storedYValue + 1][storedXValue] === null && isGreaterThan0) {
      originalHexGrid[storedYValue + 1][storedXValue] = {
        terrain: [BaseTileEnum.None]
      }
    }

    // handle the top elements
    if (originalHexGrid[storedYValue - 1][storedXValue] === null) {
      originalHexGrid[storedYValue - 1][storedXValue] = {
        terrain: [BaseTileEnum.None]
      }
    }

    if (originalHexGrid[storedYValue - 1][storedXValue + numbero] === null && isGreaterThan0) {
      originalHexGrid[storedYValue - 1][storedXValue + numbero] = {
        terrain: [BaseTileEnum.None]
      }
    }

    // handle elements on the same row
    if (originalHexGrid[storedYValue][storedXValue - 1] === null && isGreaterThan0) {
      originalHexGrid[storedYValue][storedXValue - 1] = {
        terrain: [BaseTileEnum.None]
      }
    }

    if (originalHexGrid[storedYValue][storedXValue + 1] === null && isGreaterThan0) {
      originalHexGrid[storedYValue][storedXValue + 1] = {
        terrain: [BaseTileEnum.None]
      }
    }
  }

  let hexComponents = hexGrid.map((item, index, actualArray) => {
    const row = [];
    const hexHeightCalculation = hexHeight * 0.4;
    let pixel = "-" + hexHeightCalculation + "px"
    for (var i = 0; i < item.length; i++) {
      row.push(<IndividualHexPiece hexHeight={hexHeight}
        characters={getCell(i, index)}
        setHexGrid={setHexGrid} hexGrid={hexGrid}
        moveCharacter={moveCharacter}
        addSurroundingGhostHexes={addSurroundingGhostHexes}
        key={index.toString() + i.toString() + "hexKey"}
        hexInformation={item[i]} 
        toggleThisHex={() => { }} 
        indexArray={[i, index]} />)
      //row is a given row, it will need to be enclosed in a div at some point
    }

    // the first value is just to calculate the height of the hexes to then caculate how much to increase the other hex rows by so that they can be proper
    if (index === 0) {
      return (
        // flex-grow is problematic?
        <div key={index + "rowKey"} style={{ display: "flex", width: "100%" }} ref={ref}>
          {isRightTop.current ? <div className='half-hex'>hello</div> : ""}

          {row}
          {isRightTop.current ? "" : <div className='half-hex'>hello</div>}

        </div>
      )

    }
    if (index % 2 === 1) {
      return (
        <div key={index + "rowKey"} style={{ display: "flex", width: "100%", marginTop: pixel }}>

          {isRightTop.current ? "" : <div className='half-hex'>hello</div>}
          {row}
          {isRightTop.current ? <div className='half-hex'>hello</div> : ""}

        </div>
      )
    } else {
      return (
        <div key={index + "rowKey"} style={{ display: "flex", width: "100%", marginTop: pixel }}>
          {isRightTop.current ? <div className='half-hex'>hello</div> : ""}

          {row}
          {isRightTop.current ? "" : <div className='half-hex'>hello</div>}

        </div>
      )

    }
  })

  return (
    <>
      <div>
        <div className="hex-map-slide-container">
          <input ref={widthRef} type="range" min="1" max="100" className="slider" id="myRange" />

        </div>
      </div>
      <div className='hex-map-container'>
        <div id="hex-map-canvas">
          {hexComponents}
        </div>

      </div>
      <ButtonGroup>
      <Button
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<CloudUploadIcon />}
          onClick={downloadJSON}>
        Download for later</Button>
        <Button
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<CloudUploadIcon />}
        >
          Upload JSON file
          <VisuallyHiddenInput
            type="file"
            onChange={(event) => uploadJSON(event.target.files)}
            multiple
          />
        </Button>

        <Button
          component="label"
          role={undefined}
          variant="contained"
          onClick={clearMap}

        >
          Clear Map
        </Button>



      </ButtonGroup>
      <a href="mailto:deeperwishingwell@gmail.com?subject=just-a-subject">Send me and e-mail for feedback!</a>
    </>
  );
}
