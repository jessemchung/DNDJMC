

export type CreepsCardData = {
  'armor': number,
  'hitpoints':number,
  'healthyImage': string,
  'bloodyImage': string,
  'initiative': number,
  'name': string,
  'appearance': string,
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
      appearance: 'none'

    };
    
  }

};


export enum ReadingTypes {
  Some = 'some',
  Variants = 'variants',
  Of = 'of',
  Strings = 'strings',
}
export interface IReadings {
 param: ReadingTypes
}

export type FreepsCardData = {
  'armor': number,
  'bloodyImage': string,
  'healthyImage': string,
  'hitpoints':number,
  'maxHitpoints': number,
  'initiative': number,
  'name': string,
};