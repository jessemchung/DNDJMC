import {colorFreeps, FreepsCardData} from '../Common/_Types.jsx'


export const FreepsSampleData: FreepsCardData[] = [
  {
    'index': -1,
    'defense': 6,
    'hitpoints':10,
    'healthyImage': './image/Ryuutama/SampleIcons/BradGood.png',
    'bloodyImage': './image/Ryuutama/SampleIcons/BradBad.png',
    'initiative': 2,
    'name': "Bradford",
    'maxHitpoints': 10,
     creepOrFreep: 'freep',
     color: colorFreeps.Blue,
     shield: 0,
     position: 1

  },

  {
    'index': -2,
    'defense': 10,
    'hitpoints':8,
    'healthyImage': './image/Ryuutama/SampleIcons/MarinerGood.png',
    'bloodyImage': './image/Ryuutama/SampleIcons/MarinerBad.png',
    'initiative': 3,
    'name': "Mariner",
    'maxHitpoints': 8,
    creepOrFreep: 'freep',
    color: colorFreeps.Red,
    shield: 0,
    position: 2


  },

  {
    'index': -3,
    'defense': 12,
    'hitpoints':12,
    'healthyImage': './image/Ryuutama/SampleIcons/TendiGood.png',
    'bloodyImage': './image/Ryuutama/SampleIcons/TendiBad.png',
    'initiative': 1,
    'name': "Tendi",
    'maxHitpoints':12,
    creepOrFreep: 'freep',
    color: colorFreeps.Green,
    shield: 0,
    position: 3

  },

  {
    'index': -4,
    'defense': 11,
    'hitpoints':18,
    'healthyImage': './image/Ryuutama/SampleIcons/SamGood.png',
    'bloodyImage': './image/Ryuutama/SampleIcons/SamBad.png',
    'initiative': 1,
    'name': "Sam",
    'maxHitpoints':18,
    creepOrFreep: 'freep',
    color: colorFreeps.Yellow,
    shield: 0,
    position: 4
  },

  {
    'index': -5,
    'defense': 11,
    'hitpoints':18,
    'healthyImage': 'https://i.ibb.co/CQ56XzK/the-goblin.png',
    'bloodyImage': 'https://i.ibb.co/CQ56XzK/the-goblin.png',
    'initiative': 1,
    'name': "Fiddleheads",
    'maxHitpoints':18,
    creepOrFreep: 'freep',
    color: colorFreeps.Orange,
    shield: 0,
    position: 5
  }

]
