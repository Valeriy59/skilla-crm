import { ChangeEvent, FC, memo, useEffect, useState } from 'react'

import InputBase, { InputBaseProps } from '@mui/material/InputBase'
import Paper from '@mui/material/Paper'

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useDebounce } from '../../common/hooks/useDebounce'

import s from './SearchInput.module.css'

type SearchInputPropsType = InputBaseProps & {
  label?: string
  searchValue: string
  onChangeText?: (value: string) => void
}
export const SearchInput: FC<SearchInputPropsType> = memo(
  ({ label, onChangeText, searchValue, ...restProps }) => {
    const [value, setValue] = useState<string>(searchValue)
    const debouncedValue = useDebounce<string>(value, 500)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.currentTarget.value)
    }

    useEffect(() => {
      if (value === searchValue) return
      setValue(searchValue)
    }, [searchValue])

    useEffect(() => {
      onChangeText?.(debouncedValue)
    }, [debouncedValue])

    return (
      <div>
        <span className={s.title}> {label}</span>
        <Paper
          component="form"
          elevation={0}
          className={s.container}
          sx={{ background: 'transparent' }}
        >
          <SearchOutlinedIcon className={s.findIcon} />
          <InputBase
            className={s.input}
            value={value}
            onChange={onChangeHandler}
            placeholder="Поиск по звонкам"
            inputProps={{ 'aria-label': 'provide your text' }}
            {...restProps}
          />
        </Paper>
      </div>
    )
  }
)