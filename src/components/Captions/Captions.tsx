import React from 'react'
import {SearchInput} from "../SearchInput/SearchInput";
import {CustomMenu} from "../CustomMenu/CustomMenu";

export const Captions = () => {
  return (
    <div>
      <SearchInput searchValue={''}/>
      <CustomMenu title={'Все звонки'}/>
    </div>
  )
}
