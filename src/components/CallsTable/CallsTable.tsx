import React, {useEffect} from 'react'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableContainer from '@mui/material/TableContainer'
import {useAppDispatch} from "../../redux/store";
import {getCalls} from "../../redux/callsSlice";
import {CallsTableHead} from "./CallsTableHead/CallsTableHead";
import {CallsTableBody} from "./CallsTableBody/CallsTableBody";
import {Captions} from "../Captions/Captions";


export const CallsTable = () => {

  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getCalls())
  }, [dispatch])

  return (
    <div>
      <Captions/>
      <TableContainer component={Paper} style={{margin: '120px 135px 120px 120px', width: "auto"}}>
        <Table sx={{ maxWidth: 1440 }} aria-label="simple table">
          <CallsTableHead/>
          <CallsTableBody/>
        </Table>
      </TableContainer>
    </div>
  )
}
