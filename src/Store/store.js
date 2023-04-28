import { configureStore, combineReducers } from '@reduxjs/toolkit';
import savedArticlesReducer from './slices/SavedArticles';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
    savedArticles: savedArticlesReducer
})

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: {
        savedArticles: persistedReducer,
    },
});

export const persistor = persistStore(store)

export default store;
