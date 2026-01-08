import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import images from '/img/index.js';

export const articlesAPI = createApi({
  // Do not confuse this and the name of the const. Yes, they are barely different. This is the reducer that manages cache
  reducerPath: 'articlesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (builder) => ({
    getArticles: builder.query({
      query: (limit = 28) => `posts?limit=${limit}`,
      transformResponse: (response) => {
        const imagesArray = Object.values(images);
        return response.posts.map((post, index) => ({
          ...post,
          image: imagesArray[index]
        }));
      },
    }),
    getArticleById: builder.query({
      query: (id) => `posts/${id}`,
      transformResponse: (response, meta, arg) => {
        const imagesArray = Object.values(images);
        const imageIndex = Number(arg) - 1
        return ({
          ...response,
          image: imagesArray[imageIndex]
        });
      },
    })
  })
})

export const { useGetArticlesQuery, useGetArticleByIdQuery } = articlesAPI;