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

  // probably also need to import a bunch of functions as well
};

export default function IndividualHexPiece(props: Props) {
  const ref = useRef(null);
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  //I think I need to add the hexInformation here so it can be updated more easily?  I think?
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  
  const [terrain, setTerrain] = useState<BaseTileEnum[] | null>(props.hexInformation?.terrain || null);
  const [flavorName, setFlavorName] = useState(props.hexInformation?.name || null);
  const [opaque, setOpaque] = useState(props.hexInformation?.opaque || null);
  const [topping, setTopping] = useState(props.hexInformation?.topping || null);


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
    props.setHexGrid([... props.hexGrid]);


  }

  // built an array of components that can be stacked on top of each other.  I guess a span?
  //

  const BaseTileOptions = Object.keys(BaseFullTileEnum);
  const BaseTileList = BaseTileOptions.map((item) => {
    return (<li key={item} style={{ padding: "5px 10px", cursor: "pointer" }} onClick={() => {adjustAppearance(item as keyof typeof BaseTileEnum)}}>{item}</li>)
  })

  //i can use stop propgation if the top image is not transparent, then it knows not to dig deeper.
  // some kind of flexbox?  I can't help but think that grid is going to be better though... hmm

  return (
    <span title={props.indexArray[0] + ", " + props.indexArray[1]}>
      <img id="my-image"  className={`hex-image ${props.hexInformation === null ? "transparent" : ""} ${props.hexInformation?.terrain?.[0] === BaseTileEnum.None ? "semi-transparent" : ""}` } onContextMenu={(e) => {
        //
        e.preventDefault(); // prevent the default behaviour when right clicked
        handleRightClick(e)
      }} onClick={handleCanvasClick} src={props.hexInformation?.terrain ? props.hexInformation?.terrain[0] : BaseTileEnum.Stone} />


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

