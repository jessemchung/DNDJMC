var randomColor = require('randomcolor'); // import the script
import * as React from 'react'
import Image from './Image.jsx'
import PropsBar from './PropsBar/PropsBar.jsx'
import { RyuutamaForm } from '../Ryuutama.jsx';

interface Props {
  form: RyuutamaForm
  setForm: (data: Partial<RyuutamaForm>) => void;
};

const RyuutamaMainStage: React.FC<Props> = (prop: Props) => {


  return (
    <>
      <Image form={prop.form} setForm={prop.setForm} key={'MainImage'} />
      <PropsBar key={'MainPropsBar'}/>
    </>
  )
}

export default RyuutamaMainStage;