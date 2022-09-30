import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authSlice from '../features/authSlice';
import counterReducer from '../features/counter/counterSlice';
import mailSlice  from '../features/mailSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    mail : mailSlice,
    auth : authSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
