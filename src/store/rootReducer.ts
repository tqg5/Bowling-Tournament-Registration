import { combineReducers } from '@reduxjs/toolkit';
import forms from './form/slice';

const rootReducer = combineReducers({
    forms
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;