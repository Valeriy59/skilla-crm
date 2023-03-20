import React, {FC} from 'react'
import {SearchInput} from "../SearchInput/SearchInput";
import {CustomMenu} from "../CustomMenu/CustomMenu";
import s from './Captions.module.css'
import {calls, callTypes, employees, errors, marks, sources} from "../../common/constants/menuItems";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {setCallType} from "../../redux/callsSlice";
import {Balance} from "../Balance/Balance";
import {CustomDatePicker} from "../CustomDatePicker/CustomDatePicker";
import {setDateStart} from "../../redux/callsSlice";
import {Dayjs} from "dayjs";

export const Captions = () => {
  const dispatch = useAppDispatch()
  const inOutState = useAppSelector((state) => state.callsReducer.searchParams.in_out)

  const handleSelectMenuItem = (inOut: number) => {
    dispatch(setCallType(inOut))
    console.log(inOutState)
  }
  const handleSetDateStart = (dateStart: Dayjs | null) => {
    dateStart &&
    dispatch(setDateStart(dateStart?.format('YYYY-MM-DD').toString()))
    console.log(dateStart?.format('YYYY-MM-DD').toString())
  }

  return (
    <div className={s.captionsContainer}>
      <div className={s.buttonsContainer}>
        <Balance/>
        <CustomDatePicker callBack={handleSetDateStart}/>
      </div>
      <div className={s.filterContainer}>
        <SearchInput searchValue={''}/>
        <div className={s.menuContainer}>
          <CustomMenu options={callTypes} callBack={handleSelectMenuItem}/>
          <CustomMenu options={employees} callBack={()=>{}}/>
          <CustomMenu options={calls} callBack={()=>{}}/>
          <CustomMenu options={sources} callBack={()=>{}}/>
          <CustomMenu options={marks} callBack={()=>{}}/>
          <CustomMenu options={errors} callBack={()=>{}}/>
        </div>
      </div>
    </div>

  )
}
