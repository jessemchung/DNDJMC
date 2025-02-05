"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.coordinateKey = exports.CharacterTileEnum = exports.TerrainTopperRock = exports.TerrainTopper = exports.BaseFullTileEnum = exports.BaseTileEnum = void 0;
/**
 * Represents the base tile textures available for the map meaning with the dirt underneath.
 * Each enum value corresponds to a specific image file path for a tile texture.
 */
var BaseTileEnum;
(function (BaseTileEnum) {
    BaseTileEnum["Autumn"] = "./image/map/tileAutumn.png";
    BaseTileEnum["Dirt"] = "./image/map/tileDirt.png";
    BaseTileEnum["Grass"] = "./image/map/tileGrass.png";
    BaseTileEnum["Lava"] = "./image/map/tileLava.png";
    BaseTileEnum["Magic"] = "./image/map/tileMagic.png";
    BaseTileEnum["Rock"] = "./image/map/tileRock.png";
    BaseTileEnum["Sand"] = "./image/map/tileSand.png";
    BaseTileEnum["Snow"] = "./image/map/tileSnow.png";
    BaseTileEnum["Stone"] = "./image/map/tileStone.png";
    BaseTileEnum["Water"] = "./image/map/tileWater.png";
    BaseTileEnum["None"] = "./image/map/tileSnow_full.png";
})(BaseTileEnum = exports.BaseTileEnum || (exports.BaseTileEnum = {}));
/**
 * Represents the full tile textures available for the map.
 * Each enum value corresponds to a specific image file path for a tile texture.
 */
var BaseFullTileEnum;
(function (BaseFullTileEnum) {
    BaseFullTileEnum["Full Autumn"] = "./image/map/tileAutumn_full.png";
    BaseFullTileEnum["Full Dirt"] = "./image/map/tileDirt_full.png";
    BaseFullTileEnum["Full Grass"] = "./image/map/tileGrass_full.png";
    BaseFullTileEnum["Full Lava"] = "./image/map/tileLava_full.png";
    BaseFullTileEnum["Full Magic"] = "./image/map/tileMagic_full.png";
    BaseFullTileEnum["Full Rock"] = "./image/map/tileRock_full.png";
    BaseFullTileEnum["Full Sand"] = "./image/map/tileSand_full.png";
    BaseFullTileEnum["Full Snow"] = "./image/map/tileSnow_full.png";
    BaseFullTileEnum["Full Stone"] = "./image/map/tileStone_full.png";
    BaseFullTileEnum["Full Water"] = "./image/map/tileWater_full.png";
    BaseFullTileEnum["Full None"] = "./image/map/tileSnow_full.png";
})(BaseFullTileEnum = exports.BaseFullTileEnum || (exports.BaseFullTileEnum = {}));
var TerrainTopper;
(function (TerrainTopper) {
    TerrainTopper["Green_Tree"] = "./image/map/treeGreen_low.png";
    TerrainTopper["Blue_Tree"] = "./image/map/treeBlue_low.png";
    TerrainTopper["Autumn_Tree"] = "./image/map/treeAutumn_low.png";
    // "Cactus" = "./image/map/treeCactus_1.png",
    // "Stone_Rock" = "./image/map/rockStone.png",
    // "Sand_Rock" = "./image/map/rockSand.png",
    // "Sand_Moss" = "./image/map/rockDirt_moss1.png"
})(TerrainTopper = exports.TerrainTopper || (exports.TerrainTopper = {}));
var TerrainTopperRock;
(function (TerrainTopperRock) {
    TerrainTopperRock["Stone_Rock"] = "./image/map/rockStone.png";
    TerrainTopperRock["Sand_Rock"] = "./image/map/rockSand.png";
    TerrainTopperRock["Sand_Moss"] = "./image/map/rockDirt_moss1.png";
})(TerrainTopperRock = exports.TerrainTopperRock || (exports.TerrainTopperRock = {}));
// these are characters like aliens
var CharacterTileEnum;
(function (CharacterTileEnum) {
    CharacterTileEnum["Blue"] = "./image/map/alienBlue.png";
    CharacterTileEnum["Pink Ship"] = "./image/map/shipPink_manned.png";
})(CharacterTileEnum = exports.CharacterTileEnum || (exports.CharacterTileEnum = {}));
/**
 * Converts x and y coordinates into a string key in the format "x,y".
 *
 * @param {number} x - The x-coordinate.
 * @param {number} y - The y-coordinate.
 * @returns {Coordinate} A string representation of the coordinates in the format "x,y".
 */
function coordinateKey(x, y) {
    return "".concat(x, ",").concat(y);
}
exports.coordinateKey = coordinateKey;
//# sourceMappingURL=_Types.jsx.map