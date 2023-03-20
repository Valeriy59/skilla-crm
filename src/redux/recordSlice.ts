import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AppRootStateType} from "./store";
import {callsAPI} from "../api/api";


const initialState = {
  record: ''
}
export const recordSlice = createSlice({
  name: 'record',
  initialState: initialState,
  reducers: {
    setRecord(state, action: PayloadAction<any>) {
      state.record = action.payload
    }
  }
})

type PayloadType = {
  record: string,
  partnershipId: string
}
export const getRecord = createAsyncThunk('record/getRecord', async (payload : PayloadType, {dispatch}) => {

  try {
    const res = await callsAPI.getRecord(payload.record, payload.partnershipId)
    let blob = new Blob([res.value], {type: 'audio/mp3'})
    let url = (URL.createObjectURL(blob)).slice(5)
    let audio = new Audio();
    audio.src = url;
    audio.play()
    dispatch(setRecord(url))

  } catch (e) {

  } finally {

  }
})

// function playRecord(record: string, partnershipId: string) {
//   callsAPI.getRecord(record, partnershipId)
//     .then((response) => {
//       // response.value for fetch streams is a Uint8Array
//       let blob = new Blob([response.value], {type: 'audio/mp3'});
//       let url = URL.createObjectURL(blob);
//       let audio = new Audio();
//       audio.src = url;
//       audio.play();
//       return url
//     })

export const {setRecord} = recordSlice.actions

export const recordReducer = recordSlice.reducer