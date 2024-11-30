// Idea, individual work
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
  const contextRef: React.MutableRefObject<any> = useRef(null);
  const expandedContextRef: React.MutableRefObject<any> = useRef(null);

  //I think I need to add the hexInformation here so it can be updated more easily?  I think?
  const [menuVisible, setMenuVisible] = useState<boolean>(false);
  const [expandedMenuPosition, setExpandedMenuPosition] = useState<boolean>(false);

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

    }
  };


  function handleClickOutside(event: { target: any; }) {
    if (contextRef.current && !contextRef.current.contains(event.target) && (expandedContextRef.current === null || !expandedContextRef.current.contains(event.target))) {
      setMenuVisible(false);
      setExpandedMenuPosition(false);
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }

  function convertRemToPixels(remValue: number) {
    return remValue * parseFloat(getComputedStyle(document.documentElement).fontSize);
  }

  function handleRightClickHex(event: React.MouseEvent) {
    event.preventDefault(); // Prevent the default context menu

    document.addEventListener("mousedown", handleClickOutside);
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

  function deleteHex() {
  }

  function checkIfLeavingAdvancedContext(event: { target: any; }) {
    console.log("hello?")
    if (expandedContextRef.current && contextRef.current) {
      setExpandedMenuPosition(false);
    }
  }

  const adjustAppearance = (item: keyof typeof BaseTileEnum) => {
    // not properly offsetting the top
    let test = false;

    if (props.hexInformation.terrain[0] === BaseTileEnum.None) {
      test = true;
    }
    props.hexInformation.terrain[props.hexInformation.terrain.length-1] = BaseTileEnum[item];
    if (test) {
      props.addSurroundingGhostHexes(props.hexGrid, props.indexArray[0], props.indexArray[1])
    }
    props.setHexGrid([...props.hexGrid]);
  }

  const addStack = (item: keyof typeof BaseFullTileEnum) => {
    // not properly offsetting the top

    props.hexInformation.terrain.push(BaseFullTileEnum[item]);
    console.log(props.hexInformation, "something weird?")

    props.setHexGrid([...props.hexGrid]);
  }

  const BaseTileOptions = Object.keys(BaseTileEnum);
  //! this add a second arrow context menu for additional stacking and unstacking and deleting make it have a scroll wheel as well

  const BaseTileList = BaseTileOptions.map((item) => {
    return (<li key={"basetile" + item} style={{ padding: "5px 10px", cursor: "pointer" }} onClick={() => { adjustAppearance(item as keyof typeof BaseTileEnum) }}>{item}</li>)
  })

  
  const FullTileOptions = Object.keys(BaseFullTileEnum);

  const FullTileList = FullTileOptions.map((item) => {
    return (<li key={"fulltile " + item}  style={{ padding: "5px 10px", cursor: "pointer" }} onClick={() => { addStack(item as keyof typeof BaseFullTileEnum) }}>{item}</li>)
  })

  BaseTileList.push(
    <li key={"delete"} style={{ padding: "5px 10px", cursor: "pointer" }} onClick={() => { deleteHex() }}>Delete</li>
  )

  let x = 1;
  const calculated = props.hexHeight * x;

  const stackedTerrain = [];

  if (props.hexInformation !== null && props.hexInformation.terrain[1]) {
    for (var i = 1; i < props.hexInformation.terrain.length; i++) {
      stackedTerrain.push(
        <img key={"stack" + i} id="my-image1" className={"hex-top-floors"} style={{ marginLeft: "1.5px", marginTop: `-${calculated + ( calculated * (i - 1) / 4) + 1.5}px` }} src={props.hexInformation.terrain[i]} />
      )
    }
  }

  return (
    <span >
      <span style={{ position: "relative" }} title={props.indexArray[0] + ", " + props.indexArray[1]}>
        <img id="my-image" className={`hex-image ${props.hexInformation === null ? "transparent" : ""} ${props.hexInformation?.terrain?.[0] === BaseTileEnum.None ? "semi-transparent" : ""}`} onContextMenu={(e) => {
          e.preventDefault(); // prevent the default behaviour when right clicked
          handleRightClickHex(e)
        }} onClick={handleCanvasClick} src={props.hexInformation?.terrain ? props.hexInformation?.terrain[0] : BaseTileEnum.Stone} />

        {stackedTerrain}
      </span>

      {menuVisible && props.hexInformation?.terrain !== null && (
        <ul
          ref={contextRef}
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
          <li onClick={() => setExpandedMenuPosition(true)} style={{ padding: "5px 10px", cursor: "pointer" }}>Add Stack</li>
          {BaseTileList}

        </ul>
      )}

      {expandedMenuPosition && (
        <ul
          onMouseLeave={(event) => checkIfLeavingAdvancedContext(event)}
          ref={expandedContextRef}
          style={{
            position: "absolute",
            top: `${menuPosition.y}px`,
            left: `${menuPosition.x + contextRef.current.clientWidth}px`,
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            padding: "10px",
            listStyle: "none",
            zIndex: 1001,
          }}
        >
          {FullTileList}
        </ul>
      )

      }

    </span>

  );
}

const styles = {
  container: {
    margin: '0 auto',
  },
};


// suspicicion.  I need to check whenever it leaves if it is entering another component