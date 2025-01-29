
/**
 * Represents the base tile textures available for the map meaning with the dirt underneath.
 * Each enum value corresponds to a specific image file path for a tile texture.
 */
export enum BaseTileEnum {
  Autumn = "./image/map/tileAutumn.png",
  Dirt = "./image/map/tileDirt.png",
  Grass = "./image/map/tileGrass.png",
  Lava = "./image/map/tileLava.png",
  Magic = "./image/map/tileMagic.png",
  Rock = "./image/map/tileRock.png",
  Sand = "./image/map/tileSand.png",
  Snow = "./image/map/tileSnow.png",
  Stone = "./image/map/tileStone.png",
  Water = "./image/map/tileWater.png",
  None = "./image/map/tileSnow_full.png"
}

/**
 * Represents the full tile textures available for the map.
 * Each enum value corresponds to a specific image file path for a tile texture.
 */
export enum BaseFullTileEnum {
  "Full Autumn" = "./image/map/tileAutumn_full.png",
  "Full Dirt" = "./image/map/tileDirt_full.png",
  "Full Grass" = "./image/map/tileGrass_full.png",
  "Full Lava" = "./image/map/tileLava_full.png",
  "Full Magic" = "./image/map/tileMagic_full.png",
  "Full Rock" = "./image/map/tileRock_full.png",
  "Full Sand" = "./image/map/tileSand_full.png",
  "Full Snow" = "./image/map/tileSnow_full.png",
  "Full Stone" = "./image/map/tileStone_full.png",
  "Full Water" = "./image/map/tileWater_full.png",
  "Full None" = "./image/map/tileSnow_full.png"
}

// these are characters like aliens
export enum CharacterTileEnum {
  "Blue" = "./image/map/alienBlue.png",
  "Pink Ship" = "./image/map/shipPink_manned.png"
}

/**
 * Represents a single hex tile, containing information about its terrain, optional name, toppings, opacity, and character placement.
 * 
 * @property {Array<BaseTileEnum | BaseFullTileEnum | null>} terrain - An array of tile types defining the terrain of the hex. Can include `null` values.
 * @property {string} [name] - An optional name that appears in the center of the hex.
 * @property {Array<string>} [topping] - An optional array of toppings, which can be positioned in six locations around the hex with an optional center placement.
 * @property {boolean} [opaque] - An optional flag to indicate whether the hex should be hidden or obscured.
 * @property {[CharacterTileEnum | null, CharacterTileEnum | null]} [character] - An optional tuple representing up to two characters on the hex. Currently, only the first character is utilized. This allows for potential future expansion, such as arena-style gameplay.
 */  export type hexInformation = {
  terrain: Array<BaseTileEnum | BaseFullTileEnum | null>,
  name?: string,
  topping?: Array<string>,
  opaque?: boolean,
  character?: [CharacterTileEnum | null, CharacterTileEnum | null]
}

/**
 * Represents information about a character, including its type, coordinates, and highlight status.
 * 
 * @property {CharacterTileEnum} character - The type of character represented by this object.
 * @property {number} xCoordinate - The x-coordinate of the character's position on the grid.
 * @property {number} yCoordinate - The y-coordinate of the character's position on the grid.
 * @property {boolean} highlight - Indicates whether the character should be highlighted.
 */
export type characterInformation = {
  character: CharacterTileEnum,
  xCoordinate: number,
  yCoordinate: number,
  highlight: boolean
}

/**
 * Represents a value on the grid, which can include a character and optional metadata like highlighting.
 * 
 * @property {CharacterTileEnum | null} character - The character present at this grid position, or `null` if no character is present.
 * @property {boolean} [highlight] - Optional flag to indicate whether this grid position should be highlighted.
 */
export type GridValue = {
  character: CharacterTileEnum | null;
  highlight?: boolean;
};

/**
 * Represents a coordinate as a string in the format "x,y".
 */
export type Coordinate = string;

/**
 * Converts x and y coordinates into a string key in the format "x,y".
 * 
 * @param {number} x - The x-coordinate.
 * @param {number} y - The y-coordinate.
 * @returns {Coordinate} A string representation of the coordinates in the format "x,y".
 */
export function coordinateKey(x: number, y: number): Coordinate {
  return `${x},${y}`;
}