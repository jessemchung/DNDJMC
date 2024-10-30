import * as React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { BaseTileEnum, hexInformation } from './_Types.jsx';
import IndividualHexPiece from './IndividualHexPiece.jsx';
import RightClickMenu from './RightClickMenu.jsx';


const sampleHexGrid: Array<Array<hexInformation | null>> = [[null, { terrain: [BaseTileEnum.None], topping: ["fish"] }, { terrain: [BaseTileEnum.Water], topping: ["fish"] }, { terrain: [BaseTileEnum.Dirt], topping: ["fish"] }, { terrain: [BaseTileEnum.Dirt], topping: ["fish"] }, { terrain: [BaseTileEnum.Grass, BaseTileEnum.Grass], topping: ["fish"] }],
[{ terrain: [BaseTileEnum.Magic], topping: ["fish"] }, { terrain: [BaseTileEnum.Dirt], topping: ["fish"] }, { terrain: [BaseTileEnum.Dirt], topping: ["fish"] }, { terrain: [BaseTileEnum.Dirt], topping: ["fish"] }, { terrain: [BaseTileEnum.Dirt], topping: ["fish"] }, { terrain: [BaseTileEnum.Dirt], topping: ["fish"] }],
[{ terrain: [BaseTileEnum.Lava], topping: ["fish"] }, { terrain: [BaseTileEnum.Dirt], topping: ["fish"] }, { terrain: [BaseTileEnum.Dirt], topping: ["fish"] }, { terrain: [BaseTileEnum.Dirt], topping: ["fish"] }, { terrain: [BaseTileEnum.Dirt], topping: ["fish"] }, { terrain: [BaseTileEnum.Dirt], topping: ["fish"] }]]



export default function HexMap() {
  // grid height and grid width are
  // const [gridHeight, setGridHeight] = useState<number>(sampleHexGrid.length);
  // const [gridWidth, setGridWidth] = useState<number>(sampleHexGrid[0].length);
  // const [zoom, setZoom] = useState(0);
  // const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const [hexHeight, setHexHeight] = useState(0);
  const ref = useRef(null);
  const widthRef = useRef<HTMLInputElement>(null);
  const heightRef = useRef(0);
  const [hexGrid, setHexGrid] = useState<Array<Array<hexInformation | null>>>([[]]);

  const counter = useRef(0);
  const isRightTop = useRef(false);

  useEffect(() => {

    let test = populateGhostHexes(sampleHexGrid);
    setHexGrid([...test])
    setTimeout(() => {
      setHexHeight(ref.current.clientHeight)
    }, 500)
  }, [])


  function toggleTopRow() {
    // setIsRightTopRow(!isRightTopRow);
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
    console.log(xValue, "x")
    let storedXValue = xValue;
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
      console.log(originalHexGrid, "Increase Y bottom??")
      increaseHeight(originalHexGrid, false);
    }
    else if (storedYValue === 0) {
      console.log("increase Y+, meaning that from the top")
      increaseHeight(originalHexGrid, true);
      storedYValue++;
    }
    console.log(isRightTop, "this is true?")

    // choose 3,4 what is going on here?  It is two off now?
    // rightTop.current has never changed
    // 

    let numbero: number = 0;
    if (isRightTop.current) {

      if (storedYValue%2 === 0) {
        //this is a right most component
        numbero = 1;
        // number is 1 because we need the right most tile to also be checked

      } else if (storedYValue%2 === 1) {
        console.log("This is a left most component");
        // the bottom so we need to check the left most tile
        numbero = -1;
      }

    } else {
      // top most is a left most component
      if (storedYValue%2 === 0) {
        //this is a left most component
        numbero = -1 ;

      } else if (storedYValue%2 === 1) {
        numbero = 1;
      }

    }

    let isGreaterThan0 = (storedXValue + numbero - 1 >= 0);

    if (originalHexGrid[storedYValue + 1][storedXValue + numbero] === null) {
      console.log("do we even get in here?", storedXValue + numbero)
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


  function handleCanvasClick(e: React.MouseEvent) {
    var img = document.getElementById('my-image') as HTMLImageElement;
    var canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    canvas.getContext('2d').drawImage(img, 0, 0, img.width, img.height);

    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.drawImage(img, 0, 0, img.width, img.height);

      // Use nativeEvent to access offsetX and offsetY
      const { offsetX, offsetY } = e.nativeEvent as MouseEvent;
      const pixelData = ctx.getImageData(offsetX, offsetY, 1, 1).data;
      if (pixelData[3] === 0) {
        //if transparent go deeper.  Else, hmmmm.  What about trees?  
      } else {
        e.stopPropagation();
      }

      console.log(pixelData, "this is the console data");
    }
  };

  let hexComponents = hexGrid.map((item, index, actualArray) => {
    const row = [];
    const hexHeightCalculation = hexHeight * 0.4;
    let pixel = "-" + hexHeightCalculation + "px"
    for (var i = 0; i < item.length; i++) {
      row.push(<IndividualHexPiece hexHeight={hexHeight} 
        setHexGrid={setHexGrid} hexGrid={hexGrid} 
        addSurroundingGhostHexes={addSurroundingGhostHexes} 
        key={index.toString() + i.toString() + "hexKey"} 
        hexInformation={item[i]} toggleThisHex={() => { }} indexArray={[i, index]} />)
      //row is a given row, it will need to be enclosed in a div at some point
    }

    // the first value is just to calculate the height of the hexes to then caculate how much to increase the other hex rows by so that they can be proper
    if (index === 0) {
      return (
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

  //
  //i can use stop propgation if the top image is not transparent, then it knows not to dig deeper.
  return (
    <>
      <div>
        <div className="hex-map-slide-container">
          <input ref={widthRef} type="range" min="1" max="100" className="slider" id="myRange" />
          {/* <input onChange={(e)=> {setGridHeight(parseInt(e.target.value))}} type="range" min="1" max="100" value={gridHeight} className="slider" id="myRange" />
        <p>Height: <input id="width" type="text" value={gridHeight} />{gridHeight}</p>
        <input onChange={(e)=> {setZoom(parseInt(e.target.value))}} type="range" min="1" max="100" value={zoom} className="slider" id="myRange" /> <span>zoom value</span>
        <p>Zoom: <input id="width" type="text" value={zoom} />{zoom}</p> */}

        </div>
      </div>
      <div className='hex-map-container'>
        <div id="hex-map-canvas">
          {hexComponents}
        </div>
        <button onClick={toggleTopRow}>click</button>
      </div>


    </>
  );
}

// this margin is adjusted?  hmm.  Something to think about.  Especially as I zoom in.  I think a max height is probably preferable?
const styles = {
  container: {
    margin: '0 auto',
  },
};

