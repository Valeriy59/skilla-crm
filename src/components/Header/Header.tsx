import React from 'react';
import s from './Header.module.css'


export const Header = () => {
  const date = new Date()
  return (
    <div className={s.headerContainer}>
      {date.getTime()}
    </div>
  )
}