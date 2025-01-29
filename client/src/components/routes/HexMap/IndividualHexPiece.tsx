import * as React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { BaseFullTileEnum, BaseTileEnum, characterInformation, CharacterTileEnum, GridValue, hexInformation } from './_Types.jsx';
import { Box, Button, ButtonGroup, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid2, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { MENU_HEIGHT, MENU_WIDTH } from './HexMapCommon.jsx';

interface Props {
  addSurroundingGhostHexes: (originalHexGrid: hexInformation[][], xValue: number, yValue: number) => void;
  characters: GridValue | undefined;
  moveCharacter: (destination: any) => void;
  hexGrid: hexInformation[][];
  setHexGrid: React.Dispatch<React.SetStateAction<hexInformation[][]>>;
  hexInformation: hexInformation | null;
  toggleThisHex: any;
  indexArray: [number, number];
  hexHeight: number;
};

export default function IndividualHexPiece(props: Props) {
  const contextRef: React.MutableRefObject<any> = useRef(null);
  const expandedContextRef: React.MutableRefObject<any> = useRef(null);
  const [form, setForm] = useState<hexInformation>(JSON.parse(JSON.stringify(props.hexInformation)));
  const [menuVisible, setMenuVisible] = useState<boolean>(false);
  const [expandedMenuPosition, setExpandedMenuPosition] = useState<boolean>(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const [open, setOpen] = useState<boolean>(false);

  type EnumLike = { [key: string]: string | number };
  const getFromEnumSelectComponents = (selected?: string, ...enums: EnumLike[]) => {
    return enums.flatMap((enumObj) => {
      const options = Object.keys(enumObj).filter((key) => isNaN(Number(key)));
      return options.map((key, index) => (
        <MenuItem key={key + index} value={enumObj[key]}>{key}</MenuItem>
      ));
    });
  };

  const handleCanvasClick = (e: React.MouseEvent) => {
    var img = document.getElementById('my-image') as HTMLImageElement;
    var canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    canvas.getContext('2d').drawImage(img, 0, 0, img.width, img.height);
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.drawImage(img, 0, 0, img.width, img.height);
      const { offsetX, offsetY } = e.nativeEvent as MouseEvent;
      const pixelData = ctx.getImageData(offsetX, offsetY, 1, 1).data;
      if (pixelData[3] === 0) {
      } else {
        e.stopPropagation();
      }
      setOpen(true);
    }
  };

  function handleClickOutside(event: { target: any; }) {
    if (contextRef.current && !contextRef.current.contains(event.target) && (expandedContextRef.current === null || !expandedContextRef.current.contains(event.target))) {
      setMenuVisible(false);
      setExpandedMenuPosition(false);
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }

  /**
   * Handles the right-click event on a hexagon.
   * Prevents the default context menu, calculates the menu position, and updates the state to show the menu.
   * @param event - The mouse event that triggered the right-click.
   */
  function handleRightClickHex(event: React.MouseEvent) {
    event.preventDefault();
    document.addEventListener("mousedown", handleClickOutside);
    const menuPosition = calculateMenuPosition(event);
    setMenuPosition(menuPosition);
    setMenuVisible(true);
  };

  /**
   * Calculates the position of the menu to ensure it stays within the screen bounds.
   * @param event - The mouse event that triggered the right-click.
   * @returns An object containing the adjusted x and y coordinates for the menu position.
   */
  function calculateMenuPosition(event: React.MouseEvent) {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    let posX = event.pageX;
    let posY = event.pageY;
    if (posX + MENU_WIDTH > windowWidth) {
      posX = windowWidth - MENU_WIDTH;
    }
    if (posY + MENU_HEIGHT > windowHeight) {
      posY = windowHeight - MENU_HEIGHT;
    }
    return { x: posX, y: posY };
  }

  function updateTitle(title: string) {
    form.name = title;
    setForm({ ...form });
  }

  function deleteHex() {
    props.hexInformation.terrain.pop();
    props.setHexGrid([...props.hexGrid]);
  }

  function checkIfLeavingAdvancedContext(event: { target: any; }) {
    if (expandedContextRef.current && contextRef.current) {
      setExpandedMenuPosition(false);
    }
  }

  const adjustAppearance = (item: keyof typeof BaseTileEnum) => {
    let isFirstLayerEmpty = false;
    if (props.hexInformation.terrain[0] === BaseTileEnum.None) {
      isFirstLayerEmpty = true;
    }
    props.hexInformation.terrain[props.hexInformation.terrain.length - 1] = BaseTileEnum[item];
    if (isFirstLayerEmpty) {
      props.addSurroundingGhostHexes(props.hexGrid, props.indexArray[0], props.indexArray[1]);
    }
    props.setHexGrid([...props.hexGrid]);
  }

  const addStack = (item: keyof typeof BaseFullTileEnum) => {
    props.hexInformation.terrain.push(BaseFullTileEnum[item]);
    props.setHexGrid([...props.hexGrid]);
  }

  const BaseTileOptions = Object.keys(BaseTileEnum);
  const BaseTileList = BaseTileOptions.map((item) => {
    return (<li key={"basetile" + item} style={{ padding: "5px 10px", cursor: "pointer" }} onClick={() => { adjustAppearance(item as keyof typeof BaseTileEnum) }}>{item}</li>);
  });

  function handleClose() {
    setOpen(false);
  }

  function handleSave() {
    props.hexGrid[props.indexArray[1]][props.indexArray[0]] = form;
    props.setHexGrid([...props.hexGrid]);
    setOpen(false);
  }

  function addTopLayer() {
    form.terrain.push(BaseTileEnum.Grass);
    setForm({ ...form });
  }

  function removeTopLayer() {
    if (form.terrain.length > 1) {
      const undoPossible = form.terrain.pop();
    } else {
      form.terrain[0] = BaseTileEnum.None;
    }
    setForm({ ...form });
  }

  function updateHexForm(terrain: (BaseFullTileEnum | BaseTileEnum), index: number) {
    form.terrain[index] = terrain;
    setForm({ ...form });
  }

  const FullTileOptions = Object.keys(BaseFullTileEnum);
  const FullTileList = FullTileOptions.map((item) => {
    return (<li key={"fulltile " + item} style={{ padding: "5px 10px", cursor: "pointer" }} onClick={() => { addStack(item as keyof typeof BaseFullTileEnum) }}>{item}</li>);
  });

  BaseTileList.push(
    <>
      <li key={"hex-delete"} style={{ padding: "5px 10px", cursor: "pointer" }} onClick={() => { deleteHex() }}>Delete</li>
      <li key={"hex-place-hero"} style={{ padding: "5px 10px", cursor: "pointer" }} onClick={() => { props.moveCharacter(props.indexArray) }}>Place Hero</li>
      <li key={"hex-add-toppers"} style={{ padding: "5px 10px", cursor: "pointer" }} onClick={() => { deleteHex() }}>Add Toppers</li>
    </>
  );

  let x = 1;
  const calculated = props.hexHeight * x;
  const stackedTerrain = [];
  let counter = 1;
  if (props.hexInformation !== null && props.hexInformation.terrain[1]) {
    for (counter = 1; counter < props.hexInformation.terrain.length; counter++) {
      stackedTerrain.push(
        <img key={"stack" + counter} id="my-image1" className={"hex-top-floors"} style={{ marginLeft: "1.5px", marginTop: `-${calculated / 5 + (calculated * (counter - 1) / 4) + 1.5}px` }} src={props.hexInformation?.terrain[counter]} />
      );
    }
  }

  let character: React.JSX.Element;
  if (props.hexInformation?.character && props.hexInformation?.character?.[0]) {
    character = (<img key={"character-marker"} className={"hex-character"} style={{ marginLeft: "25%", width: calculated / 3 + "px", height: "auto" }} src={"./image/map/shipPink_manned.png"} />);
  }

  function editLayers(): React.JSX.Element[] {
    let layerArray = [];
    for (let currentLayer = form?.terrain.length - 1; currentLayer >= 0; currentLayer--) {
      let index = currentLayer;
      let frontendLayer = currentLayer + 1;
      layerArray.push(
        <div style={{ display: "flex" }}>
          <Grid2 size={4}>
            <img src={form?.terrain[index] || BaseTileEnum.None} alt={"EditLayer" + frontendLayer} style={{ maxHeight: '100%', maxWidth: '100%', height: 'auto', objectFit: 'contain' }} />
          </Grid2>
          <Grid2 size={8} style={{ marginLeft: "1em", marginBottom: "1em" }}>
            <InputLabel id={"select-label-select-layer" + frontendLayer}>{"Layer " + (frontendLayer)}</InputLabel>
            <Select style={{ width: "90%" }} labelId="demo-simple-select-label" id={"SelectLayer" + frontendLayer} label={"Layer " + frontendLayer} onChange={(event) => { updateHexForm(event.target.value as BaseFullTileEnum | BaseTileEnum, index) }} value={form?.terrain[index] || BaseTileEnum.None}>
              {getFromEnumSelectComponents("fish", BaseFullTileEnum, BaseTileEnum)}
            </Select>
          </Grid2>
        </div>
      );
    }
    return layerArray;
  }

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{`Edit Hex ${props.indexArray[0]}, ${props.indexArray[1]}`}</DialogTitle>
        <DialogContent>
          <ButtonGroup size='small' variant="contained" aria-label="Adding and removing layers">
            <Button onClick={addTopLayer}>Add Top Layer</Button>
            <Button onClick={removeTopLayer}>Remove Top Layer</Button>
          </ButtonGroup>


          <TextField fullWidth id="outlined-basic" label="Hex Title" value={form?.name || ""} variant="outlined" onChange={(e) => updateTitle(e.target.value)} />
          <Grid2 container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid2 size={12}>
              <Grid2 container flexDirection={"column"} rowSpacing={0} columnSpacing={0}>
                {editLayers()}
              </Grid2>
            </Grid2>
          </Grid2>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
      <span className="hex-span">
        {props.hexInformation?.name ? <p key={props.hexInformation.name + "-hex-title"} id={props.hexInformation.name + "-hex-title"} className={"hex-title"} style={{ marginLeft: "1.5px", maxWidth: `${calculated / 2}px`, zIndex: 999 }}> {props.hexInformation.name} </p> : null}
        <span style={{ position: "relative" }} title={props.indexArray[0] + ", " + props.indexArray[1]}>
          <img id="my-image" className={`hex-image ${props.hexInformation === null ? "transparent" : ""} ${props.hexInformation?.terrain?.[0] === BaseTileEnum.None ? "semi-transparent" : ""}`} onContextMenu={(e) => { e.preventDefault(); handleRightClickHex(e); }} onClick={handleCanvasClick} src={props.hexInformation?.terrain ? props.hexInformation?.terrain[0] : BaseTileEnum.Stone} />
          {stackedTerrain}
          {character}
        </span>
        {menuVisible && props.hexInformation?.terrain !== null && (
          <ul ref={contextRef} style={{ position: "absolute", top: `${menuPosition.y}px`, left: `${menuPosition.x}px`, backgroundColor: "#fff", border: "1px solid #ccc", padding: "10px", listStyle: "none", zIndex: 1000 }}>
            <li onClick={() => setExpandedMenuPosition(true)} style={{ padding: "5px 10px", cursor: "pointer" }}>Add Stack</li>
            {BaseTileList}
          </ul>
        )}
        {expandedMenuPosition && (
          <ul onMouseLeave={(event) => checkIfLeavingAdvancedContext(event)} ref={expandedContextRef} style={{ position: "absolute", top: `${menuPosition.y}px`, left: `${menuPosition.x + contextRef.current.clientWidth}px`, backgroundColor: "#fff", border: "1px solid #ccc", padding: "10px", listStyle: "none", zIndex: 1001 }}>
            {FullTileList}
          </ul>
        )}
      </span>
    </>
  );
}