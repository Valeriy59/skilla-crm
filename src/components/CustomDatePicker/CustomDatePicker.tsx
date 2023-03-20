import React, {ChangeEvent, FC, useState} from 'react';
import Box from '@mui/material/Box';
import {TextFieldProps} from '@mui/material/TextField';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import {DateField, ruRU} from "@mui/x-date-pickers";
import dayjs, { Dayjs } from 'dayjs';

// type BrowserInputProps = TextFieldProps & {
//   ownerState?: any;
// };
//
// const BrowserInput = function BrowserInput(props: BrowserInputProps) {
//   const {inputProps, InputProps, ownerState, inputRef, error, ...other} = props;
//
//   return (
//     <Box sx={{display: 'flex', alignItems: 'center'}} ref={InputProps?.ref} >
//       <input ref={inputRef} {...inputProps} {...(other as any)} style={{border: 'none', width: '58px'}} />
//       {InputProps?.endAdornment}
//     </Box>
//   )
// }
type CustomDatePickerPropsType = {
  callBack: (date: Dayjs | null) => void
}

export const CustomDatePicker: FC<CustomDatePickerPropsType> = ({callBack}) => {
  const [value, setValue] = useState<Dayjs | null>(null)

  const handleDateChange = (newValue: Dayjs | null) => {
    setValue(dayjs(newValue))
    callBack(value)
  }

  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      localeText={ruRU.components.MuiLocalizationProvider.defaultProps.localeText}
    >
      <DateField
        variant={'standard'}
        sx={{}}
        size={'small'}
        value={value}
        onChange={handleDateChange}
        format="DD.MM.YYYY"
      />
    </LocalizationProvider>
  )
}