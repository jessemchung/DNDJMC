

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

export type FreepsCardData = {
  'index': number,
  'armor': number,
  'bloodyImage': string,
  'healthyImage': string,
  'hitpoints':number,
  'maxHitpoints': number,
  'initiative': number,
  'name': string,
};