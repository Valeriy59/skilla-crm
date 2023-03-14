import React, {useEffect} from 'react'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableContainer from '@mui/material/TableContainer'
import {useAppDispatch} from "../../redux/store";
import {getCalls} from "../../redux/callsSlice";
import {CallsTableHead} from "./CallsTableHead/CallsTableHead";
import {CallsTableBody} from "./CallsTableBody/CallsTableBody";
import {Captions} from "../Captions/Captions";
import s from './CallsTable.module.css'


export const CallsTable = () => {

  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getCalls())
  }, [dispatch])

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
