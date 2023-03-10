import {
    combineReducers,
    configureStore,
    PayloadAction,
    ThunkAction,
    Action,
    getDefaultMiddleware
} from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { useDispatch } from 'react-redux';
import rootReducer from './reducers';
import logger from 'redux-logger';

import userTokenReducer from './reducers/UserSlice';

const isDev = process.env.NODE_ENV === 'development';

const makeStore = () => {
    const store = configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
        devTools: isDev,
    })
    return store;
}

const wrapper = createWrapper(makeStore); 

type AppStore = ReturnType<typeof makeStore>;
type AppDispatch = AppStore['dispatch'];
export type RootState = ReturnType<AppStore['getState']>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type AppThunk<ReturnType = void> = ThunkAction<
 ReturnType,
 RootState,
 unknown,
 Action
>;

export default wrapper;