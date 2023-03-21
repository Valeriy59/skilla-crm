import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import {callsReducer} from "./callsSlice";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {recordReducer} from "./recordSlice";

export const store = configureStore({
  reducer: {
    callsReducer,
    recordReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type AppRootStateType = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppRootStateType,
  unknown,
  Action<string>
  >

export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()

// @ts-ignore
window.store = store // for dev