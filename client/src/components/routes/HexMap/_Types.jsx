"use strict";
// export type BaseTileOptions =
//   "./image/Ryuutama/Weather/Ryuutama_Blizzard.png" |
//   "./image/Ryuutama/Weather/Ryuutama_Clear_Skies.png" |
//   "./image/Ryuutama/Weather/Ryuutama_Cloudy.png" |
//   "./image/Ryuutama/Weather/Ryuutama_Cold.png" |
//   "./image/Ryuutama/Weather/Ryuutama_Darkness.png" |
//   "./image/Ryuutama/Weather/Ryuutama_Deep_Fog.png" |
//   "./image/Ryuutama/Weather/Ryuutama_Fog.png" |
//   "./image/Ryuutama/Weather/Ryuutama_Heavy_Rain.png" |
//   "./image/Ryuutama/Weather/Ryuutama_Heavy_Rain.png" |
//   "./image/Ryuutama/Weather/Ryuutama_Hot.png" |
//   "./image/Ryuutama/Weather/Ryuutama_Hurricane.png" |
//   "./image/Ryuutama/Weather/Ryuutama_Rain.png" |
//   "./image/Ryuutama/Weather/Ryuutama_Snow.png" |
//   "./image/Ryuutama/Weather/Ryuutama_Strong_Wind.png" |
//   "./image/Ryuutama/Weather/Ryuutama_Thunderstorm.png";
Object.defineProperty(exports, "__esModule", { value: true });
exports.coordinateKey = exports.CharacterTileEnum = exports.BaseFullTileEnum = exports.BaseTileEnum = void 0;
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
// these are the solid colors
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
    BaseFullTileEnum["None"] = "./image/map/tileSnow_full.png";
})(BaseFullTileEnum = exports.BaseFullTileEnum || (exports.BaseFullTileEnum = {}));
// these are characters like aliens
var CharacterTileEnum;
(function (CharacterTileEnum) {
    CharacterTileEnum["Blue"] = "./image/map/alienBlue.png";
    CharacterTileEnum["Pink Ship"] = "./image/map/shipPink_manned.png";
})(CharacterTileEnum = exports.CharacterTileEnum || (exports.CharacterTileEnum = {}));
//this function converts coordinate es into a useful x y value.
function coordinateKey(x, y) { return "".concat(x, ",").concat(y); }
exports.coordinateKey = coordinateKey;
;
//# sourceMappingURL=_Types.jsx.map