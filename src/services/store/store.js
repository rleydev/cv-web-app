import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as educationReducer } from "./slices/education.slice";
import { reducer as getSkillsReducer } from "./slices/getSkills.slice";
import { persistStore, persistReducer, 
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    version: 1,
}


const reducers = combineReducers({
    educationReducer,
    getSkillsReducer: persistReducer(persistConfig, getSkillsReducer),
})


const store = configureStore({
    reducer: reducers,
    devTools: true,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})


export const persistor = persistStore(store)

export default store