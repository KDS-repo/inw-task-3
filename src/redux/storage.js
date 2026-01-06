import { configureStore } from '@reduxjs/toolkit';
import articleReducer from './articleSlice';
import { articlesAPI } from './reduxAPI';

const store = configureStore({
    reducer: {
        // Check for path correctness, there are similar names
        articlesApi: articlesAPI.reducer,
        articles: articleReducer
    },
    // Default middleware is generated automatically
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articlesAPI.middleware)
})

export default store