import { configureStore, Action } from '@reduxjs/toolkit'
import { ThunkAction } from 'redux-thunk';

import rootReducer, { RootState } from './rootReducer';

const store = configureStore({
    reducer: rootReducer
});

export default store;

export type { RootState };

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;