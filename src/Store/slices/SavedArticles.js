import { createSlice } from '@reduxjs/toolkit';

const savedArticlesSlice = createSlice({
    name: 'savedArticles',
    initialState: [],
    reducers: {
        addArticle: (state, action) => {
            const articleToAdd = action.payload;
            const isArticleAlreadySaved = state.some((article) => article.title === articleToAdd.title);
            if (!isArticleAlreadySaved) {
                state.push(articleToAdd);
            }
        },
    },
});

export const { addArticle } = savedArticlesSlice.actions;
export default savedArticlesSlice.reducer;
