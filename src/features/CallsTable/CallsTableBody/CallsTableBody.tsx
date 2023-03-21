import React from 'react'
import TableRow from "@mui/material/TableRow"
import TableCell from "@mui/material/TableCell"
import {trimDate} from "../../../common/utils/trimDate"
import s from "../CallsTable.module.css"
import TableBody from "@mui/material/TableBody"
import {useAppDispatch, useAppSelector} from "../../../redux/store"
import Button from '@mui/material/Button'
import {convertSeconds} from "../../../common/utils/convertSeconds"
import {getRecord} from "../../../redux/recordSlice"
import {InOutCall} from "../../../components/InOutCall/InOutCall"
import {FromSiteCall} from "../../../components/FromSiteCall/FromSiteCall"

export const CallsTableBody = () => {
  const results = useAppSelector((state) => state.callsReducer.results)
  const recordSrc = useAppSelector((state) => state.recordReducer.record)
  const dispatch = useAppDispatch()

  const playRecord = (record: string, partnership_id: string) => {
    dispatch(getRecord({record: record, partnershipId: partnership_id}))
    let audio = new Audio();
    audio.src = recordSrc;
    audio.play()
    console.log(recordSrc)
      }

    return (
      <TableBody>
        {results.map(call => (
          <TableRow hover key={call.id} onClick={() => playRecord(call.record, call.partnership_id)}>
            <TableCell><InOutCall inOut={call.in_out}/></TableCell>
            <TableCell>{trimDate(call.date)}</TableCell>
            <TableCell>
              <div className={s.link}>
                <img className={s.cover} src={call.person_avatar} alt={'deckCover'}/>
              </div>
            </TableCell>
            <TableCell align="center"><FromSiteCall fromSite={call.from_site}/>{call.from_number}</TableCell>
            <TableCell align="center">{call.source}</TableCell>
            <TableCell align="center">
              <Button
                variant={'outlined'} style={{
                textTransform: 'none',
                borderColor: '#002CFB',
                color: '#002CFB'
              }}>Распознать</Button>
            </TableCell>
            <TableCell align="center">{convertSeconds(call.time)}
              {/*<AudioPlayerCustom src={recordSrc}/>*/}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    )
  }

