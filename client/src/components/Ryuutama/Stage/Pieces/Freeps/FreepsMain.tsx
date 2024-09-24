var randomColor = require('randomcolor'); // import the script
import * as React from 'react'
import FreepsSampleCard from './FreepsSampleCard.jsx'
import {FreepsCardData} from '../Common/_Types.jsx'
import {FreepsSingleCard} from './FreepsSingleCard.jsx'
import {FreepsAdd} from './FreepsAdd.jsx'
import { RyuutamaForm } from '../../../Ryuutama.jsx';

// this is the leftside component.  

interface Props {
  indexPieces: number,
  setIndexPieces: React.Dispatch<React.SetStateAction<number>>,

  fullDataFreeps: FreepsCardData[],
  setFullDataFreeps:React.Dispatch<React.SetStateAction<FreepsCardData[]>>, 
  form: RyuutamaForm,
  setForm: (data: Partial<RyuutamaForm>) => void,
  adjustCreatureSet: (indexOfChange: number, changedCard: FreepsCardData) => void
}

// this produces all the freep cards. 
export default function FreepsMain(props: Props) {

  const allCards: React.JSX.Element[] = props.fullDataFreeps.map((singleCard, index)=> {
    if (singleCard.creepOrFreep === "freep") {
      return (
        <FreepsSingleCard adjustCreatureSet={props.adjustCreatureSet} initiative={props.indexPieces} index={index} freepInfo={singleCard} key={index+"freeps"} fullDataFreeps={props.fullDataFreeps} setFullDataFreeps={props.setFullDataFreeps} />
      )
    } else {
      return null;
    }

  })


  return (
    <>
      <div> Freeps Column </div>
      {allCards}
      <FreepsAdd form={props.form} setForm={props.setForm} indexPieces={props.indexPieces} setIndexPieces={props.setIndexPieces} fullDataFreeps={props.fullDataFreeps} setFullDataFreeps={props.setFullDataFreeps}/>
    </>
  )
}

