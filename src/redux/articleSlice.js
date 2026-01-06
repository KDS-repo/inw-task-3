import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentArticle: null,
    articlesList: [],
    loading: true,
}

const articleSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {
        setCurrentArticle: (state, action) => {
            state.currentArticle = action.payload
        },
        setArticlesList: (state, action) => {
            state.articlesList = action.payload
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        }
    }
})

export const {
    setCurrentArticle,
    setArticlesList,
    setLoading
} = articleSlice.actions

export default articleSlice.reducer