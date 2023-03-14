import React, {useEffect} from 'react';
import {Table} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {getCalls} from "../../redux/callsSlice";
import {CallsTableHead} from "./callsTableHead/CallsTableHead";

export const CallsTable = () => {
  const dispatch = useAppDispatch()
  const totalRows = useAppSelector((state) => state.total_rows)
  const results = useAppSelector((state) => state.results)

  useEffect(() => {
    dispatch(getCalls())
  }, [dispatch])
  return (
    <div>
      <Table sx={{ minWidth: 750, whiteSpace: 'nowrap' }} aria-labelledby="tableTitle">
        <CallsTableHead/>
      </Table>
    </div>
  )
}