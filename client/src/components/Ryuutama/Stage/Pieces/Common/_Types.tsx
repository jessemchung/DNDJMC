

export type CreepsCardData = {
  'armor': number,
  'hitpoints':number,
  'healthyImage': string,
  'bloodyImage': string,
  'initiative': number,
  'name': string,
  'appearance': string,
  'null' : boolean,
};

export class newForm {
  data: CreepsCardData;

  constructor() {
    this.data= {
      name: '',
      hitpoints: 0,
      healthyImage: '',
      bloodyImage: '',
      initiative: 0,
      armor: 0,
      appearance: 'none',
      null: false,

    };
    
  }

};


export enum ReadingTypes {
  Some = 'some',
  Variants = 'variants',
  Of = 'of',
  Strings = 'strings',
}

export enum conditions {
  poison = 1,
  curse = 2, 
  prone = 3,
  grappled = 4,
  flu = 5, 
  charm = 6,
  frightened = 7,
  blinded = 8,
  petrified = 9,
  
}

export interface IReadings {
 param: ReadingTypes
}
export type FreepOrCreep = "creep" | "freep";

        {/* Electric Blue (#007AFF) – Bold and energetic, great for a standout player.
            Fiery Red (#FF3B30) – A strong, attention-grabbing color perfect for a competitive player.
            Sunflower Yellow (#FFCC00) – Bright and cheerful, ideal for a positive or cheerful player.
            Emerald Green (#34C759) – A fresh, lively green that symbolizes growth and vitality.
            Vivid Purple (#AF52DE) – A rich, playful color for a unique player.
            Tangerine Orange (#FF9500) – Warm and energetic, ideal for someone who's quick or dynamic. */}



export enum colorFreeps {
  Blue = "Blue",
  Red = "Red",
  Yellow = "Yellow",
  Green = "Green",
  Purple = "Purple",
  Orange = "Orange"
}

export enum positionsOptions {
  "Front 1" = 0,
  "Front 2" = 1,
  "Front 3" = 2,
  "Front 4" = 3,
  "Front 5" = 4,
  "Back 1" = 5,
  "Back 2" = 6,
  "Back 3" = 7,
  "Back 4" = 8,
  "Back 5" = 9
}

export type colorOptions = "Blue" | "Red" | "Yellow" | "Green" | "Purple" | "Orange";


export type NumberRange = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | null;



export type FreepsCardData = {
  'index': number,
  'defense': number,
  'bloodyImage': string,
  'healthyImage': string,
  'hitpoints':number,
  'maxHitpoints': number,
  'initiative': number,
  'name': string,
  'creepOrFreep': FreepOrCreep,
  shield?: number,
  color: colorOptions,
  position: positionsOptions
};

export type EnvironmentPropsData = {
  'name': string,
  description: string,
  type: string
}