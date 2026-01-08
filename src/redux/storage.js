import { configureStore } from '@reduxjs/toolkit';
import articleReducer from './articleSlice';
import { articlesAPI } from './articlesAPI';
import { authAPI } from './authAPI';

const store = configureStore({
    reducer: {
        // Check for path correctness, there are similar names
        articlesApi: articlesAPI.reducer,
        articles: articleReducer,
        authApi: authAPI.reducer
    },
    // Default middleware is generated automatically
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(articlesAPI.middleware)
            .concat(authAPI.middleware)
})

export default store