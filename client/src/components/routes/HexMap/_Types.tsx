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


  export enum BaseTileEnum {
    Autumn = "./image/map/tileAutumn.png",
    Dirt = "./image/map/tileDirt.png",
    Grass = "./image/map/tileGrass.png",
    Lava = "./image/map/tileLava.png",
    Magic = "./image/map/tileMagic.png",
    Rock = "./image/map/tileRock.png",
    Sand = "./image/map/tileSand.png",
    Snow = "./image/map/tileSnow.png",
    Stone =  "./image/map/tileStone.png",
    Water = "./image/map/tileWater.png",
    None = "./image/map/tileSnow_full.png"
  }

  // these are the solid colors
  export enum BaseFullTileEnum {
    Autumn = "./image/map/tileAutumn_full.png",
    Dirt = "./image/map/tileDirt_full.png",
    Grass = "./image/map/tileGrass_full.png",
    Lava = "./image/map/tileLava_full.png",
    Magic = "./image/map/tileMagic_full.png",
    Rock = "./image/map/tileRock_full.png",
    Sand = "./image/map/tileSand_full.png",
    Snow = "./image/map/tileSnow_full.png",
    Stone =  "./image/map/tileStone_full.png",
    Water = "./image/map/tileWater_full.png",
    None = "./image/map/tileSnow_full.png"
  }

  // a single hex.  It needs information to dictate how high it is and what toppings it should have
  // the toppings might need to be arrayed in some way?  Maybe in 6 places on it there can items and one on the center?
  // text would be the optional name that appears in the center of the hex?
  // opaque could be a hidden value?
  export type hexInformation = {
    terrain: Array<BaseTileEnum | null>,
    name?: string,
    topping?: Array<string>,
    opaque?: boolean
  }