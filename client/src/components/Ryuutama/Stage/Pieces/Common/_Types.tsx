

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