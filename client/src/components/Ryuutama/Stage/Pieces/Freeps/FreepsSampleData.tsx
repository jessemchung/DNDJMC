import {colorFreeps, FreepsCardData} from '../Common/_Types.jsx'


export const FreepsSampleData: FreepsCardData[] = [
  {
    'index': -1,
    'shield': 0,
    'hitpoints':10,
    'healthyImage': './image/Ryuutama/SampleIcons/BradGood.png',
    'bloodyImage': './image/Ryuutama/SampleIcons/BradBad.png',
    'initiative': 7,
    'name': "Bradford",
    'maxHitpoints': 10,
     creepOrFreep: 'freep',
     color: colorFreeps.Blue,
     position: 1

  },

  {
    'index': -2,
    'shield': 10,
    'hitpoints':8,
    'healthyImage': './image/Ryuutama/SampleIcons/MarinerGood.png',
    'bloodyImage': './image/Ryuutama/SampleIcons/MarinerBad.png',
    'initiative': 6,
    'name': "Mariner",
    'maxHitpoints': 8,
    creepOrFreep: 'freep',
    color: colorFreeps.Red,
    position: 2


  },

  {
    'index': -3,
    'shield': 12,
    'hitpoints':12,
    'healthyImage': './image/Ryuutama/SampleIcons/TendiGood.png',
    'bloodyImage': './image/Ryuutama/SampleIcons/TendiBad.png',
    'initiative': 5,
    'name': "Tendi",
    'maxHitpoints':12,
    creepOrFreep: 'freep',
    color: colorFreeps.Green,
    position: 3

  },

  {
    'index': -4,
    'shield': 11,
    'hitpoints':18,
    'healthyImage': './image/Ryuutama/SampleIcons/SamGood.png',
    'bloodyImage': './image/Ryuutama/SampleIcons/SamBad.png',
    'initiative': 4,
    'name': "Sam",
    'maxHitpoints':18,
    creepOrFreep: 'freep',
    color: colorFreeps.Yellow,
    position: 4
  },

  {
    'index': -5,
    'shield': 3,
    'hitpoints':18,
    'healthyImage': 'https://i.ibb.co/CQ56XzK/the-goblin.png',
    'bloodyImage': 'https://i.ibb.co/CQ56XzK/the-goblin.png',
    'initiative': 3,
    'name': "Fiddleheads",
    'maxHitpoints':18,
    creepOrFreep: 'freep',
    color: colorFreeps.Orange,
    position: 5
  },
  {
    'index': -6,
    'shield': 2,
    'hitpoints':18,
    'healthyImage': 'https://i.ibb.co/CQ56XzK/the-goblin.png',
    'bloodyImage': 'https://i.ibb.co/CQ56XzK/the-goblin.png',
    'initiative': 2,
    'name': "Fiddleheads",
    'maxHitpoints':18,
    creepOrFreep: 'creep',
    color: colorFreeps.Blue,
    position: 5
  }

]
