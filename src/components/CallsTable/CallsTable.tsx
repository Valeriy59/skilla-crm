import React, {useEffect} from 'react'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableContainer from '@mui/material/TableContainer'
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {getCalls} from "../../redux/callsSlice";
import {CallsTableHead} from "./CallsTableHead/CallsTableHead";
import {CallsTableBody} from "./CallsTableBody/CallsTableBody";
import {Captions} from "../Captions/Captions";
import s from './CallsTable.module.css'
import { useSearchParams } from 'react-router-dom';


export const CallsTable = () => {
  const [, setSearchParams] = useSearchParams()

  const stateSearchParams = useAppSelector((state) => state.callsReducer.searchParams)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const params = {
      date_start: stateSearchParams.date_start || '',
      date_end: stateSearchParams.date_end || '',
      in_out: stateSearchParams.in_out?.toString() || ''
    }

    setSearchParams(params)
    dispatch(getCalls())
  }, [stateSearchParams])

  return (
    <div className={s.container}>
      <Captions/>
      <TableContainer component={Paper} >
        <Table sx={{ maxWidth: 1440 }} aria-label="simple table">
          <CallsTableHead/>
          <CallsTableBody/>
        </Table>
      </TableContainer>
    </div>
  )
}
