var randomColor = require('randomcolor'); // import the script
import * as React from 'react'
import {FreepsCardData} from '../Common/_Types.jsx'
import {CreepsSingleCard} from './CreepsSingleCard.jsx'
import {CreepsAdd} from './CreepsAdd.jsx'
//add creep button on the bottom
//this will need to grab from database or from sample data set

interface Props {
  fullDataCreeps: FreepsCardData[],
  setFullDataCreeps: React.Dispatch<React.SetStateAction<FreepsCardData[]>>,
  //this is expecting a single object

};


//cards will be an array of objects
export default function Creeps(props: Props) {
  console.log(props.fullDataCreeps, 'this should be correct')

  const allCreepCards = props.fullDataCreeps.map((singleCard, index)=> {
    if (singleCard.creepOrFreep === "creep") {
      return (
        <CreepsSingleCard creepInfo={singleCard} key={singleCard.name} index={index} fullDataCreeps={props.fullDataCreeps} setFullDataCreeps={props.setFullDataCreeps} />
      )
    }
  })

  return (
    <>
      <div> Creeps Column </div>
      {allCreepCards}

      <CreepsAdd setFullDataCreeps={props.setFullDataCreeps} fullDataCreeps={props.fullDataCreeps}/>
    </>
  )
}

