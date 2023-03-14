import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AppRootStateType} from "./store";
import {callsAPI} from "../api/api";

const initialState = {
  "total_rows": "468",
  "results": [
    {
      "id": 4888120,
      "partnership_id": "136",
      "partner_data": {
        "id": "336",
        "name": "ИП Василек",
        "phone": "7484xxxxxx"
      },
      "date": "2022-04-19 12:10:08",
      "date_notime": "2022-04-19",
      "time": 58,
      "from_number": "79315xxxxxx",
      "from_extension": "",
      "to_number": "sip:hr_xxx@vpbx400105738.mangosip.ru",
      "to_extension": "671",
      "is_skilla": 0,
      "status": "Дозвонился",
      "record": "MToxMDA2NzYxNToxNDM0ODcwNDQzMzow",
      "line_number": "sip:userxx@vpbx400105738.mangosip.ru",
      "in_out": 1,
      "from_site": 0,
      "source": "",
      "errors": [],
      "disconnect_reason": "",
      "results": [],
      "stages": [],
      "abuse": {
        "date": "2022-05-17 14:35:05",
        "person_name": "Никита",
        "message": "Тестовая жалоба на звонок. Тест тест, можно не отвечать.",
        "support_read_status": 1,
        "support_answer_status": 1,
        "answers": [
          {
            "message": "Уважаемый Никита. Проверили.",
            "from_support": 1,
            "support_read_status": 1,
            "person_read_status": 1
          }
        ]
      },
      "contact_name": "",
      "contact_company": "",
      "person_id": 4042,
      "person_name": "Татьяна",
      "person_surname": "Михалкович",
      "person_avatar": "https://lk.skilla.ru/img/noavatar.jpg"
    },
  ]
}
export const callsSlice = createSlice({
  name: 'packs',
  initialState: initialState,
  reducers: {
    setTotalRows(state, action: PayloadAction<any>) {
      state.total_rows = action.payload.total_rows
    },
    setResults(state, action: PayloadAction<any>) {
      state.results = action.payload.results
    }
  }
})

export const getCalls = createAsyncThunk('calls/getCalls', async (_, {dispatch, getState}) => {
  try {
    const res = await callsAPI.getList()

    dispatch(setTotalRows({total_rows: res.total_rows}))
    dispatch(setResults({ results: res.results}))
  } catch (e) {

  } finally {

  }
})

export const {setResults, setTotalRows} = callsSlice.actions

export const callsReducer = callsSlice.reducer