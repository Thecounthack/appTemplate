import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import { useDispatch } from 'react-redux';

import rootReducer from '_redux/reducers/rootReducer';

const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch();
export type AppThunk = ThunkAction<void, RootState, unknown, Action>

export default store;