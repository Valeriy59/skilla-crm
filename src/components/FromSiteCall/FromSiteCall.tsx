import React, {FC} from 'react';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';

type FromSiteCallPropsType = {
  fromSite: number
}
export const FromSiteCall: FC<FromSiteCallPropsType> = ({fromSite}) => {
  return (
    <div>
      {fromSite === 1 ? (<LanguageOutlinedIcon/>) : ('')}
    </div>
  )
}