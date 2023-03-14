import React, {useEffect} from 'react'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import s from './CallsTable.module.css'
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {getCalls} from "../../redux/callsSlice";
import TableCell from '@mui/material/TableCell'
import {InOutCall} from "../InOutCall/InOutCall";

export const CallsTable_temp = () => {
  const totalRows = useAppSelector((state) => state.total_rows)
  const results = useAppSelector((state) => state.results)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getCalls())
  }, [dispatch])

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell>Тип</TableCell>
              <TableCell>Время</TableCell>
              <TableCell>Сотрудник</TableCell>
              <TableCell>Звонок</TableCell>
              <TableCell>Звонок</TableCell>
              <TableCell>Источник</TableCell>
              <TableCell>Оценка</TableCell>
              <TableCell>Длительность</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {results.map(call => (
              <TableRow key={call.id}>
                <TableCell><InOutCall inOut={call.in_out}/></TableCell>
                <TableCell>{call.date}</TableCell>
                <TableCell>
                  <div className={s.link} >
                      <img className={s.cover} src={call.person_avatar} alt={'deckCover'} />
                  </div>
                </TableCell>
                <TableCell align="center">{call.from_site}</TableCell>
                <TableCell align="center">{call.from_number}</TableCell>
                <TableCell align="center">{call.source}</TableCell>
                <TableCell align="center">оценка</TableCell>
                <TableCell align="center">{call.time}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
