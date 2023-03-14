import React, {FC} from 'react';
import CallMadeOutlinedIcon from '@mui/icons-material/CallMadeOutlined';
import CallReceivedOutlinedIcon from '@mui/icons-material/CallReceivedOutlined';

type InOutPropsType = {
  inOut: number
}

export const InOutCall: FC<InOutPropsType> = ({inOut}) => {
  // if (!inOut) {
  //   return (
  //     <CallReceivedOutlinedIcon color={'error'}/>
  //   )
  // }
  return (
    <div>
      {inOut === 0 ? (<CallMadeOutlinedIcon color={'success'}/> ) : (<CallReceivedOutlinedIcon color={'primary'}/>)}
    </div>
  )
}