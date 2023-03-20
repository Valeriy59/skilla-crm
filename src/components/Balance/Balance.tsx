import React from 'react';
import Box from '@mui/material/Box';
import AddCircleIcon from '@mui/icons-material/AddCircle'
import {IconButton} from "@mui/material";

export const Balance = () => {
  return (
    <Box component="div" sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      background: '#FFFFFF',
      borderRadius: '48px',
      width: '145px',
      height: '40px',
      margin: '0 48px 0 48px'
    }}>
      <span style={{color: '#899CB1'}}>Баланс: </span>
      <span style={{color: '#122945'}}>272 ₽</span>
      <IconButton color="primary" sx={{padding: '0px'}}><AddCircleIcon fontSize={'medium'}/></IconButton>
    </Box>
  );
}