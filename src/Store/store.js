import { configureStore } from '@reduxjs/toolkit';
import savedArticlesReducer from './slices/SavedArticles';

const store = configureStore({
    reducer: {
        savedArticles: savedArticlesReducer,
    },
});

export default store;
