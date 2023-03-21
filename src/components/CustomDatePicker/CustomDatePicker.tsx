import React, {FC, useState} from 'react';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DateField, ruRU} from "@mui/x-date-pickers";
import dayjs, { Dayjs } from 'dayjs';

type CustomDatePickerPropsType = {
  callBack: (date: Dayjs | null) => void
}

export const CustomDatePicker: FC<CustomDatePickerPropsType> = ({callBack}) => {
  const [value, setValue] = useState<Dayjs | null>(null)

  const handleDateChange = (newValue: Dayjs | null) => {
    console.log('newValue', newValue)
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

        size={'small'}
        value={value}
        onChange={handleDateChange}
        format="DD.MM.YYYY"
      />
    </LocalizationProvider>
  )
}