import React from 'react';
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

export const CallsTableHead = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>Тип</TableCell>
        <TableCell>Время</TableCell>
        <TableCell>Сотрудник</TableCell>
        <TableCell align="center">Звонок</TableCell>
        <TableCell align="center">Источник</TableCell>
        <TableCell align="center">Оценка</TableCell>
        <TableCell align="center">Длительность</TableCell>
      </TableRow>
    </TableHead>
  )
}