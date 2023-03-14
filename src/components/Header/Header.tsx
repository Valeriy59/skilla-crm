import React from 'react'
import s from './Header.module.css'
import {Progress} from "../Progress/Progress"
import {Avatar} from "@mui/material"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import Button from "@mui/material/Button"


export const Header = () => {
  const date = new Date()
  return (
    <div className={s.headerContainer}>
      <div className={s.newContainer}>
        <div><span>Новые звонки </span><span className={s.newText}>20 из 30 шт</span></div>
        <Progress value={60} color={'success'}/>
      </div>
      <div className={s.newContainer}>
        <div><span>Качество разговоров </span><span className={s.qualityText}>40%</span></div>
        <Progress value={40} color={'secondary'}/>
      </div>
      <div className={s.newContainer}>
        <div><span>Конверсия в заказ </span><span className={s.convText}>67%</span></div>
        <Progress value={40} color={'error'}/>
      </div>
      <div>
        <Button
          id="basic-button"
          startIcon={<SearchOutlinedIcon/>}
          size={'small'}
          style={{color: '#5E7793', textTransform: 'none'}}
          endIcon={<KeyboardArrowDownIcon/>}>
          <span className={s.userText}>ИП Сидорова Александра Михайловна</span>
        </Button>
      </div>
      <div>
        <Button
          id="basic-button"
          size={'small'}
          style={{color: '#5E7793', textTransform: 'none'}}
          endIcon={<KeyboardArrowDownIcon/>}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>
        </Button>
      </div>
      {date.getDate()}
    </div>
  )
}