import React from 'react'
import s from './Sidebar.module.css'

import TimelineIcon from '@mui/icons-material/Timeline'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined'
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined'
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined'
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined'
import DoneAllOutlinedIcon from '@mui/icons-material/DoneAllOutlined'
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined'
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined'
import ErrorOutlinedIcon from '@mui/icons-material/ErrorOutlined'
import logo from '../../common/assets/logo.png'
import {Link} from 'react-router-dom'
import Button from "@mui/material/Button"

export const Sidebar = () => {
  return (
    <div className={s.sidebarContainer}>
      <img alt={'skilla logo'} src={logo}/>
      <nav className={s.nav}>
        <div className={s.item}>
          <TimelineIcon fontSize={'small'} className={s.icon}/>
          <Link to='/summary' className={s.activeLink}>Итоги</Link>
        </div>
        <div className={`${s.item} ${s.active}`}>
          <DoneAllOutlinedIcon fontSize={'small'} className={s.icon}/>
          <Link to='/orders' className={s.activeLink}>Заказы</Link>
        </div>
        <div className={s.item}>
          <EmailOutlinedIcon fontSize={'small'} className={s.icon}/>
          <Link to='/messages' className={s.activeLink}>Сообщения</Link>
        </div>
        <div className={s.item}>
          <PhoneOutlinedIcon fontSize={'small'} className={s.icon}/>
          <Link to='/calls' className={s.activeLink}>Звонки</Link>
        </div>
        <div className={s.item}>
          <PeopleOutlinedIcon fontSize={'small'} className={s.icon}/>
          <Link to='/contractors' className={s.activeLink}>Контрагенты</Link>
        </div>
        <div className={s.item}>
          <DescriptionOutlinedIcon fontSize={'small'} className={s.icon}/>
          <Link to='/documents' className={s.activeLink}>Документы</Link>
        </div>
        <div className={s.item}>
          <PersonOutlineOutlinedIcon fontSize={'small'} className={s.icon}/>
          <Link to='/users' className={s.activeLink}>Исполнители</Link>
        </div>
        <div className={s.item}>
          <WorkOutlineOutlinedIcon fontSize={'small'} className={s.icon}/>
          <Link to='/reports' className={s.activeLink}>Отчеты</Link>
        </div>
        <div className={s.item}>
          <LocalLibraryOutlinedIcon fontSize={'small'} className={s.icon}/>
          <Link to='/database' className={s.activeLink}>База знаний</Link>
        </div>
        <div className={s.item}>
          <SettingsOutlinedIcon fontSize={'small'} className={s.icon}/>
          <Link to='/settings' className={s.activeLink}>Настройки</Link>
        </div>
      </nav>
      <div className={s.buttonContainer}>
        <Button
          variant={'contained'}
          size={'large'}
          style={{
            textTransform: 'none',
            color: '#FFFFFF',
            width: '200px',
            height: '52px',
          }}
          endIcon={<AddCircleOutlinedIcon style={{opacity: '0.56'}}/>}
        >Добавить заказ
        </Button>
        <Button
          variant={'contained'}
          size={'large'}
          style={{
            textTransform: 'none',
            color: '#FFFFFF',
            width: '200px',
            height: '52px',
            marginTop: '32px'
          }}
          endIcon={<ErrorOutlinedIcon style={{opacity: '0.56'}}/>}
        >Оплата
        </Button>
      </div>
    </div>

  )
}

