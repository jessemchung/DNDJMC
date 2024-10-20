var randomColor = require('randomcolor'); // import the script
import * as React from 'react'
import Image from './Image.jsx'
import PropsBar from './PropsBar/PropsBar.jsx'
import { RyuutamaForm } from '../Ryuutama.jsx';
import { FreepsCardData, terrainPropsData } from './Pieces/Common/_Types.jsx';

interface Props {
  form: RyuutamaForm
  creatureData: Array<FreepsCardData>
  setForm: (data: Partial<RyuutamaForm>) => void;
  terrainProps: terrainPropsData[]
  setTerrainProps: React.Dispatch<React.SetStateAction<terrainPropsData[]>>
};

const RyuutamaMainStage: React.FC<Props> = (prop: Props) => {


  return (
    <>
      <Image creatureData={prop.creatureData} form={prop.form} setForm={prop.setForm} key={'MainImage'} />
      <PropsBar terrainProps={prop.terrainProps} setTerrainProps={prop.setTerrainProps} key={'MainPropsBar'}/>
    </>
  )
}

export default RyuutamaMainStage;