import React from 'react'
import {SearchInput} from "../SearchInput/SearchInput";
import {CustomMenu} from "../CustomMenu/CustomMenu";
import s from './Captions.module.css'

export const Captions = () => {
  return (
    <div className={s.captionsContainer}>
      <SearchInput searchValue={''}/>
      <div className={s.menuContainer}>
        <CustomMenu title={'Все типы'}/>
        <CustomMenu title={'Все сотрудники'}/>
        <CustomMenu title={'Все звонки'}/>
        <CustomMenu title={'Все источники'}/>
        <CustomMenu title={'Все оценки'}/>
        <CustomMenu title={'Все ошибки'}/>
      </div>
    </div>
  )
}
