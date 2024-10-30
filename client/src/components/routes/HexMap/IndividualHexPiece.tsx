//Idea, individual work
// each one should possibly have multiple stacks of the same piece and possibly 

import * as React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { BaseFullTileEnum, BaseTileEnum, hexInformation } from './_Types.jsx';

// will require receiving stuff
interface Props {
  // this could possibly be a null value which means that there is no hex there.  Like an abyss
  addSurroundingGhostHexes: (originalHexGrid: hexInformation[][], xValue: number, yValue: number) => void;
  hexGrid: hexInformation[][];
  setHexGrid: React.Dispatch<React.SetStateAction<hexInformation[][]>>;
  hexInformation: hexInformation | null;
  toggleThisHex: any;
  // will be an x and y value
  indexArray: Array<any>;
  hexHeight: number;

  // probably also need to import a bunch of functions as well
};

export default function IndividualHexPiece(props: Props) {
  const ref = useRef(null);
  //I think I need to add the hexInformation here so it can be updated more easily?  I think?
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });


  // Handle clicks on the canvas
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
        //if transparent go deeper.  Else, hmmmm.  What about trees?  
      } else {
        e.stopPropagation();
      }

      console.log(pixelData, "this is the console data");  // This will log the RGBA values of the clicked pixel
    }
  };


  function handleClickOutside(event: { target: any; }) {
    if (ref.current && !ref.current.contains(event.target)) {
      setMenuVisible(false);
      document.removeEventListener("mousedown", handleClickOutside);


    }
  }

  function convertRemToPixels(remValue: number) {
    // remValue here is like 5 rem.
    return remValue * parseFloat(getComputedStyle(document.documentElement).fontSize);
  }

  const handleRightClick = (event: React.MouseEvent) => {
    event.preventDefault(); // Prevent the default context menu

    document.addEventListener("mousedown", handleClickOutside);
    // we need to add a menu calculation here.  Hmm.
    

    
    //my screen the box is 314 high 97.75 wide
    console.log(getComputedStyle(document.documentElement).fontSize, "this is the fontsize we need to multiply by?")
    console.log(props.hexHeight, "what a mess");
    const menuWidth = convertRemToPixels(20); // Assuming the width of the context menu
    const menuHeight = convertRemToPixels(20); // Assuming the height of the context menu
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    let posX = event.pageX;
    let posY = event.pageY;

    if (posX + menuWidth > windowWidth) {
      posX = windowWidth - menuWidth;
    }

    // Adjust position if the menu overflows the bottom edge of the screen
    if (posY + menuHeight > windowHeight) {
      posY = windowHeight - menuHeight;
    }

    console.log (window.innerHeight, "this height needs to be calculated somehow?")
    // I guess this is the height of the component?
  
    setMenuPosition({ x: posX, y: posY });
    setMenuVisible(true);
  };

  const adjustAppearance = (item: keyof typeof BaseTileEnum) => {
    // not properly offsetting the top
    let test = false;

    if (props.hexInformation.terrain[0] === BaseTileEnum.None) {
      test = true;
    }
    props.hexInformation.terrain[0] = BaseTileEnum[item];
    if (test) {
      props.addSurroundingGhostHexes(props.hexGrid, props.indexArray[0], props.indexArray[1])

    }
    props.setHexGrid([...props.hexGrid]);


  }

  const BaseTileOptions = Object.keys(BaseTileEnum);
  const BaseTileList = BaseTileOptions.map((item) => {
    return (<li key={item} style={{ padding: "5px 10px", cursor: "pointer" }} onClick={() => { adjustAppearance(item as keyof typeof BaseTileEnum) }}>{item}</li>)
  })

  let x = 1;
  const calculated = props.hexHeight * x;
  console.log(calculated, "this is the calculated value");
  let stackedTerrain = [];

  if (props.hexInformation !== null && props.hexInformation.terrain[1]) {
    console.log("only appears once at the moment?", props.hexInformation)
    console.log(`-${calculated}px`, "calculated Height")
    stackedTerrain.push(
      <img id="my-image1" className={"hex-top-floors"} style={{ marginLeft: "1.5px", marginTop: `-${calculated+1.5}px` }} src={BaseFullTileEnum['Full Grass']} />
    )
    // it would be `-${calculated + 25}px`
    stackedTerrain.push(
      <img id="my-image2" className={"hex-top-floors"} style={{ marginLeft: "1.5px", marginTop: `-${calculated + calculated/4}px` }} src={BaseFullTileEnum['Full Grass']} />
    )
  }

  return (
    <span >
      <span style={{position: "relative"}} title={props.indexArray[0] + ", " + props.indexArray[1]}>
        <img id="my-image" className={`hex-image ${props.hexInformation === null ? "transparent" : ""} ${props.hexInformation?.terrain?.[0] === BaseTileEnum.None ? "semi-transparent" : ""}`} onContextMenu={(e) => {
          e.preventDefault(); // prevent the default behaviour when right clicked
          handleRightClick(e)
        }} onClick={handleCanvasClick} src={props.hexInformation?.terrain ? props.hexInformation?.terrain[0] : BaseTileEnum.Stone} />

        {stackedTerrain}
      </span>

      {menuVisible && props.hexInformation?.terrain !== null && (
        <ul
          ref={ref}
          style={{
            position: "absolute",
            top: `${menuPosition.y}px`,
            left: `${menuPosition.x}px`,
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            padding: "10px",
            listStyle: "none",
            zIndex: 1000,
          }}
        >
          {BaseTileList}
        </ul>
      )}

    </span>

  );
}

const styles = {
  container: {
    margin: '0 auto',
  },
};
