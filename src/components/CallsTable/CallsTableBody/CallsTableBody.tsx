import React from 'react'
import TableRow from "@mui/material/TableRow"
import TableCell from "@mui/material/TableCell"
import {InOutCall} from "../../InOutCall/InOutCall"
import {trimDate} from "../../../common/utils/trimDate"
import s from "../CallsTable.module.css"
import {FromSiteCall} from "../../FromSiteCall/FromSiteCall"
import TableBody from "@mui/material/TableBody"
import {useAppSelector} from "../../../redux/store"
import Button from '@mui/material/Button'
import {convertSeconds} from "../../../common/utils/convertSeconds";

export const CallsTableBody = () => {
  const totalRows = useAppSelector((state) => state.total_rows)
  const results = useAppSelector((state) => state.results)

  return (
    <TableBody>
      {results.map(call => (
        <TableRow key={call.id}>
          <TableCell><InOutCall inOut={call.in_out}/></TableCell>
          <TableCell>{trimDate(call.date)}</TableCell>
          <TableCell>
            <div className={s.link}>
              <img className={s.cover} src={call.person_avatar} alt={'deckCover'}/>
            </div>
          </TableCell>
          <TableCell align="center"><FromSiteCall fromSite={call.from_site}/>{call.from_number}</TableCell>
          <TableCell align="center">{call.source}</TableCell>
          <TableCell align="center"><Button variant={'outlined'} style={{
            textTransform: 'none',
            borderColor: '#002CFB',
            color: '#002CFB'
          }}>Распознать</Button></TableCell>
          <TableCell align="center">{convertSeconds(call.time)}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  )
}

