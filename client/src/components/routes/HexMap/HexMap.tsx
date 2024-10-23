import * as React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { BaseTileEnum, hexInformation } from './_Types.jsx';
import IndividualHexPiece from './IndividualHexPiece.jsx';
import RightClickMenu from './RightClickMenu.jsx';


const sampleHexGrid: Array<Array<hexInformation | null>> = [[null, null, { terrain: [BaseTileEnum.Dirt], topping: ["fish"] }, { terrain: [BaseTileEnum.Dirt], topping: ["fish"] }, { terrain: [BaseTileEnum.Dirt], topping: ["fish"] }, { terrain: [BaseTileEnum.Dirt], topping: ["fish"] }], 
[{ terrain: [BaseTileEnum.Dirt], topping: ["fish"] }, { terrain: [BaseTileEnum.Dirt], topping: ["fish"] }, { terrain: [BaseTileEnum.Dirt], topping: ["fish"] }, { terrain: [BaseTileEnum.Dirt], topping: ["fish"] }, { terrain: [BaseTileEnum.Dirt], topping: ["fish"] }, { terrain: [BaseTileEnum.Dirt], topping: ["fish"] }], 
[{ terrain: [BaseTileEnum.Dirt], topping: ["fish"] }, { terrain: [BaseTileEnum.Dirt], topping: ["fish"] }, { terrain: [BaseTileEnum.Dirt], topping: ["fish"] }, { terrain: [BaseTileEnum.Dirt], topping: ["fish"] }]]

export default function HexMap() {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const [hexHeight, setHexHeight] = useState(0);
  const ref = useRef(null);
  const [hexGrid, setHexGrid] = useState<Array<Array<hexInformation | null>>>([[]]);
  const [gridWidth, setGridWidth] = useState(0);
  const [gridHeight, setGridHeight] = useState(0);
  const [zoom, setZoom] = useState(0);



  useEffect(() => {
    // maybe a timeout function?
    setHexHeight(ref.current.clientHeight)
    console.log(ref.current.clientHeight, "what is client height?")
  }, [])

  const toggleThisHex = (newHex: hexInformation, indexArray: [number, number]) => {
    let newHexGrid: Array<Array<hexInformation>> = hexGrid;
    // the last one
    newHexGrid[indexArray[1]][indexArray[0]] = newHex;
    //replace the value here
    setHexGrid([...newHexGrid]);


  }
  // Handle clicks of the image.  
  // IOCE: Input is going to need to be an address but we also need an index value so that we know which 
  // output is going to be a change in the appearance
  const handleCanvasClick = (e: React.MouseEvent) => {
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
        console.log("this is an empty pixel")
        //if transparent go deeper.  Else, hmmmm.  What about trees?  
      } else {
        e.stopPropagation();
      }

      console.log(pixelData, "this is the console data");  // This will log the RGBA values of the clicked pixel
    }
  };


  let hexComponents = sampleHexGrid.map((item, index, actualArray) => {
    const row = [];
    const hexHeightCalculation = hexHeight*2.2;

    let pixel = "-" + hexHeightCalculation + "px"
    console.log(pixel, "what is this?");

    for (var i = 0; i < item.length; i++) {
      row.push(<IndividualHexPiece hexInformation={item[i]} toggleThisHex={() => { }} indexArray={[index, i]} />)
      //row is a given row, it will need to be enclosed in a div at some point
    }

    // the first value is just to calculate the height of the hexes to then caculate how much to increase the other hex rows by so that they can be proper
    if (index === 0) {
      return (
        <div style={{ display: "flex", width: "100%" }} ref={ref}>
          <div className='half-hex'>hello</div>

          {row}
        </div>
      )

    }
    if (index % 2 === 1) {
      return (
        <div style={{ display: "flex", width: "100%", marginTop: pixel }}>

          {row}
          <div className='half-hex'>hello</div>

        </div>
      )
    } else {
      return (
        <div style={{ display: "flex", width: "100%", marginTop: pixel }}>
          <div className='half-hex'>hello</div>

          {row}

        </div>
      )

    }
  })


  //i can use stop propgation if the top image is not transparent, then it knows not to dig deeper.
  return (
    <>
      <div className="slidecontainer">
        <input onChange={(e)=> {setGridWidth(parseInt(e.target.value))}} type="range" min="1" max="100" value={gridWidth} className="slider" id="myRange" />
        <p>Width: <input id="width" type="text" /></p>
        <input onChange={(e)=> {setGridHeight(parseInt(e.target.value))}} type="range" min="1" max="100" value={gridHeight} className="slider" id="myRange" />
        <p>Height: <input id="width" type="text" /></p>
        <input onChange={(e)=> {setZoom(parseInt(e.target.value))}} type="range" min="1" max="100" value={zoom} className="slider" id="myRange" /> <span>zoom value</span>
        <p>Zoom: <input id="width" type="text" /></p>

      </div><div style={styles.container}>
        <div id="hex-map-canvas">
        {hexComponents}
        </div>
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

